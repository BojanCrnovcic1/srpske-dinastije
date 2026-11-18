import type { EntityBase, ID, HistoricalDate, ContentStatus } from "./common";

export type AchievementCategory =
  | "military"
  | "political"
  | "cultural"
  | "religious"
  | "legal"
  | "territorial"
  | "architectural"
  | "other";

export interface Achievement extends EntityBase {
  rulerId: ID;

  title: string;
  description: string;

  category: AchievementCategory;
  date?: HistoricalDate;

  image?: string;

  sourceIds?: ID[];

  status: ContentStatus;
  order: number;
}
