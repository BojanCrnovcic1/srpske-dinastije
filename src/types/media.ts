import type { EntityBase } from "./common";

export type MediaType = "portrait" | "cover" | "illustration" | "background";

export interface MediaAsset extends EntityBase {
  type: MediaType;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}
