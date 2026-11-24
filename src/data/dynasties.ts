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

    image: "/assets/images/dynasties/vlastimirovici.webp",
    coverImage: "/assets/images/backgrounds/vlastimirovici.webp",

    rulerIds: [
      "knez-viseslav",
      "knez-vlastimir",
      "knez-mutimir",
      "knez-caslav",
    ],

    eventIds: ["odbrana-od-bugara-839", "primanje-hriscanstva-870"],

    musicTrackIds: ["byzantine-01", "byzantine-02,"],

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
    coverImage: "/assets/images/backgrounds/vojislavljevici.webp",

    rulerIds: ["stefan-vojislav", "mihailo-vojislavljevic", "konstantin-bodin"],

    eventIds: [
      "bitka-kod-bara-1042",
      "kraljevska-kruna-1077",
      "barska-arhiepiskopija-1089",
    ],

    musicTrackIds: ["byzantine-01", "byzantine-02"],

    status: "draft",
    order: 2,
  },
  {
    id: "vukanovici",
    name: "Вукановићи",
    slug: "vukanovici",

    description:
      "Српска средњовјековна владарска династија која је владала Рашком крајем XI и током XII вијека. Бочна грана Војислављевића од којих потичу Немањићи. Њени владари одиграли су важну улогу у учвршћивању српске државности и борби за самосталност од византијског утицаја.",

    period: {
      start: {
        year: 1083,
        precision: "approximate",
      },
      end: {
        year: 1166,
        precision: "approximate",
      },
    },

    image: "/assets/images/dynasties/vukanovici.webp",
    coverImage: "/assets/images/backgrounds/vukanovici.webp",

    rulerIds: [
      "vukan-vukanovici",
      "uros-i-vukanovici",
      "uros-ii-vukanovici",
      "desa-vukanovici",
      "belos-vukanovici",
    ],

    eventIds: [
      "vukan-sukobi-vizantija",
      "pohod-manojla-komnina-1149",
      "borba-za-raski-presto-1165",
    ],

    musicTrackIds: ["byzantine-01", "byzantine-02"],

    status: "draft",
    order: 3,
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
      "raspad-srpskog-carstva-1371",
    ],

    musicTrackIds: ["byzantine-03", "byzantine-01", "byzantine-02,"],

    status: "draft",
    order: 4,
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

    image: "/assets/images/dynasties/kotromanici.webp",
    coverImage: "/assets/images/backgrounds/kotromanici.webp",

    rulerIds: [
      "ban-prijezda-i",
      "ban-prijezda-ii",
      "ban-stjepan-i",
      "ban-stjepan-ii",
      "kralj-tvrtko-i",
      "kralj-stjepan-dabisa",
      "kralj-stjepan-ostoja",
      "kralj-tvrtko-ii",
      "kralj-stjepan-tomas",
      "stjepan-tomasevic",
    ],

    eventIds: [
      "prosirenje-bosne-1326",
      "krunisanje-u-milesevi-1377",
      "osnivanje-herceg-novog-1382",
      "pad-bosanskog-kraljevstva-1463",
    ],

    musicTrackIds: ["epic-02", "epic-03"],

    status: "published",
    order: 5,
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

    image: "/assets/images/dynasties/balsici.webp",
    coverImage: "/assets/images/backgrounds/balsici.webp",

    rulerIds: [
      "balsa-i",
      "djuradj-i-balsic",
      "balsa-ii",
      "djuradj-ii-balsic",
      "balsa-iii",
    ],

    eventIds: [
      "uspon-balsica-u-zeti-1360",
      "bitka-na-saurskom-polju-1385",
      "prvi-mletacki-rat-u-zeti-1396",
      "pripajanje-zete-despotovini-1421",
    ],

    musicTrackIds: ["epic-02", "epic-03"],

    status: "published",
    order: 6,
  },
  {
    id: "kosace",
    name: "Косаче",
    slug: "kosace",

    description:
      "Једна од најмоћнијих средњовјековних властелинских породица на простору данашње Херцеговине и Босне. Под вођством Сандаља Хранића и Стефана Вукчића Косаче, породица је проширила своје посједе и стекла велики политички утицај. Стефан Вукчић је узео титулу херцега од Светог Саве, по којој је област Херцеговина добила име.",

    period: {
      start: {
        year: 1320,
        precision: "approximate",
      },
      end: {
        year: 1483,
        precision: "approximate",
      },
    },

    image: "/assets/images/dynasties/kosace.webp",
    coverImage: "/assets/images/backgrounds/kosace.webp",

    rulerIds: [
      "vlatko-vukovic",
      "sandalj-hranic",
      "stjepan-vukcic-kosaca",
      "vladislav-hercegovic",
      "vlatko-hercegovic",
    ],

    eventIds: [
      "uspon-sandalja-hranica",
      "proglasenje-hercega-1448",
      "pad-bosanskog-kraljevstva-1463",
      "pad-hercegovine-1482",
    ],

    musicTrackIds: ["epic-02", "epic-03"],

    status: "draft",
    order: 7,
  },
  {
    id: "dejanovici",
    name: "Дејановићи",
    slug: "dejanovici",

    description:
      "Српска средњовјековна властелинска и владарска породица која је управљала областима око Куманова, Штипа и Струмице у другој половини XIV вијека. Њени најзначајнији представници, Јован Драгаш и Константин Драгаш, владали су пространом облашћу у вријеме распада Српског царства и ширења Османског царства. Последњи Римски цар Константин IX Драгаш по мајчиној линији је из ове династије",

    period: {
      start: {
        year: 1355,
        precision: "approximate",
      },
      end: {
        year: 1395,
        precision: "year",
      },
    },

    image: "/assets/images/dynasties/dejanovici.webp",
    coverImage: "/assets/images/backgrounds/dejanovici.webp",

    rulerIds: ["dejan-dejanovic", "jovan-dragas", "konstantin-dragas"],

    eventIds: [
      "raspad-srpskog-carstva-1371",
      "maricka-bitka-1371",
      "bitka-na-rovina-1395",
    ],

    musicTrackIds: ["epic-02", "epic-03"],

    status: "draft",
    order: 8,
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

    image: "/assets/images/dynasties/mrnjavcevici.webp",
    coverImage: "/assets/images/backgrounds/mrnjavcevici.webp",

    rulerIds: ["kralj-vukasin", "despot-ugljesa", "kraljevic-marko"],

    eventIds: [
      "krunisanje-vukasina-za-kralja-1365",
      "maricka-bitka-1371-m",
      "bitka-na-rovinama-1395",
    ],

    musicTrackIds: ["epic-02", "epic-03"],

    status: "published",
    order: 9,
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

    image: "/assets/images/dynasties/lazarevici.webp",
    coverImage: "/assets/images/backgrounds/lazarevici.webp",

    rulerIds: ["knez-lazar", "kneginja-milica", "despot-stefan-lazarevic"],

    eventIds: [
      "kosovski-boj-1389",
      "angorska-bitka-1402",
      "beograd-prestonica-1404",
      "smrt-despota-stefana-1427",
    ],

    musicTrackIds: ["epic-01", "epic-02", "epic-03"],

    status: "published",
    order: 10,
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

    image: "/assets/images/dynasties/brankovici.webp",
    coverImage: "/assets/images/backgrounds/brankovici.webp",

    rulerIds: [
      "vuk-brankovic",
      "djuradj-brankovic",
      "lazar-brankovic",
      "stefan-brankovic",
      "vuk-grgurevic-brankovic",
      "djordje-brankovic",
      "jovan-brankovic",
    ],

    eventIds: [
      "izgradnja-smedereva-1430",
      "prvi-pad-despotovine-1439",
      "segedinski-mir-i-obnova-despotovine-1444",
      "pad-smedereva-1459",
      "kraj-sremskih-despota-brankovica-1502",
    ],

    musicTrackIds: ["epic-01", "epic-02", "epic-03"],

    status: "published",
    order: 11,
  },
  {
    id: "crnojevici",
    name: "Црнојевићи",
    slug: "crnojevici",

    description:
      "Средњовјековна владарска породица која је управљала Зетом у XV вијеку. Под њиховом влашћу Зета је постала важно политичко и културно средиште, а Ђурађ Црнојевић је основао прву српску штампарију на Цетињу 1494. године.",

    period: {
      start: {
        year: 1451,
        precision: "approximate",
      },
      end: {
        year: 1496,
        precision: "year",
      },
    },

    image: "/assets/images/dynasties/crnojevici.webp",
    coverImage: "/assets/images/backgrounds/crnojevici.webp",

    rulerIds: [
      "stefan-crnojevic",
      "ivan-crnojevic",
      "durad-crnojevic",
      "stefan-crnojevic-ii",
    ],

    eventIds: [
      "uspon-crnojevica-u-zeti",
      "osnivanje-cetinja",
      "osnivanje-crnojevica-stamparije-1494",
    ],

    musicTrackIds: ["epic-02", "epic-03"],

    status: "draft",
    order: 12,
  },
  {
    id: "petrovici",
    name: "Петровићи",
    slug: "petrovici",

    description:
      "Црногорска владарска династија Петровић-Његош која је кроз владике, књажеве и краља Николу I водила дуготрајну борбу за слободу, модернизацију државе и међународно признање.",

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

    image: "/assets/images/dynasties/petrovici.webp",
    coverImage: "/assets/images/backgrounds/petrovici.webp",

    rulerIds: [
      "vladika-danilo",
      "vladika-sava-petrovic",
      "vladika-vasilije-petrovic",
      "scepan-mali",
      "petar-i-petrovic-njegos",
      "petar-ii-petrovic-njegos",
      "knjaz-danilo-i",
      "kralj-nikola-i",
    ],

    eventIds: [
      "izbor-vladike-danila-1697",
      "bitke-na-martinicima-i-krusima-1796",
      "donosenje-zakonika-opsteg-crnogorskog-1798",
      "berlinski-kongres-crna-gora-1878",
      "proglasenje-kraljevine-crne-gore-1910",
      "podgoricka-skupstina-1918",
    ],

    musicTrackIds: ["royal-01", "byzantine-01"],

    status: "published",
    order: 12,
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

    image: "/assets/images/dynasties/karadjordjevici.webp",
    coverImage: "/assets/images/backgrounds/karadjordjevici.webp",

    rulerIds: [
      "karadjordje-petrovic",
      "knez-aleksandar-karadjordjevic",
      "kralj-petar-i",
      "kralj-aleksandar-i",
      "kralj-petar-ii",
    ],

    eventIds: [
      "prvi-srpski-ustanak-1804",
      "oslobodjenje-beograda-1806",
      "krunisanje-petra-i-1904",
      "proboj-solunskog-fronta-1918",
      "ujedinjenje-1918",
    ],

    musicTrackIds: ["royal-02", "royal-03"],

    status: "draft",
    order: 14,
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

    image: "/assets/images/dynasties/obrenovici.webp",
    coverImage: "/assets/images/backgrounds/obrenovici.webp",

    rulerIds: [
      "knez-milos",
      "knez-milan-obrenovic",
      "knez-mihailo",
      "kralj-milan",
      "kralj-aleksandar-obrenovic",
    ],

    eventIds: [
      "drugi-srpski-ustanak-1815",
      "hatiserif-i-autonomija-1830",
      "sretenjski-ustav-1835",
      "predaja-gradova-1867",
      "berlinski-kongres-1878",
      "proglasenje-kraljevine-1882",
      "majski-prevrat-1903",
    ],

    musicTrackIds: ["royal-04", "royal-05"],

    status: "draft",
    order: 15,
  },
];
