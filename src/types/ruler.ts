import type { EntityBase, HistoricalPeriod, ID, ContentStatus } from "./common";

export type RulerTitle =
  | "veliki-zupan"
  | "kralj"
  | "car"
  | "knez"
  | "despot"
  | "princ"
  | "regent";

export interface ReignPeriod extends HistoricalPeriod {
  title: RulerTitle;
  note?: string;
}

export interface RulerTitlePeriod extends HistoricalPeriod {
  title: RulerTitle;
}

export interface Ruler extends EntityBase {
  dynastyId: ID;

  name: string;
  slug: string;
  title: RulerTitle;

  description: string;
  biography?: string;

  reigns: ReignPeriod[];

  portrait: string;
  achievementsIds: ID[];
  eventIds: ID[];

  predecessorId?: ID;
  successorId?: ID;

  sourceIds?: ID[];

  status: ContentStatus;
  order: number;

  titleHistory: RulerTitlePeriod[];
}
