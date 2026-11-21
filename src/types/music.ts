import type { EntityBase, ID } from "./common";

export type MusicCategory = "byzantine" | "epic" | "royal";

export type MusicSelectionMode = "automatic" | "manual";

export interface MusicTrack extends EntityBase {
  title: string;
  src: string;
  category: MusicCategory;
  duration?: number;
}

export interface MusicSettings {
  enabled: boolean;
  volume: number;
  currentTrackId: ID | null;
  muted: boolean;
  selectionMode: MusicSelectionMode;
}

export interface AudioContextType {
  currentTrack: MusicTrack | null;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  selectionMode: MusicSelectionMode;
  autoplayBlocked: boolean;

  play: () => Promise<void>;
  pause: () => void;
  togglePlay: () => void;

  setTrack: (trackId: ID) => void;
  setAutomaticPlaylist: (trackIds: ID[]) => void;
  enableAutomaticSelection: () => void;

  setVolume: (volume: number) => void;
  toggleMute: () => void;
}
