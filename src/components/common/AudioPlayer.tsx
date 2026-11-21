import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  FaVolumeUp,
  FaVolumeMute,
  FaPlay,
  FaPause,
  FaMusic,
  FaRedoAlt,
} from "react-icons/fa";

import { useAudio } from "../../hooks/useAudioPlayer";
import { musicTracks } from "../../data/music";

const categoryLabels: Record<string, string> = {
  byzantine: "Byzantine",
  epic: "Epic",
  royal: "Royal",
};

const AudioPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const {
    currentTrack,
    isPlaying,
    togglePlay,
    setTrack,
    volume,
    setVolume,
    isMuted,
    toggleMute,
    selectionMode,
    enableAutomaticSelection,
    autoplayBlocked,
  } = useAudio();

  // ==========================================================
  // CLOSE ON OUTSIDE CLICK
  // ==========================================================

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ==========================================================
  // CLOSE WITH ESCAPE
  // ==========================================================

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div
      ref={panelRef}
      className={clsx("audio-player", isOpen && "audio-player--open")}
    >
      {/* TRIGGER */}

      <button
        type="button"
        className={clsx(
          "audio-player__trigger",
          isPlaying && "audio-player__trigger--playing",
        )}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label="Музички плејер"
        aria-expanded={isOpen}
        aria-controls="audio-player-panel"
      >
        {isMuted || volume === 0 ? (
          <FaVolumeMute aria-hidden="true" />
        ) : (
          <FaVolumeUp aria-hidden="true" />
        )}

        {isPlaying && (
          <span className="audio-player__visualizer" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="audio-player__backdrop" />

          <div
            id="audio-player-panel"
            className="audio-player__panel"
            role="dialog"
            aria-label="Audio player"
          >
            {/* HEADER */}

            <div className="audio-player__header">
              <div className="audio-player__header-icon">
                <FaMusic aria-hidden="true" />
              </div>

              <div className="audio-player__header-content">
                <span className="audio-player__eyebrow">AUDIO EXPERIENCE</span>

                <h3>Музика историје</h3>
              </div>

              <button
                type="button"
                className="audio-player__close"
                onClick={() => setIsOpen(false)}
                aria-label="Затвори плејер"
              >
                ×
              </button>
            </div>

            {/* PLAYBACK MODE */}

            <div className="audio-player__mode">
              <div className="audio-player__mode-info">
                <span className="audio-player__section-label">
                  PLAYBACK MODE
                </span>

                <span
                  className={clsx(
                    "audio-player__mode-status",
                    selectionMode === "automatic"
                      ? "audio-player__mode-status--automatic"
                      : "audio-player__mode-status--manual",
                  )}
                >
                  <span className="audio-player__mode-indicator" />

                  {selectionMode === "automatic"
                    ? "AUTOMATIC"
                    : "MANUAL SELECTION"}
                </span>
              </div>

              {selectionMode === "manual" && (
                <button
                  type="button"
                  className="audio-player__automatic-button"
                  onClick={enableAutomaticSelection}
                >
                  <FaRedoAlt aria-hidden="true" />
                  <span>Врати аутоматску музику</span>
                </button>
              )}
            </div>

            {/* CURRENT TRACK */}

            <div className="audio-player__current">
              <span className="audio-player__current-label">
                CURRENT SOUNDTRACK
              </span>

              <div className="audio-player__track-info">
                <div className="audio-player__track-icon">
                  <FaMusic aria-hidden="true" />
                </div>

                <div className="audio-player__track-text">
                  <h4>{currentTrack?.title ?? "No track selected"}</h4>

                  <span>
                    {currentTrack
                      ? (categoryLabels[currentTrack.category] ??
                        currentTrack.category)
                      : "No category"}
                  </span>
                </div>
              </div>
            </div>

            {/* AUTOPLAY NOTICE */}

            {autoplayBlocked && !isPlaying && (
              <div className="audio-player__autoplay-notice" role="status">
                <span className="audio-player__notice-icon">
                  <FaVolumeMute aria-hidden="true" />
                </span>

                <p>
                  Ваш прегледач је блокирао аутоматску репродукцију. Притисните
                  дугме за репродукцију да бисте покренули музику.
                </p>
              </div>
            )}

            {/* PLAYBACK CONTROLS */}

            <div className="audio-player__controls">
              <button
                type="button"
                className={clsx(
                  "audio-player__play-button",
                  isPlaying && "audio-player__play-button--active",
                )}
                onClick={togglePlay}
                aria-label={isPlaying ? "Пауза" : "Пусти музику"}
              >
                {isPlaying ? (
                  <FaPause aria-hidden="true" />
                ) : (
                  <FaPlay aria-hidden="true" />
                )}
              </button>

              <div className="audio-player__playback-info">
                <span className="audio-player__status">
                  {isPlaying ? "NOW PLAYING" : "PAUSED"}
                </span>

                <span className="audio-player__playback-description">
                  {isPlaying
                    ? "Историја оживљава кроз музику"
                    : "Репродукција је заустављена"}
                </span>
              </div>
            </div>

            <div className="audio-player__divider" />

            {/* TRACK LIBRARY */}

            <div className="audio-player__section">
              <div className="audio-player__library-header">
                <span className="audio-player__section-label">
                  SELECT SOUNDTRACK
                </span>

                <span className="audio-player__track-count">
                  {musicTracks.length} TRACKS
                </span>
              </div>

              <div className="audio-player__tracks">
                {musicTracks.map((track) => (
                  <button
                    type="button"
                    key={track.id}
                    className={clsx(
                      "audio-player__track-option",
                      currentTrack?.id === track.id &&
                        "audio-player__track-option--active",
                    )}
                    onClick={() => setTrack(track.id)}
                    aria-pressed={currentTrack?.id === track.id}
                  >
                    <span className="audio-player__track-option-icon">
                      <FaMusic aria-hidden="true" />
                    </span>

                    <span className="audio-player__track-option-content">
                      <span className="audio-player__track-option-title">
                        {track.title}
                      </span>

                      <span className="audio-player__track-option-category">
                        {categoryLabels[track.category] ?? track.category}
                      </span>
                    </span>

                    {currentTrack?.id === track.id && (
                      <span className="audio-player__track-indicator">
                        {isPlaying ? (
                          <span className="audio-player__mini-visualizer">
                            <span />
                            <span />
                            <span />
                          </span>
                        ) : (
                          "✓"
                        )}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="audio-player__divider" />

            {/* VOLUME */}

            <div className="audio-player__volume">
              <div className="audio-player__volume-header">
                <span className="audio-player__section-label">VOLUME</span>

                <span className="audio-player__volume-value">
                  {Math.round(volume * 100)}%
                </span>
              </div>

              <div className="audio-player__volume-controls">
                <button
                  type="button"
                  className="audio-player__mute-button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Укључи звук" : "Искључи звук"}
                >
                  {isMuted || volume === 0 ? (
                    <FaVolumeMute aria-hidden="true" />
                  ) : (
                    <FaVolumeUp aria-hidden="true" />
                  )}
                </button>

                <input
                  className="audio-player__volume-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(event) => setVolume(Number(event.target.value))}
                  aria-label="Јачина звука"
                />
              </div>
            </div>

            {/* FOOTER */}

            <div className="audio-player__footer">
              <span>СРПСКЕ ДИНАСТИЈЕ</span>
              <span>HISTORICAL SOUNDTRACK</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
