import type { EntityBase, ID } from "./common";

export interface HistoricalSource extends EntityBase {
  title: string;
  author?: string;
  publisher?: string;
  url?: string;
  publicationYear?: number;
  accessedAt?: string;
}

export interface SourceLink {
  sourceId: ID;
  note?: string;
}
