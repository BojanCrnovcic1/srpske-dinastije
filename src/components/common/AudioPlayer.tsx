import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  FaVolumeUp,
  FaVolumeMute,
  FaPlay,
  FaPause,
  FaMusic,
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
  } = useAudio();

  // Close player when clicking outside
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

  return (
    <div
      ref={panelRef}
      className={clsx("audio-player", isOpen && "audio-player--open")}
    >
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
        <FaVolumeUp aria-hidden="true" />

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
                      : "Ambient"}
                  </span>
                </div>
              </div>
            </div>

            <div className="audio-player__controls">
              <button
                type="button"
                className="audio-player__play-button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Пауза" : "Пусти музику"}
              >
                {isPlaying ? (
                  <FaPause aria-hidden="true" />
                ) : (
                  <FaPlay aria-hidden="true" />
                )}
              </button>

              <span className="audio-player__status">
                {isPlaying ? "PLAYING" : "PAUSED"}
              </span>
            </div>

            <div className="audio-player__divider" />

            <div className="audio-player__section">
              <span className="audio-player__section-label">
                SELECT SOUNDTRACK
              </span>

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
                        {isPlaying ? "♫" : "✓"}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="audio-player__divider" />

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
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
