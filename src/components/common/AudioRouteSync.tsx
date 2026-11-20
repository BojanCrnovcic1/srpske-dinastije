import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAudio } from "../../hooks/useAudioPlayer";

const routeTracks: Record<string, string> = {
  "/": "ambient",

  "/dynasties/vlastimirovici": "vlastimirovici",
  "/dynasties/vukanovici": "vukanovici",
  "/dynasties/nemanjici": "nemanjici",
  "/dynasties/obrenovici": "obrenovici",
  "/dynasties/karadjordjevici": "karadjordjevici",
};

const AudioRouteSync = () => {
  const { pathname } = useLocation();
  const { setTrack } = useAudio();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/$/, "") || "/";
    const trackId = routeTracks[normalizedPath];

    if (trackId) {
      setTrack(trackId);
    }
  }, [pathname, setTrack]);

  return null;
};

export default AudioRouteSync;
