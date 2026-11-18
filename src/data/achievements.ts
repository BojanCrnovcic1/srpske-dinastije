import type { Achievement } from "../types";

export const achievements: Achievement[] = [
  {
    id: "ujedinjenje-zemalja",
    rulerId: "stefan-nemanja",

    title: "Učvršćivanje srpske države",
    description:
      "Učvršćivanje vlasti i proširenje teritorije pod vlašću Stefana Nemanje.",

    category: "political",

    date: {
      year: 1166,
      precision: "approximate",
    },

    status: "draft",
    order: 1,
  },

  {
    id: "manastir-studenica",
    rulerId: "stefan-nemanja",

    title: "Manastir Studenica",
    description:
      "Podizanje jedne od najznačajnijih srpskih srednjovjekovnih zadužbina.",

    category: "architectural",

    date: {
      year: 1190,
      precision: "approximate",
    },

    image: "/images/achievements/studenica.jpg",

    status: "draft",
    order: 2,
  },

  {
    id: "dušanov-zakonik",
    rulerId: "stefan-dusan",

    title: "Dušanov zakonik",
    description:
      "Značajan pravni zbornik srednjovjekovne Srbije, donesen 1349. godine i dopunjen 1354.",

    category: "legal",

    date: {
      year: 1349,
      precision: "year",
    },

    status: "draft",
    order: 1,
  },
];
