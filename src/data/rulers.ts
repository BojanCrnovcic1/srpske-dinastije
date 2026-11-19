import type { Ruler } from "../types";

export const rulers: Ruler[] = [
  {
    id: "stefan-nemanja",
    dynastyId: "nemanjici",

    name: "Стефан Немања",
    slug: "stefan-nemanja",
    title: "veliki-zupan",

    description:
      "Оснивач династије Немањић, велики жупан Рашке који је објединио српске земље, ојачао државну самосталност и утемељио задужбинарство.",

    reigns: [
      {
        start: { year: 1166, precision: "year" },
        end: { year: 1196, precision: "year" },
        title: "veliki-zupan",
      },
    ],
    titleHistory: [
      {
        start: { year: 1166, precision: "year" },
        title: "veliki-zupan",
      },
    ],

    portrait: "/assets/images/rulers/stefan-nemanja.webp",

    achievementsIds: [
      "ujedinjenje-zemalja",
      "manastir-studenica",
      "obnova-hilandara",
    ],

    eventIds: ["zicki-sabor-1196"],

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

    description:
      "Први крунисани краљ Србије и насљедник Стефана Немање, заслужан за међународни углед краљевине и подршку црквеној самосталности.",

    reigns: [
      {
        start: { year: 1196, precision: "year" },
        end: { year: 1202, precision: "year" },
        title: "veliki-zupan",
        note: "Први период владавине прије краткотрајног свргавања од стране брата Вукана.",
      },
      {
        start: { year: 1203, precision: "year" },
        end: { year: 1217, precision: "year" },
        title: "veliki-zupan",
      },
      {
        start: { year: 1217, precision: "year" },
        end: { year: 1228, precision: "year" },
        title: "kralj",
        note: "Крунисан за краља Србије 1217. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1196, precision: "year" },
        title: "veliki-zupan",
      },
      {
        start: { year: 1217, precision: "year" },
        title: "kralj",
      },
    ],

    portrait: "/assets/images/rulers/stefan-prvovencani.webp",

    achievementsIds: ["krunisanje-srbije", "zivot-svetog-simeona"],

    eventIds: ["krunisanje-1217", "autokefalnost-crkve-1219"],

    predecessorId: "stefan-nemanja",
    successorId: "stefan-radoslav",

    status: "draft",
    order: 2,
  },
  {
    id: "stefan-radoslav",
    dynastyId: "nemanjici",

    name: "Стефан Радослав",
    slug: "stefan-radoslav",
    title: "kralj",

    description:
      "Краљ Србије снажно повезан са Византијом и епирским владарима, током чије владавине је ојачао византијски културни утицај на двору.",

    reigns: [
      {
        start: { year: 1228, precision: "year" },
        end: { year: 1233, precision: "year" },
        title: "kralj",
      },
    ],
    titleHistory: [
      {
        start: { year: 1228, precision: "year" },
        title: "kralj",
      },
    ],

    portrait: "/assets/images/rulers/stefan-radoslav.webp",

    achievementsIds: ["priprata-u-studenici"],

    eventIds: [],

    predecessorId: "stefan-prvovencani",
    successorId: "stefan-vladislav",

    status: "draft",
    order: 3,
  },
  {
    id: "stefan-vladislav",
    dynastyId: "nemanjici",

    name: "Стефан Владислав",
    slug: "stefan-vladislav",
    title: "kralj",

    description:
      "Краљ Србије који је успоставио блиске односе са Бугарском и подигао манастир Милешеву, у који су пренесене мошти Светог Саве.",

    reigns: [
      {
        start: { year: 1234, precision: "year" },
        end: { year: 1243, precision: "year" },
        title: "kralj",
      },
    ],
    titleHistory: [
      {
        start: { year: 1234, precision: "year" },
        title: "kralj",
      },
    ],

    portrait: "/assets/images/rulers/stefan-vladislav.webp",

    achievementsIds: ["manastir-mileseva", "prenos-mostiju-svetog-save"],

    eventIds: [],

    predecessorId: "stefan-radoslav",
    successorId: "uros-i",

    status: "draft",
    order: 4,
  },
  {
    id: "uros-i",
    dynastyId: "nemanjici",

    name: "Стефан Урош I",
    slug: "uros-i",
    title: "kralj",

    description:
      "Дуговјечни краљ Србије који је учврстио централну власт, подстицао развој рударства и трговине те очувао самосталност државе.",

    reigns: [
      {
        start: { year: 1243, precision: "year" },
        end: { year: 1276, precision: "year" },
        title: "kralj",
      },
    ],
    titleHistory: [
      {
        start: { year: 1243, precision: "year" },
        title: "kralj",
      },
    ],

    portrait: "/assets/images/rulers/uros-i.webp",

    achievementsIds: ["razvoj-rudarstva-brskovo", "manastir-sopocani"],

    eventIds: [],

    predecessorId: "stefan-vladislav",
    successorId: "dragutin",

    status: "draft",
    order: 5,
  },
  {
    id: "dragutin",
    dynastyId: "nemanjici",

    name: "Стефан Драгутин",
    slug: "dragutin",
    title: "kralj",

    description:
      "Краљ Србије који је након повреде и сабора у Дежеву предао круну брату Милутину, а као сремски краљ проширио српску власт на сјевер.",

    reigns: [
      {
        start: { year: 1276, precision: "year" },
        end: { year: 1282, precision: "year" },
        title: "kralj",
        note: "Краљ Србије до сабора у Дежеву 1282. године.",
      },
      {
        start: { year: 1282, precision: "year" },
        end: { year: 1316, precision: "year" },
        title: "kralj",
        note: "Владао сјеверним областима и Сремском земљом као сремски краљ.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1276, precision: "year" },
        title: "kralj",
      },
    ],

    portrait: "/assets/images/rulers/dragutin.webp",

    achievementsIds: ["sremska-kraljevina-dragutina"],

    eventIds: ["sabor-u-dezevu-1282"],

    predecessorId: "uros-i",
    successorId: "milutin",

    status: "draft",
    order: 6,
  },
  {
    id: "milutin",
    dynastyId: "nemanjici",

    name: "Стефан Урош II Милутин",
    slug: "milutin",
    title: "kralj",

    description:
      "Један од најмоћнијих краљева из династије Немањић, који је знатно проширио границе на југу и оставио богато задужбинарско насљеђе.",

    reigns: [
      {
        start: { year: 1282, precision: "year" },
        end: { year: 1321, precision: "year" },
        title: "kralj",
      },
    ],
    titleHistory: [
      {
        start: { year: 1282, precision: "year" },
        title: "kralj",
      },
    ],

    portrait: "/assets/images/rulers/milutin.webp",

    achievementsIds: [
      "prosirenje-na-jug-makedonija",
      "manastir-gracanica",
      "kraljeva-crkva-studenica",
    ],

    eventIds: ["sabor-u-dezevu-1282"],

    predecessorId: "dragutin",
    successorId: "stefan-decanski",

    status: "draft",
    order: 7,
  },
  {
    id: "stefan-decanski",
    dynastyId: "nemanjici",

    name: "Стефан Урош III Дечански",
    slug: "stefan-decanski",
    title: "kralj",

    description:
      "Краљ Србије који је након година изгнанства дошао на престо, извојевао побједу код Велбужда и подигао манастир Високе Дечане.",

    reigns: [
      {
        start: { year: 1321, precision: "year" },
        end: { year: 1331, precision: "year" },
        title: "kralj",
      },
    ],
    titleHistory: [
      {
        start: { year: 1321, precision: "year" },
        title: "kralj",
      },
    ],

    portrait: "/assets/images/rulers/stefan-decanski.webp",

    achievementsIds: ["manastir-visoki-decani", "prevlast-na-balkanu"],

    eventIds: ["bitka-kod-velbuzda-1330"],

    predecessorId: "milutin",
    successorId: "stefan-dusan",

    status: "draft",
    order: 8,
  },
  {
    id: "stefan-dusan",
    dynastyId: "nemanjici",

    name: "Стефан Душан",
    slug: "stefan-dusan",
    title: "car",

    description:
      "Српски краљ и цар, познат по територијалном ширењу државе до Егејског мора, уздизању цркве у ранг патријаршије и доношењу законика.",

    reigns: [
      {
        start: { year: 1331, precision: "year" },
        end: { year: 1346, precision: "year" },
        title: "kralj",
      },
      {
        start: { year: 1346, precision: "year" },
        end: { year: 1355, precision: "year" },
        title: "car",
        note: "Царска титула проглашена на сабору у Скопљу 1346. године.",
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

    portrait: "/assets/images/rulers/stefan-dusan.webp",

    achievementsIds: [
      "dusanov-zakonik",
      "srpska-patrijarsija-1346",
      "teritorijalno-sirenje-carstva",
    ],

    eventIds: ["proglasenje-carstva-1346"],

    predecessorId: "stefan-decanski",
    successorId: "uros-v",

    status: "draft",
    order: 9,
  },
  {
    id: "uros-v",
    dynastyId: "nemanjici",

    name: "Стефан Урош V",
    slug: "uros-v",
    title: "car",

    description:
      "Посљедњи владар из династије Немањић, током чије владавине је дошло до јачања обласних господара и слабљења централне царске власти.",

    reigns: [
      {
        start: { year: 1355, precision: "year" },
        end: { year: 1371, precision: "year" },
        title: "car",
      },
    ],
    titleHistory: [
      {
        start: { year: 1355, precision: "year" },
        title: "car",
      },
    ],

    portrait: "/assets/images/rulers/uros-v.webp",

    achievementsIds: ["manastir-matejce"],

    eventIds: [],

    predecessorId: "stefan-dusan",

    status: "draft",
    order: 10,
  },
];
