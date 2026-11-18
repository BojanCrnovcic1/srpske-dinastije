import type { Dynasty } from "../types";

export const dynasties: Dynasty[] = [
  {
    id: "vojislavljevici",
    name: "Војислављевићи",
    slug: "vojislavljevici",

    description:
      "Prva srpska srednjovjekovna dinastija koja je izborila nezavisnost Duklje od Vizantije i uspostavila prvu kraljevinu na ovim prostorima.",

    period: {
      start: {
        year: 1034,
        precision: "year",
      },
      end: {
        year: 1186,
        precision: "year",
      },
    },

    image: "/images/dynasties/vojislavljevici.jpg",
    coverImage: "/images/backgrounds/vojislavljevici.jpg",

    rulerIds: ["stefan-vojislav", "mihailo-vojislavljevic", "konstantin-bodin"],

    eventIds: ["bitka-kod-bara-1042", "kraljevska-kruna-1077"],

    musicTrackId: "vojislavljevici-theme",

    status: "published",
    order: 1,
  },
  {
    id: "nemanjici",
    name: "Немањићи",
    slug: "nemanjici",

    description:
      "Jedna od najznačajnijih srpskih srednjovjekovnih dinastija, koja je obilježila razvoj srpske države, crkve i kulture.",

    period: {
      start: {
        year: 1166,
        precision: "year",
      },
      end: {
        year: 1371,
        precision: "year",
      },
    },

    image: "/images/dynasties/nemanjici.jpg",
    coverImage: "/images/backgrounds/nemanjici.jpg",

    rulerIds: ["stefan-nemanja", "stefan-prvovencani", "stefan-dusan"],

    eventIds: ["krunisanje-1217", "proglasenje-carstva-1346"],

    musicTrackId: "nemanjici-theme",

    status: "draft",
    order: 2,
  },
  {
    id: "lazarevici",
    name: "Лазаревићи",
    slug: "lazarevici",

    description:
      "Srednjovjekovna dinastija koja je predvodila Srbiju u doba Kosovskog boja i ostvarila snažan kulturni i ekonomski procvat kroz Srpsku despotovinu.",

    period: {
      start: {
        year: 1371,
        precision: "year",
      },
      end: {
        year: 1427,
        precision: "year",
      },
    },

    image: "/images/dynasties/lazarevici.jpg",
    coverImage: "/images/backgrounds/lazarevici.jpg",

    rulerIds: ["knez-lazar", "kneginja-milica", "despot-stefan-lazarevic"],

    eventIds: ["kosovski-boj-1389", "beograd-prestonica-1404"],

    musicTrackId: "lazarevici-theme",

    status: "published",
    order: 3,
  },
  {
    id: "brankovici",
    name: "Бранковићи",
    slug: "brankovici",

    description:
      "Posljednja srednjovjekovna vladarska dinastija koja je upravljala Srpskom despotovinom i vodila dugotrajnu borbu za očuvanje državnosti pred osmanskim osvajanjima.",

    period: {
      start: {
        year: 1427,
        precision: "year",
      },
      end: {
        year: 1502,
        precision: "year",
      },
    },

    image: "/images/dynasties/brankovici.jpg",
    coverImage: "/images/backgrounds/brankovici.jpg",

    rulerIds: ["vuk-brankovic", "djuradj-brankovic", "lazar-brankovic"],

    eventIds: ["izgradnja-smedereva-1430", "pad-smedereva-1459"],

    musicTrackId: "brankovici-theme",

    status: "published",
    order: 4,
  },
  {
    id: "karadjordjevici",
    name: "Карађорђевићи",
    slug: "karadjordjevici",

    description:
      "Novovjekovna dinastija potekla od vođe Prvog srpskog ustanka, koja je vodila Srbiju kroz oslobodilačke ratove i stvorila Kraljevinu Jugoslaviju.",

    period: {
      start: {
        year: 1804,
        precision: "year",
      },
      end: {
        year: 1945,
        precision: "year",
      },
    },

    image: "/images/dynasties/karadjordjevici.jpg",
    coverImage: "/images/backgrounds/karadjordjevici.jpg",

    rulerIds: [
      "karadjordje-petrovic",
      "knez-aleksandar-karadjordjevic",
      "kralj-petar-i",
      "kralj-aleksandar-i",
      "kralj-petar-ii",
    ],

    eventIds: [
      "prvi-srpski-ustanak-1804",
      "proboj-solunskog-fronta-1918",
      "ujedinjenje-1918",
    ],

    musicTrackId: "karadjordjevici-theme",

    status: "published",
    order: 5,
  },
  {
    id: "obrenovici",
    name: "Обреновићи",
    slug: "obrenovici",

    description:
      "Novovjekovna dinastija koja je diplomatskim putem i ustancima izborila autonomiju, međunarodno priznanje nezavisnosti Srbije i uzdigla je u rang kraljevine.",

    period: {
      start: {
        year: 1815,
        precision: "year",
      },
      end: {
        year: 1903,
        precision: "year",
      },
    },

    image: "/images/dynasties/obrenovici.jpg",
    coverImage: "/images/backgrounds/obrenovici.jpg",

    rulerIds: [
      "knez-milos",
      "knez-mihailo",
      "kralj-milan",
      "kralj-aleksandar-obrenovic",
    ],

    eventIds: [
      "drugi-srpski-ustanak-1815",
      "berlinski-kongres-1878",
      "proglasenje-kraljevine-1882",
    ],

    musicTrackId: "obrenovici-theme",

    status: "published",
    order: 6,
  },
];
