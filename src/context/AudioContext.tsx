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

// Load settings from localStorage.
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

export const AudioProvider = ({ children }: AudioProviderProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [settings, setSettings] = useState<MusicSettings>(getInitialSettings);

  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Current track.
  const currentTrack = useMemo(
    () =>
      musicTracks.find((track) => track.id === settings.currentTrackId) ??
      musicTracks[0] ??
      null,
    [settings.currentTrackId],
  );

  // Persist settings.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Storage may be unavailable.
    }
  }, [settings]);

  // Synchronize volume and mute.
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = settings.volume;
    audio.muted = settings.muted;
  }, [settings.volume, settings.muted]);

  // Handle track changes and automatic playback.
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !currentTrack) return;

    audio.pause();
    audio.load();

    setIsPlaying(false);
    setAutoplayBlocked(false);

    if (!settings.enabled) return;

    audio.play().catch(() => {
      setIsPlaying(false);
      setAutoplayBlocked(true);
    });
  }, [currentTrack?.src, settings.enabled]);

  // Play.
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
      setAutoplayBlocked(true);
      setIsPlaying(false);
    }
  }, [currentTrack]);

  // Pause.
  const pause = useCallback(() => {
    audioRef.current?.pause();

    setSettings((previous) => ({
      ...previous,
      enabled: false,
    }));

    setIsPlaying(false);
    setAutoplayBlocked(false);
  }, []);

  // Toggle playback.
  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      void play();
    }
  }, [isPlaying, play, pause]);

  // Manual track selection.
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

  // Automatic track selection for a dynasty or homepage.
  const setDynastyTracks = useCallback((trackIds: ID[]) => {
    const validTracks = trackIds.filter((trackId) =>
      musicTracks.some((track) => track.id === trackId),
    );

    if (validTracks.length === 0) return;

    setSettings((previous) => {
      // Manual selection always has priority.
      if (previous.selectionMode === "manual") {
        return previous;
      }

      return {
        ...previous,
        currentTrackId: validTracks[0],
      };
    });
  }, []);

  // Return to automatic selection.
  const enableAutomaticSelection = useCallback((trackIds: ID[]) => {
    const validTracks = trackIds.filter((trackId) =>
      musicTracks.some((track) => track.id === trackId),
    );

    if (validTracks.length === 0) return;

    setSettings((previous) => ({
      ...previous,
      selectionMode: "automatic",
      currentTrackId: validTracks[0],
      enabled: true,
    }));
  }, []);

  // Volume.
  const setVolume = useCallback((volume: number) => {
    const normalized = Math.max(0, Math.min(1, volume));

    setSettings((previous) => ({
      ...previous,
      volume: normalized,
      muted: normalized === 0,
    }));
  }, []);

  // Mute.
  const toggleMute = useCallback(() => {
    setSettings((previous) => ({
      ...previous,
      muted: !previous.muted,
    }));
  }, []);

  // Audio events.
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
      setDynastyTracks,
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
      setDynastyTracks,
      enableAutomaticSelection,
      setVolume,
      toggleMute,
    ],
  );

  return (
    <AudioContext.Provider value={value}>
      {children}

      <audio
        ref={audioRef}
        src={currentTrack?.src}
        loop
        preload="auto"
        onPlay={handlePlay}
        onPause={handlePause}
        onError={handleError}
      />
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudioContext must be used within AudioProvider");
  }

  return context;
};
