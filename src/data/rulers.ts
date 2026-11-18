import type { Ruler } from "../types";

export const rulers: Ruler[] = [
  {
    id: "stefan-nemanja",
    dynastyId: "nemanjici",

    name: "Стефан Немања",
    slug: "stefan-nemanja",
    title: "veliki-zupan",

    description:
      "Osnivač dinastije Nemanjić i jedan od najznačajnijih srpskih vladara srednjeg vijeka.",

    reigns: [
      {
        start: { year: 1166, precision: "year" },
        end: { year: 1196, precision: "year" },
        title: "veliki-zupan",
      },
    ],
    titleHistory: [],

    portrait: "/images/rulers/stefan-nemanja.jpg",

    achievementsIds: ["ujedinjenje-zemalja", "manastir-studenica"],

    eventIds: [],

    successorId: "stefan-prvovencani",

    status: "draft",
    order: 1,
  },

  {
    id: "stefan-prvovencani",
    dynastyId: "nemanjici",

    name: "Стефан Првовенчани",
    slug: "stefan-prvovencani",
    title: "kralj",

    description: "Prvi krunisani kralj Srbije i nasljednik Stefana Nemanje.",

    reigns: [
      {
        start: { year: 1196, precision: "year" },
        end: { year: 1228, precision: "year" },
        title: "kralj",
      },
    ],
    titleHistory: [],

    portrait: "/images/rulers/stefan-prvovencani.jpg",

    achievementsIds: ["krunisanje-srbije"],

    eventIds: ["krunisanje-1217"],

    predecessorId: "stefan-nemanja",
    successorId: "stefan-radoslav",

    status: "draft",
    order: 2,
  },

  {
    id: "stefan-dusan",
    dynastyId: "nemanjici",

    name: "Стефан Душан",
    slug: "stefan-dusan",
    title: "car",

    description:
      "Srpski kralj i car, poznat po teritorijalnom širenju države i donošenju zakonika.",

    reigns: [
      {
        start: { year: 1331, precision: "year" },
        end: { year: 1355, precision: "year" },
        title: "kralj",
      },
      {
        start: { year: 1346, precision: "year" },
        end: { year: 1355, precision: "year" },
        title: "car",
        note: "Carska titula od 1346. godine.",
      },
    ],

    titleHistory: [
      {
        start: { year: 1331, precision: "year" },
        title: "kralj",
      },
      {
        start: { year: 1346, precision: "year" },
        title: "car",
      },
    ],

    portrait: "/images/rulers/stefan-dusan.jpg",

    achievementsIds: ["dušanov-zakonik"],

    eventIds: ["proglasenje-carstva-1346"],

    predecessorId: "stefan-decanски",
    status: "draft",
    order: 3,
  },
];
