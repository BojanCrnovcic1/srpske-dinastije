import type { Dynasty } from "./dynasty";
import type { Ruler } from "./ruler";
import type { Achievement } from "./achievement";
import type { HistoricalEvent } from "./historical-event";

export interface DynastyDetail extends Dynasty {
  rulers: Ruler[];
  achievements: Achievement[];
  events: HistoricalEvent[];
}
