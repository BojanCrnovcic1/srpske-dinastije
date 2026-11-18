export type ID = string;

export type ContentStatus = "draft" | "published";

export type DatePrecision = "exact" | "year" | "approximate" | "century";

export interface HistoricalDate {
  year: number;
  month?: number;
  day?: number;
  precision: DatePrecision;
  label?: string;
}

export interface HistoricalPeriod {
  start: HistoricalDate;
  end?: HistoricalDate | null;
}

export interface EntityBase {
  id: ID;
  createdAt?: string;
  updatedAt?: string;
}
