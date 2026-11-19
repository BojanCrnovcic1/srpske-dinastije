import type { Dynasty } from "../types";

export const dynasties: Dynasty[] = [
  {
    id: "vlastimirovici",
    name: "Властимировићи",
    slug: "vlastimirovici",

    description:
      "Најстарија позната српска владарска династија која је у раном средњем вијеку обликовала прву српску кнежевину и успјешно је одбранила од бугарских напада.",

    period: {
      start: {
        year: 780,
        precision: "approximate",
      },
      end: {
        year: 960,
        precision: "approximate",
      },
    },

    image: "/assets/images/dynasties/vlastimirovici.jpg",
    coverImage: "/assets/images/backgrounds/vlastimirovici.jpg",

    rulerIds: [
      "knez-viseslav",
      "knez-vlastimir",
      "knez-mutimir",
      "knez-caslav",
    ],

    eventIds: ["odbrana-od-bugara-839", "primanje-hriscanstva-870"],

    musicTrackId: "vlastimirovici-theme",

    status: "published",
    order: 1,
  },
  {
    id: "vojislavljevici",
    name: "Војислављевићи",
    slug: "vojislavljevici",

    description:
      "Прва српска средњовјековна династија која је изборила независност Дукље од Византије и успоставила прву краљевину на овим просторима.",

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

    image: "/assets/images/dynasties/vojislavljevici.webp",
    coverImage: "/images/backgrounds/vojislavljevici.webp",

    rulerIds: ["stefan-vojislav", "mihailo-vojislavljevic", "konstantin-bodin"],

    eventIds: ["bitka-kod-bara-1042", "kraljevska-kruna-1077"],

    musicTrackId: "vojislavljevici-theme",

    status: "draft",
    order: 2,
  },
  {
    id: "nemanjici",
    name: "Немањићи",
    slug: "nemanjici",

    description:
      "Једна од најзначајнијих српских средњовјековних династија која је обиљежила развој српске државе, цркве и културе.",

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

    image: "/assets/images/dynasties/nemanjici.webp",
    coverImage: "/assets/images/backgrounds/nemanjici.webp",

    rulerIds: [
      "stefan-nemanja",
      "stefan-prvovencani",
      "stefan-radoslav",
      "stefan-vladislav",
      "uros-i",
      "dragutin",
      "milutin",
      "stefan-decanski",
      "stefan-dusan",
      "uros-v",
    ],

    eventIds: [
      "krunisanje-1217",
      "autokefalnost-crkve-1219",
      "sabor-u-dezevu-1282",
      "bitka-kod-velbuzda-1330",
      "proglasenje-carstva-1346",
    ],

    musicTrackId: "nemanjici-theme",

    status: "draft",
    order: 3,
  },
  {
    id: "kotromanici",
    name: "Котроманићи",
    slug: "kotromanici",

    description:
      "Владарска династија средњовјековне Босне која је под баном Кулином и краљем Твртком I достигла највећи територијални и културни успон.",

    period: {
      start: {
        year: 1250,
        precision: "approximate",
      },
      end: {
        year: 1463,
        precision: "year",
      },
    },

    image: "/assets/images/dynasties/kotromanici.jpg",
    coverImage: "/assets/images/backgrounds/kotromanici.jpg",

    rulerIds: [
      "ban-stjepan-ii",
      "kralj-tvrtko-i",
      "kralj-stjepan-tomas",
      "stjepan-tomasevic",
    ],

    eventIds: ["krunisanje-u-milesevi-1377", "pad-bosne-1463"],

    musicTrackId: "kotromanici-theme",

    status: "published",
    order: 4,
  },
  {
    id: "balsici",
    name: "Балшићи",
    slug: "balsici",

    description:
      "Средњовјековна великашка и владарска династија која је након распада Српског царства владала Зетом и успјешно се одупирала Млечанима и Османлијама.",

    period: {
      start: {
        year: 1360,
        precision: "year",
      },
      end: {
        year: 1421,
        precision: "year",
      },
    },

    image: "/assets/images/dynasties/balsici.jpg",
    coverImage: "/assets/images/backgrounds/balsici.jpg",

    rulerIds: ["balsa-i", "djuradj-i-balsic", "balsa-ii", "balsa-iii"],

    eventIds: [
      "bitka-na-saurskom-polju-1385",
      "pripajanje-zete-despotovini-1421",
    ],

    musicTrackId: "balsici-theme",

    status: "published",
    order: 5,
  },
  {
    id: "mrnjavcevici",
    name: "Мрњавчевићи",
    slug: "mrnjavcevici",

    description:
      "Моћна средњовјековна династија која је владала јужним српским областима у Македонији и предводила хришћанску војску у Маричкој бици.",

    period: {
      start: {
        year: 1365,
        precision: "year",
      },
      end: {
        year: 1395,
        precision: "year",
      },
    },

    image: "/assets/images/dynasties/mrnjavcevici.jpg",
    coverImage: "/assets/images/backgrounds/mrnjavcevici.jpg",

    rulerIds: ["kralj-vukasin", "despot-ugljesa", "kraljevic-marko"],

    eventIds: ["maricka-bitka-1371", "bitka-na-rovinama-1395"],

    musicTrackId: "mrnjavcevici-theme",

    status: "published",
    order: 6,
  },
  {
    id: "lazarevici",
    name: "Лазаревићи",
    slug: "lazarevici",

    description:
      "Средњовјековна династија која је предводила Србију у доба Косовског боја и остварила снажан културни и економски процват кроз Српску деспотовину.",

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

    image: "/assets/images/dynasties/lazarevici.jpg",
    coverImage: "/assets/images/backgrounds/lazarevici.jpg",

    rulerIds: ["knez-lazar", "kneginja-milica", "despot-stefan-lazarevic"],

    eventIds: ["kosovski-boj-1389", "beograd-prestonica-1404"],

    musicTrackId: "lazarevici-theme",

    status: "published",
    order: 7,
  },
  {
    id: "brankovici",
    name: "Бранковићи",
    slug: "brankovici",

    description:
      "Посљедња средњовјековна владарска династија која је управљала Српском деспотовином и водила дуготрајну борбу за очување државности пред османским освајањима.",

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

    image: "/assets/images/dynasties/brankovici.jpg",
    coverImage: "/assets/images/backgrounds/brankovici.jpg",

    rulerIds: ["vuk-brankovic", "djuradj-brankovic", "lazar-brankovic"],

    eventIds: ["izgradnja-smedereva-1430", "pad-smedereva-1459"],

    musicTrackId: "brankovici-theme",

    status: "published",
    order: 8,
  },
  {
    id: "petrovici",
    name: "Петровићи",
    slug: "petrovici",

    description:
      "Црногорска владарска династија Петровић-Његош која је кроз владика, књажеве и краља Николу I предводила борбу за ослобођење и уједињење.",

    period: {
      start: {
        year: 1697,
        precision: "year",
      },
      end: {
        year: 1918,
        precision: "year",
      },
    },

    image: "/assets/images/dynasties/petrovici.jpg",
    coverImage: "/assets/images/backgrounds/petrovici.jpg",

    rulerIds: [
      "vladika-danilo",
      "petar-i-petrovic-njegos",
      "petar-ii-petrovic-njegos",
      "kralj-nikola-i",
    ],

    eventIds: [
      "bitka-na-martinicima-1796",
      "berlinski-kongres-crna-gora-1878",
      "proglasenje-kraljevine-crne-gore-1910",
    ],

    musicTrackId: "petrovici-theme",

    status: "published",
    order: 9,
  },
  {
    id: "karadjordjevici",
    name: "Карађорђевићи",
    slug: "karadjordjevici",

    description:
      "Нововјековна династија потекла од вође Првог српског устанка, која је водила Србију кроз ослободилачке ратове и створила Краљевину Југославију.",

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

    image: "/assets/images/dynasties/karadjordjevici.jpg",
    coverImage: "/assets/images/backgrounds/karadjordjevici.jpg",

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

    status: "draft",
    order: 10,
  },
  {
    id: "obrenovici",
    name: "Обреновићи",
    slug: "obrenovici",

    description:
      "Нововјековна династија која је дипломатским путем и устанцима изборила аутономију, међународно признање независности Србије и уздигла је у ранг краљевине.",

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

    image: "/assets/images/dynasties/obrenovici.jpg",
    coverImage: "/assets/images/backgrounds/obrenovici.jpg",

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

    status: "draft",
    order: 11,
  },
];
