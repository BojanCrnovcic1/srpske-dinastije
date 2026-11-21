import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import type {
  AudioContextType,
  MusicSettings,
  MusicSelectionMode,
} from "../types";

import type { ID } from "../types/common";

import { musicTracks } from "../data/music";

const STORAGE_KEY = "dynasties-music-settings";

const DEFAULT_PLAYLIST: ID[] = ["byzantine-01", "byzantine-02"];

const DEFAULT_SETTINGS: MusicSettings = {
  enabled: true,
  volume: 0.2,
  currentTrackId: "byzantine-01",
  muted: false,
  selectionMode: "automatic",
};

interface AudioProviderProps {
  children: ReactNode;
}

const AudioContext = createContext<AudioContextType | null>(null);

// ============================================================
// INITIAL SETTINGS
// ============================================================

const getInitialSettings = (): MusicSettings => {
  if (typeof window === "undefined") {
    return DEFAULT_SETTINGS;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return DEFAULT_SETTINGS;

    const parsed = JSON.parse(stored) as Partial<MusicSettings>;

    const validTrack = musicTracks.some(
      (track) => track.id === parsed.currentTrackId,
    );

    const validMode: MusicSelectionMode =
      parsed.selectionMode === "manual" ? "manual" : "automatic";

    return {
      enabled:
        typeof parsed.enabled === "boolean"
          ? parsed.enabled
          : DEFAULT_SETTINGS.enabled,

      volume:
        typeof parsed.volume === "number" && Number.isFinite(parsed.volume)
          ? Math.max(0, Math.min(1, parsed.volume))
          : DEFAULT_SETTINGS.volume,

      currentTrackId: validTrack
        ? parsed.currentTrackId!
        : DEFAULT_SETTINGS.currentTrackId,

      muted:
        typeof parsed.muted === "boolean"
          ? parsed.muted
          : DEFAULT_SETTINGS.muted,

      selectionMode: validMode,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
};

// ============================================================
// PROVIDER
// ============================================================

export const AudioProvider = ({ children }: AudioProviderProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Currently active automatic playlist.
  const playlistTrackIdsRef = useRef<ID[]>(DEFAULT_PLAYLIST);

  // Track currently loaded in the audio element.
  const previousTrackIdRef = useRef<ID | null>(null);

  const [settings, setSettings] = useState<MusicSettings>(getInitialSettings);

  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // ==========================================================
  // CURRENT TRACK
  // ==========================================================

  const currentTrack = useMemo(
    () =>
      musicTracks.find((track) => track.id === settings.currentTrackId) ??
      musicTracks[0] ??
      null,
    [settings.currentTrackId],
  );

  // ==========================================================
  // PERSIST SETTINGS
  // ==========================================================

  useEffect(() => {
    if (!settings.enabled || isPlaying) return;

    const handleFirstInteraction = () => {
      const audio = audioRef.current;

      if (!audio) return;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch(() => {
          setAutoplayBlocked(true);
        });
    };

    const events = ["click", "touchstart", "scroll", "keydown"];

    events.forEach((event) => {
      window.addEventListener(event, handleFirstInteraction, {
        once: true,
        passive: true,
      });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [settings.enabled, isPlaying]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // localStorage may be unavailable.
    }
  }, [settings]);

  // ==========================================================
  // SYNCHRONIZE VOLUME
  // ==========================================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = settings.volume;
    audio.muted = settings.muted;
  }, [settings.volume, settings.muted]);

  // ==========================================================
  // TRACK CHANGES AND PLAYBACK
  // ==========================================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !currentTrack) return;

    const trackChanged = previousTrackIdRef.current !== currentTrack.id;

    if (trackChanged) {
      audio.pause();
      previousTrackIdRef.current = currentTrack.id;

      setIsPlaying(false);
      setAutoplayBlocked(false);
    }

    if (!settings.enabled) {
      audio.pause();
      return;
    }

    // Attempt playback. The browser may require user interaction.
    audio.play().catch(() => {
      setIsPlaying(false);
      setAutoplayBlocked(true);
    });
  }, [currentTrack?.id, settings.enabled]);

  // ==========================================================
  // PLAY
  // ==========================================================

  const play = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio || !currentTrack) return;

    setSettings((previous) => ({
      ...previous,
      enabled: true,
    }));

    try {
      await audio.play();
      setAutoplayBlocked(false);
    } catch {
      setIsPlaying(false);
      setAutoplayBlocked(true);
    }
  }, [currentTrack]);

  // ==========================================================
  // PAUSE
  // ==========================================================

  const pause = useCallback(() => {
    audioRef.current?.pause();

    setSettings((previous) => ({
      ...previous,
      enabled: false,
    }));

    setIsPlaying(false);
    setAutoplayBlocked(false);
  }, []);

  // ==========================================================
  // TOGGLE PLAYBACK
  // ==========================================================

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      void play();
    }
  }, [isPlaying, play, pause]);

  // ==========================================================
  // MANUAL TRACK SELECTION
  // ==========================================================

  const setTrack = useCallback((trackId: ID) => {
    const selectedTrack = musicTracks.find((track) => track.id === trackId);

    if (!selectedTrack) return;

    setSettings((previous) => ({
      ...previous,
      currentTrackId: trackId,
      selectionMode: "manual",
      enabled: true,
    }));
  }, []);

  // ==========================================================
  // AUTOMATIC PLAYLIST
  // ==========================================================

  const setAutomaticPlaylist = useCallback((trackIds: ID[]) => {
    const validTracks = Array.from(new Set(trackIds)).filter((trackId) =>
      musicTracks.some((track) => track.id === trackId),
    );

    // Use the default playlist if the dynasty has no music.
    const nextPlaylist =
      validTracks.length > 0 ? validTracks : DEFAULT_PLAYLIST;

    // Always remember the active playlist.
    playlistTrackIdsRef.current = nextPlaylist;

    setSettings((previous) => {
      // Do not interrupt manually selected music.
      if (previous.selectionMode === "manual") {
        return previous;
      }

      // Avoid unnecessarily restarting the same track.
      if (nextPlaylist.includes(previous.currentTrackId ?? "")) {
        return previous;
      }

      return {
        ...previous,
        currentTrackId: nextPlaylist[0],
      };
    });
  }, []);

  // ==========================================================
  // RETURN TO AUTOMATIC SELECTION
  // ==========================================================

  const enableAutomaticSelection = useCallback(() => {
    const playlist = playlistTrackIdsRef.current;

    if (playlist.length === 0) return;

    setSettings((previous) => ({
      ...previous,
      selectionMode: "automatic",
      currentTrackId: playlist[0],
      enabled: true,
    }));
  }, []);

  // ==========================================================
  // PLAY NEXT TRACK WHEN CURRENT TRACK ENDS
  // ==========================================================

  const handleEnded = useCallback(() => {
    if (settings.selectionMode !== "automatic") return;

    const playlist = playlistTrackIdsRef.current;

    if (playlist.length === 0) return;

    const currentIndex = playlist.indexOf(settings.currentTrackId ?? "");

    const nextIndex =
      currentIndex === -1 ? 0 : (currentIndex + 1) % playlist.length;

    const nextTrackId = playlist[nextIndex];

    setSettings((previous) => ({
      ...previous,
      currentTrackId: nextTrackId,
    }));
  }, [settings.selectionMode, settings.currentTrackId]);

  // ==========================================================
  // VOLUME
  // ==========================================================

  const setVolume = useCallback((volume: number) => {
    const normalized = Math.max(0, Math.min(1, volume));

    setSettings((previous) => ({
      ...previous,
      volume: normalized,
      muted: normalized === 0,
    }));
  }, []);

  // ==========================================================
  // MUTE
  // ==========================================================

  const toggleMute = useCallback(() => {
    setSettings((previous) => ({
      ...previous,
      muted: !previous.muted,
    }));
  }, []);

  // ==========================================================
  // AUDIO EVENTS
  // ==========================================================

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    setAutoplayBlocked(false);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleError = useCallback(() => {
    setIsPlaying(false);
  }, []);

  // ==========================================================
  // CONTEXT VALUE
  // ==========================================================

  const value = useMemo<AudioContextType>(
    () => ({
      currentTrack,
      isPlaying,
      volume: settings.volume,
      isMuted: settings.muted,
      selectionMode: settings.selectionMode,
      autoplayBlocked,

      play,
      pause,
      togglePlay,

      setTrack,
      setAutomaticPlaylist,
      enableAutomaticSelection,

      setVolume,
      toggleMute,
    }),
    [
      currentTrack,
      isPlaying,
      settings.volume,
      settings.muted,
      settings.selectionMode,
      autoplayBlocked,
      play,
      pause,
      togglePlay,
      setTrack,
      setAutomaticPlaylist,
      enableAutomaticSelection,
      setVolume,
      toggleMute,
    ],
  );

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <AudioContext.Provider value={value}>
      {children}

      <audio
        ref={audioRef}
        src={currentTrack?.src}
        loop={settings.selectionMode === "manual"}
        preload="auto"
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onError={handleError}
      />
    </AudioContext.Provider>
  );
};

// ============================================================
// HOOK
// ============================================================

export const useAudioContext = () => {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudioContext must be used within AudioProvider");
  }

  return context;
};
