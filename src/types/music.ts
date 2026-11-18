import type { EntityBase, ID } from "./common";

export type MusicCategory = "ambient" | "byzantine" | "royal" | "epic";

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
}
