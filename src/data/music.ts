import type { MusicTrack } from "../types";

export const musicTracks: MusicTrack[] = [
  {
    id: "nemanjici-theme",
    title: "Vizantijski ambijent",
    src: "/audio/nemanjici-ambient.mp3",
    category: "byzantine",
    duration: 210,
  },
  {
    id: "obrenovici-theme",
    title: "Kraljevski ambijent",
    src: "/audio/obrenovici-ambient.mp3",
    category: "royal",
    duration: 180,
  },
  {
    id: "karadjordjevici-theme",
    title: "Epski ambijent",
    src: "/audio/karadjordjevici-ambient.mp3",
    category: "epic",
    duration: 195,
  },
];
