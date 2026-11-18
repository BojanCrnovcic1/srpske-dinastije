import type { HistoricalEvent } from "../types";

export const events: HistoricalEvent[] = [
  {
    id: "krunisanje-1217",
    dynastyId: "nemanjici",

    rulerIds: ["stefan-prvovencani"],

    title: "Krunisanje Stefana Prvovenčanog",

    description: "Stefan Prvovenčani krunisan je za kralja 1217. godine.",

    date: {
      year: 1217,
      precision: "year",
    },

    category: "coronation",

    status: "draft",
    order: 1,
  },

  {
    id: "proglasenje-carstva-1346",
    dynastyId: "nemanjici",

    rulerIds: ["stefan-dusan"],

    title: "Proglašenje Srpskog carstva",

    description: "Stefan Dušan proglašen je za cara 1346. godine.",

    date: {
      year: 1346,
      precision: "year",
    },

    category: "political",

    status: "draft",
    order: 2,
  },
];
