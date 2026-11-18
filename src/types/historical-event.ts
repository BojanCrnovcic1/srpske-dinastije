import type { EntityBase, ID, HistoricalDate, ContentStatus } from "./common";

export type EventCategory =
  | "battle"
  | "coronation"
  | "treaty"
  | "uprising"
  | "political"
  | "religious"
  | "legislation"
  | "other";

export interface HistoricalEvent extends EntityBase {
  dynastyId: ID;

  rulerIds: ID[];

  title: string;
  description: string;

  date: HistoricalDate;
  category: EventCategory;

  image?: string;

  sourceIds?: ID[];

  status: ContentStatus;
  order: number;
}
