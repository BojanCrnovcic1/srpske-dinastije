import type { EntityBase, HistoricalPeriod, ID, ContentStatus } from "./common";

export interface Dynasty extends EntityBase {
  name: string;
  slug: string;
  description: string;
  period: HistoricalPeriod;

  image: string;
  coverImage: string;

  rulerIds: ID[];
  eventIds: ID[];

  musicTrackId?: ID;

  status: ContentStatus;
  order: number;
}
