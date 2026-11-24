import type { Ruler } from "../types";

export const rulers: Ruler[] = [
  {
    id: "knez-viseslav",
    dynastyId: "vlastimirovici",

    name: "Кнез Вишеслав",
    slug: "knez-viseslav",
    title: "кнез",

    description:
      "Један од најранијих по имену познатих српских владара и први историјски посведочени представник династије Властимировић. Владао је крајем VIII вијека, у вријеме формирања ране српске кнежевине у унутрашњости Балканског полуострва. Његова владавина представља важну рану фазу политичког окупљања српских племена и успостављања насљедне владарске власти.",

    reigns: [
      {
        start: { year: 780, precision: "approximate" },
        end: { year: 800, precision: "approximate" },
        title: "кнез",
        note: "Вријеме владавине није поуздано утврђено. Вишеслав се у историјским реконструкцијама најчешће смјешта у другу половину VIII вијека.",
      },
    ],

    titleHistory: [
      {
        start: { year: 780, precision: "approximate" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/backgrounds/vlastimirovici.webp",

    achievementsIds: ["rano-ucvrscivanje-srpske-knezevine"],

    eventIds: [],

    status: "draft",
    order: 1,
  },

  {
    id: "knez-vlastimir",
    dynastyId: "vlastimirovici",

    name: "Кнез Властимир",
    slug: "knez-vlastimir",
    title: "кнез",

    description:
      "Оснивач династије Властимировић и један од најзначајнијих раних српских владара. Током своје владавине ујединио је српска племена и учврстио власт Рашке као средишта српске политичке моћи. Посебно се истакао успјешним отпором бугарском ширењу током рата који је трајао од 839. до 842. године. Побједа над бугарском војском кнеза Пресијама обезбиједила је српској кнежевини очување политичке самосталности и угледа међу балканским државама.",

    reigns: [
      {
        start: { year: 830, precision: "approximate" },
        end: { year: 851, precision: "approximate" },
        title: "кнез",
        note: "Датовање владавине није потпуно сигурно. Властимир се обично смјешта у другу четвртину IX вијека.",
      },
    ],

    titleHistory: [
      {
        start: { year: 830, precision: "approximate" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/rulers/knez-vlastimir.webp",

    achievementsIds: [
      "ujedinjenje-srpskih-plemena",
      "pobjeda-nad-bugarima-839",
      "ucvrscivanje-nezavisnosti-raske",
    ],

    eventIds: ["odbrana-od-bugara-839"],

    predecessorId: "knez-viseslav",

    status: "draft",
    order: 2,
  },

  {
    id: "knez-mutimir",
    dynastyId: "vlastimirovici",

    name: "Кнез Мутимир",
    slug: "knez-mutimir",
    title: "кнез",

    description:
      "Најстарији син кнеза Властимира и један од најзначајнијих владара династије Властимировић. Након очеве смрти преузео је врховну власт у Србији, док су његова браћа Стројимир и Гојник у почетку имала подређен положај. Током владавине успјешно је одбио нови бугарски напад и заробио бугарског кнеза Владимира, сина кнеза Бориса I. У његово вријеме значајно је напредовао процес покрштавања Срба и јачања хришћанских црквених установа. Његова владавина обиљежена је и унутрашњим династичким сукобима, након којих је учврстио власт и послао браћу у изгнанство.",

    reigns: [
      {
        start: { year: 851, precision: "approximate" },
        end: { year: 891, precision: "year" },
        title: "кнез",
        note: "Владао је као врховни владар, док су његова браћа Стројимир и Гојник у почетку учествовала у управљању земљом.",
      },
    ],

    titleHistory: [
      {
        start: { year: 851, precision: "approximate" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/backgrounds/vlastimirovici.webp",

    achievementsIds: [
      "odbrana-od-bugarskog-napada-853",
      "ucvrscivanje-hriscanstva-u-srbiji",
      "ucvrscivanje-vrhovne-vlasti-mutimira",
      "diplomatski-odnosi-sa-vizantijom",
    ],

    eventIds: [
      "odbrana-od-bugara-853",
      "primanje-hriscanstva-870",
      "sukob-mutimira-sa-bracom",
    ],

    predecessorId: "knez-vlastimir",

    status: "draft",
    order: 3,
  },

  {
    id: "knez-caslav",
    dynastyId: "vlastimirovici",

    name: "Кнез Часлав Клонимировић",
    slug: "knez-caslav",
    title: "кнез",

    description:
      "Један од најзначајнијих српских владара раног средњег вијека и посљедњи велики представник династије Властимировић. Након периода бугарске власти над српским земљама, вратио се у Србију уз подршку византијског цара Романа I Лакапина и обновио српску државну власт. Успио је да окупи значајан дио српских области и ојача политички положај земље између Византије, Бугарске и Угарске. Његова владавина представља посљедњи велики успон раносредњовјековне српске кнежевине прије њеног укључивања у византијску сферу власти крајем X вијека.",

    reigns: [
      {
        start: { year: 927, precision: "approximate" },
        end: { year: 960, precision: "approximate" },
        title: "кнез",
        note: "Вратио се у Србију након слома бугарске власти и обновио српску кнежевину. Тачна година његове смрти није поуздано утврђена.",
      },
    ],

    titleHistory: [
      {
        start: { year: 927, precision: "approximate" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/rulers/knez-caslav.webp",

    achievementsIds: [
      "obnova-srpske-drzave-pod-caslavom",
      "ujedinjenje-srpskih-oblasti-caslav",
      "ucvrscivanje-odnosa-sa-vizantijom",
      "obnova-drzavne-samostalnosti",
    ],

    eventIds: [
      "oslobadjanje-srbije-od-bugara-927",
      "obnova-srpske-knezevine-caslav",
      "smrt-kneza-caslava",
    ],

    status: "draft",
    order: 4,
  },
  {
    id: "stefan-vojislav",
    dynastyId: "vojislavljevici",

    name: "Стефан Војислав",
    slug: "stefan-vojislav",
    title: "кнез",

    description:
      "Родоначелник династије Војислављевић који је предводио устанак против византијске власти и изборио самосталност Дукље.",

    reigns: [
      {
        start: { year: 1034, precision: "year" },
        end: { year: 1043, precision: "year" },
        title: "кнез",
        note: "Почетак борбе за независност и први сукоб са Византијом.",
      },
      {
        start: { year: 1043, precision: "year" },
        end: { year: 1046, precision: "approximate" },
        title: "кнез",
        note: "Учвршћивање самосталне дукљанске државе након побједе код Бара.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1034, precision: "year" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/rulers/stefan-vojislav.webp",

    achievementsIds: ["nezavisnost-duklje", "pobjeda-nad-vizantijom-1042"],

    eventIds: ["bitka-kod-bara-1042"],

    successorId: "mihailo-vojislavljevic",

    status: "draft",
    order: 1,
  },
  {
    id: "mihailo-vojislavljevic",
    dynastyId: "vojislavljevici",

    name: "Михаило Војислављевић",
    slug: "mihailo-vojislavljevic",
    title: "краљ",

    description:
      "Први српски краљ који је добио краљевску круну из Рима, проширио утицај Дукље и ојачао међународни положај државе.",

    reigns: [
      {
        start: { year: 1046, precision: "approximate" },
        end: { year: 1077, precision: "year" },
        title: "кнез",
      },
      {
        start: { year: 1077, precision: "year" },
        end: { year: 1081, precision: "year" },
        title: "краљ",
        note: "Примио краљевске ознаке и титулу краља од папе Гргура VII.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1046, precision: "approximate" },
        title: "кнез",
      },
      {
        start: { year: 1077, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/mihailo-vojislavljevic.webp",

    achievementsIds: ["prva-kraljevska-kruna", "spoljna-diplomatija-duklje"],

    eventIds: ["kraljevska-kruna-1077"],

    predecessorId: "stefan-vojislav",
    successorId: "konstantin-bodin",

    status: "draft",
    order: 2,
  },
  {
    id: "konstantin-bodin",
    dynastyId: "vojislavljevici",

    name: "Константин Бодин",
    slug: "konstantin-bodin",
    title: "краљ",

    description:
      "Најмоћнији владар из династије Војислављевић који је објединио српске области, изборио Барску архиепископију и проширио власт на Рашку и Босну.",

    reigns: [
      {
        start: { year: 1081, precision: "year" },
        end: { year: 1101, precision: "year" },
        title: "краљ",
      },
    ],
    titleHistory: [
      {
        start: { year: 1081, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/konstantin-bodin.webp",

    achievementsIds: [
      "ujedinjenje-srpskih-zemalja-bodin",
      "uzdizanje-barske-episkopije",
    ],

    eventIds: ["barska-arhiepiskopija-1089"],

    predecessorId: "mihailo-vojislavljevic",

    status: "draft",
    order: 3,
  },
  {
    id: "vukan-vukanovici",
    dynastyId: "vukanovici",
    name: "Вукан",
    slug: "vukan-vukanovici",
    title: "велики жупан",
    description:
      "Оснивач владарске гране Вукановића и велики жупан Рашке. Проширио је власт над српским областима и водио борбу против византијског утицаја, настојећи да обезбиједи већу самосталност Рашке.",
    reigns: [
      {
        start: { year: 1083, precision: "approximate" },
        end: { year: 1112, precision: "approximate" },
        title: "велики жупан",
      },
    ],
    titleHistory: [
      {
        start: { year: 1083, precision: "approximate" },
        title: "велики жупан",
      },
    ],
    portrait: "/assets/images/rulers/vukan-vukanovic.webp",
    achievementsIds: ["prosirenje-vukanove-vlasti"],
    eventIds: ["vukan-sukobi-vizantija"],
    successorId: "uros-i-vukanovici",
    status: "draft",
    order: 1,
  },
  {
    id: "uros-i-vukanovici",
    dynastyId: "vukanovici",
    name: "Урош I",
    slug: "uros-i-vukanovici",
    title: "велики жупан",
    description:
      "Владар Рашке који је наставио политику учвршћивања породичне власти и одржавања политичке самосталности у односу на Византију. Током његове владавине Рашка је била изложена снажним византијским притисцима.",
    reigns: [
      {
        start: { year: 1112, precision: "approximate" },
        end: { year: 1145, precision: "approximate" },
        title: "велики жупан",
        note: "Владавина је била прекидана око 1126. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1112, precision: "approximate" },
        title: "велики жупан",
      },
    ],
    portrait: "/assets/images/backgrounds/vukanovici.webp",
    achievementsIds: ["ucvrscivanje-raskе-vlasti"],
    eventIds: [],
    predecessorId: "vukan-vukanovici",
    successorId: "uros-ii-vukanovici",
    status: "draft",
    order: 2,
  },
  {
    id: "uros-ii-vukanovici",
    dynastyId: "vukanovici",
    name: "Урош II",
    slug: "uros-ii-vukanovici",
    title: "велики жупан",
    description:
      "Велики жупан Рашке који је у више наврата управљао државом током сложених односа са Византијом. Његова владавина обиљежена је сукобима, промјенама на престолу и настојањима да сачува самосталност Рашке.",
    reigns: [
      {
        start: { year: 1145, precision: "year" },
        end: { year: 1155, precision: "year" },
        title: "велики жупан",
      },
      {
        start: { year: 1155, precision: "year" },
        end: { year: 1162, precision: "approximate" },
        title: "велики жупан",
        note: "Враћао се на власт након краткотрајних промјена на престолу.",
      },
    ],
    titleHistory: [
      { start: { year: 1145, precision: "year" }, title: "велики жупан" },
    ],
    portrait: "/assets/images/backgrounds/vukanovici.webp",
    achievementsIds: ["odbrana-politicke-samostalnosti-raskе"],
    eventIds: ["pohod-manojla-komnina-1149"],
    predecessorId: "uros-i-vukanovici",
    successorId: "desa-vukanovici",
    status: "draft",
    order: 3,
  },
  {
    id: "desa-vukanovici",
    dynastyId: "vukanovici",
    name: "Деса",
    slug: "desa-vukanovici",
    title: "велики жупан",
    description:
      "Српски велики жупан који је у више наврата преузимао власт у Рашкој. Настојао је да води самосталну спољну политику и одупре се византијском утицају, због чега је долазио у сукоб са царем Манојлом I Комнином.",
    reigns: [
      {
        start: { year: 1155, precision: "year" },
        end: { year: 1155, precision: "year" },
        title: "велики жупан",
      },
      {
        start: { year: 1162, precision: "year" },
        end: { year: 1165, precision: "approximate" },
        title: "велики жупан",
      },
    ],
    titleHistory: [
      { start: { year: 1155, precision: "year" }, title: "велики жупан" },
    ],
    portrait: "/assets/images/backgrounds/vukanovici.webp",
    achievementsIds: ["samostalna-spoljna-politika-dese"],
    eventIds: ["borba-za-raski-presto-1165"],
    predecessorId: "uros-ii-vukanovici",
    status: "draft",
    order: 4,
  },
  {
    id: "belos-vukanovici",
    dynastyId: "vukanovici",
    name: "Белош",
    slug: "belos-vukanovici",
    title: "велики жупан",
    description:
      "Члан породице Вукановића који је краткотрајно управљао Рашком средином XII вијека. Био је значајна политичка личност и у Угарској, гдје је обављао високе дворске дужности.",
    reigns: [
      {
        start: { year: 1162, precision: "approximate" },
        end: { year: 1162, precision: "approximate" },
        title: "велики жупан",
      },
    ],
    titleHistory: [
      {
        start: { year: 1162, precision: "approximate" },
        title: "велики жупан",
      },
    ],
    portrait: "/assets/images/backgrounds/vukanovici.webp",
    achievementsIds: ["politicki-uticaj-belosa-u-ugarskoj"],
    eventIds: [],
    status: "draft",
    order: 5,
  },

  {
    id: "stefan-nemanja",
    dynastyId: "nemanjici",

    name: "Стефан Немања",
    slug: "stefan-nemanja",
    title: "велики жупан",

    description:
      "Оснивач династије Немањић, велики жупан Рашке који је објединио српске земље, ојачао државну самосталност и утемељио задужбинарство.",

    reigns: [
      {
        start: { year: 1166, precision: "year" },
        end: { year: 1196, precision: "year" },
        title: "велики жупан",
      },
    ],
    titleHistory: [
      {
        start: { year: 1166, precision: "year" },
        title: "велики жупан",
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
    title: "краљ",

    description:
      "Први крунисани краљ Србије и насљедник Стефана Немање, заслужан за међународни углед краљевине и подршку црквеној самосталности.",

    reigns: [
      {
        start: { year: 1196, precision: "year" },
        end: { year: 1202, precision: "year" },
        title: "велики жупан",
        note: "Први период владавине прије краткотрајног свргавања од стране брата Вукана.",
      },
      {
        start: { year: 1203, precision: "year" },
        end: { year: 1217, precision: "year" },
        title: "велики жупан",
      },
      {
        start: { year: 1217, precision: "year" },
        end: { year: 1228, precision: "year" },
        title: "краљ",
        note: "Крунисан за краља Србије 1217. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1196, precision: "year" },
        title: "велики жупан",
      },
      {
        start: { year: 1217, precision: "year" },
        title: "краљ",
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
    title: "краљ",

    description:
      "Краљ Србије снажно повезан са Византијом и епирским владарима, током чије владавине је ојачао византијски културни утицај на двору.",

    reigns: [
      {
        start: { year: 1228, precision: "year" },
        end: { year: 1233, precision: "year" },
        title: "краљ",
      },
    ],
    titleHistory: [
      {
        start: { year: 1228, precision: "year" },
        title: "краљ",
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
    title: "краљ",

    description:
      "Краљ Србије који је успоставио блиске односе са Бугарском и подигао манастир Милешеву, у који су пренесене мошти Светог Саве.",

    reigns: [
      {
        start: { year: 1234, precision: "year" },
        end: { year: 1243, precision: "year" },
        title: "краљ",
      },
    ],
    titleHistory: [
      {
        start: { year: 1234, precision: "year" },
        title: "краљ",
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
    title: "краљ",

    description:
      "Дуговјечни краљ Србије који је учврстио централну власт, подстицао развој рударства и трговине те очувао самосталност државе.",

    reigns: [
      {
        start: { year: 1243, precision: "year" },
        end: { year: 1276, precision: "year" },
        title: "краљ",
      },
    ],
    titleHistory: [
      {
        start: { year: 1243, precision: "year" },
        title: "краљ",
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
    title: "краљ",

    description:
      "Краљ Србије који је након повреде и сабора у Дежеву предао круну брату Милутину, а као сремски краљ проширио српску власт на сјевер.",

    reigns: [
      {
        start: { year: 1276, precision: "year" },
        end: { year: 1282, precision: "year" },
        title: "краљ",
        note: "Краљ Србије до сабора у Дежеву 1282. године.",
      },
      {
        start: { year: 1282, precision: "year" },
        end: { year: 1316, precision: "year" },
        title: "краљ",
        note: "Владао сјеверним областима и Сремском земљом као сремски краљ.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1276, precision: "year" },
        title: "краљ",
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
    title: "краљ",

    description:
      "Један од најмоћнијих краљева из династије Немањић, који је знатно проширио границе на југу и оставио богато задужбинарско насљеђе.",

    reigns: [
      {
        start: { year: 1282, precision: "year" },
        end: { year: 1321, precision: "year" },
        title: "краљ",
      },
    ],
    titleHistory: [
      {
        start: { year: 1282, precision: "year" },
        title: "краљ",
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
    title: "краљ",

    description:
      "Краљ Србије који је након година изгнанства дошао на престо, извојевао побједу код Велбужда и подигао манастир Високе Дечане.",

    reigns: [
      {
        start: { year: 1321, precision: "year" },
        end: { year: 1331, precision: "year" },
        title: "краљ",
      },
    ],
    titleHistory: [
      {
        start: { year: 1321, precision: "year" },
        title: "краљ",
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
    title: "цар",

    description:
      "Српски краљ и цар, познат по територијалном ширењу државе до Егејског мора, уздизању цркве у ранг патријаршије и доношењу законика.",

    reigns: [
      {
        start: { year: 1331, precision: "year" },
        end: { year: 1346, precision: "year" },
        title: "краљ",
      },
      {
        start: { year: 1346, precision: "year" },
        end: { year: 1355, precision: "year" },
        title: "цар",
        note: "Царска титула проглашена на сабору у Скопљу 1346. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1331, precision: "year" },
        title: "краљ",
      },
      {
        start: { year: 1346, precision: "year" },
        title: "цар",
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
    title: "цар",

    description:
      "Посљедњи владар из династије Немањић, током чије владавине је дошло до јачања обласних господара и слабљења централне царске власти.",

    reigns: [
      {
        start: { year: 1355, precision: "year" },
        end: { year: 1371, precision: "year" },
        title: "цар",
      },
    ],
    titleHistory: [
      {
        start: { year: 1355, precision: "year" },
        title: "цар",
      },
    ],

    portrait: "/assets/images/rulers/uros-v.webp",

    achievementsIds: ["manastir-matejce"],

    eventIds: [],

    predecessorId: "stefan-dusan",

    status: "draft",
    order: 10,
  },
  {
    id: "ban-prijezda-i",
    dynastyId: "kotromanici",

    name: "Бан Пријезда I",
    slug: "ban-prijezda-i",
    title: "бан",

    description:
      "Родоначелник династије Котроманић који је утврдио власт у Босни у другој половини XIII вијека и поставио темеље насљедне бановске власти.",

    reigns: [
      {
        start: { year: 1250, precision: "approximate" },
        end: { year: 1287, precision: "year" },
        title: "бан",
        note: "Оквирни почетак владавине у средини XIII вијека до повлачења 1287. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1250, precision: "approximate" },
        title: "бан",
      },
    ],

    portrait: "/assets/images/backgrounds/kotromanici.webp",

    achievementsIds: ["temelji-dinastije-kotromanic"],

    eventIds: [],

    successorId: "ban-prijezda-ii",

    status: "draft",
    order: 1,
  },
  {
    id: "ban-prijezda-ii",
    dynastyId: "kotromanici",

    name: "Бан Пријезда II",
    slug: "ban-prijezda-ii",
    title: "бан",

    description:
      "Син и насљедник бана Пријезде I који је крајем XIII вијека владао дијелом Босне заједно са братом Стјепаном I.",

    reigns: [
      {
        start: { year: 1287, precision: "year" },
        end: { year: 1290, precision: "approximate" },
        title: "бан",
      },
    ],
    titleHistory: [
      {
        start: { year: 1287, precision: "year" },
        title: "бан",
      },
    ],

    portrait: "/assets/images/backgrounds/kotromanici.webp",

    achievementsIds: ["nasljedjivanje-banske-vlasti-prijezda-ii"],

    eventIds: [],

    predecessorId: "ban-prijezda-i",
    successorId: "ban-stjepan-i",

    status: "draft",
    order: 2,
  },
  {
    id: "ban-stjepan-i",
    dynastyId: "kotromanici",

    name: "Бан Стјепан I Котроманић",
    slug: "ban-stjepan-i",
    title: "бан",

    description:
      "Босански бан из куће Котроманића који је настојао да очува самосталност Босне у сложеним односима са сусједним владарима крајем XIII и почетком XIV вијека.",

    reigns: [
      {
        start: { year: 1287, precision: "year" },
        end: { year: 1314, precision: "approximate" },
        title: "бан",
      },
    ],
    titleHistory: [
      {
        start: { year: 1287, precision: "year" },
        title: "бан",
      },
    ],

    portrait: "/assets/images/backgrounds/kotromanici.webp",

    achievementsIds: ["ocuvanje-banovine-u-kriznim-godinama"],

    eventIds: [],

    predecessorId: "ban-prijezda-ii",
    successorId: "ban-stjepan-ii",

    status: "draft",
    order: 3,
  },
  {
    id: "ban-stjepan-ii",
    dynastyId: "kotromanici",

    name: "Бан Стјепан II Котроманић",
    slug: "ban-stjepan-ii",
    title: "бан",

    description:
      "Босански бан који је значајно проширио територију државе, ојачао централну власт и унаприједио привредне и дипломатске везе са Дубровником.",

    reigns: [
      {
        start: { year: 1322, precision: "year" },
        end: { year: 1353, precision: "year" },
        title: "бан",
        note: "Период територијалног ширења и јачања босанске бановине.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1322, precision: "year" },
        title: "бан",
      },
    ],

    portrait: "/assets/images/rulers/ban-stjepan-ii.webp",

    achievementsIds: [
      "teritorijalno-jacanje-bosne",
      "razvoj-trgovine-sa-dubrovnikom",
    ],

    eventIds: ["prosirenje-bosne-1326"],

    predecessorId: "ban-stjepan-i",
    successorId: "kralj-tvrtko-i",

    status: "draft",
    order: 4,
  },
  {
    id: "kralj-tvrtko-i",
    dynastyId: "kotromanici",

    name: "Краљ Твртко I Котроманић",
    slug: "kralj-tvrtko-i",
    title: "краљ",

    description:
      "Најзначајнији владар из династије Котроманић, први босански краљ који је уздигао државу на највиши територијални, војни и културни ниво.",

    reigns: [
      {
        start: { year: 1353, precision: "year" },
        end: { year: 1377, precision: "year" },
        title: "бан",
        note: "Владавина као босански бан уз унутрашње стабилизације и ширење власти.",
      },
      {
        start: { year: 1377, precision: "year" },
        end: { year: 1391, precision: "year" },
        title: "краљ",
        note: "Крунисан за краља 1377. године и наставио ширење ка Јадрану.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1353, precision: "year" },
        title: "бан",
      },
      {
        start: { year: 1377, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kralj-tvrtko-i.webp",

    achievementsIds: [
      "kruna-bosanskog-kraljevstva",
      "izlazak-na-jadransko-more",
      "kovanje-prvog-bosanskog-novca",
    ],

    eventIds: ["krunisanje-u-milesevi-1377", "osnivanje-herceg-novog-1382"],

    predecessorId: "ban-stjepan-ii",
    successorId: "kralj-stjepan-dabisa",

    status: "draft",
    order: 5,
  },
  {
    id: "kralj-stjepan-dabisa",
    dynastyId: "kotromanici",

    name: "Краљ Стјепан Дабиша",
    slug: "kralj-stjepan-dabisa",
    title: "краљ",

    description:
      "Краљ Босне након Твртка I, током чије владавине су ојачали утицај велике властеле и спољнополитички притисци у региону.",

    reigns: [
      {
        start: { year: 1391, precision: "year" },
        end: { year: 1395, precision: "year" },
        title: "краљ",
      },
    ],
    titleHistory: [
      {
        start: { year: 1391, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/backgrounds/kotromanici.webp",

    achievementsIds: ["ocuvanje-kraljevskog-kontinuiteta-dabisa"],

    eventIds: [],

    predecessorId: "kralj-tvrtko-i",
    successorId: "kralj-stjepan-ostoja",

    status: "draft",
    order: 6,
  },
  {
    id: "kralj-stjepan-ostoja",
    dynastyId: "kotromanici",

    name: "Краљ Стјепан Остоја",
    slug: "kralj-stjepan-ostoja",
    title: "краљ",

    description:
      "Босански краљ који је владао у два наврата у бурном периоду борби између великих обласних господара и спољних сила.",

    reigns: [
      {
        start: { year: 1398, precision: "year" },
        end: { year: 1404, precision: "year" },
        title: "краљ",
        note: "Прва владавина до смјене 1404. године.",
      },
      {
        start: { year: 1409, precision: "year" },
        end: { year: 1418, precision: "year" },
        title: "краљ",
        note: "Друга владавина након повратка на краљевски пријесто.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1398, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/stjepan-ostoja.webp",

    achievementsIds: ["diplomatsko-manevrisanje-ostoje"],

    eventIds: [],

    predecessorId: "kralj-stjepan-dabisa",
    successorId: "kralj-tvrtko-ii",

    status: "draft",
    order: 7,
  },
  {
    id: "kralj-tvrtko-ii",
    dynastyId: "kotromanici",

    name: "Краљ Твртко II Котроманић",
    slug: "kralj-tvrtko-ii",
    title: "краљ",

    description:
      "Краљ Босне у два владарска периода, током којих је настојао да обнови унутрашњу стабилност, подстакне рударство и очува државу у тешким околностима.",

    reigns: [
      {
        start: { year: 1404, precision: "year" },
        end: { year: 1409, precision: "year" },
        title: "краљ",
        note: "Прва владавина.",
      },
      {
        start: { year: 1421, precision: "year" },
        end: { year: 1443, precision: "year" },
        title: "краљ",
        note: "Друга владавина обиљежена економским опоравком и јачањем градова.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1404, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/backgrounds/kotromanici.webp",

    achievementsIds: ["obnova-privrede-i-rudnika-tvrtko-ii"],

    eventIds: [],

    predecessorId: "kralj-stjepan-ostoja",
    successorId: "kralj-stjepan-tomas",

    status: "draft",
    order: 8,
  },
  {
    id: "kralj-stjepan-tomas",
    dynastyId: "kotromanici",

    name: "Краљ Стјепан Томаш",
    slug: "kralj-stjepan-tomas",
    title: "краљ",

    description:
      "Краљ Босне који је настојао да ојача краљевски ауторитет спрам моћне властеле и побољша дипломатске односе са европским дворовима.",

    reigns: [
      {
        start: { year: 1443, precision: "year" },
        end: { year: 1461, precision: "year" },
        title: "краљ",
      },
    ],
    titleHistory: [
      {
        start: { year: 1443, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/backgrounds/kotromanici.webp",

    achievementsIds: [
      "jacanje-kraljevske-vlasti-tomas",
      "diplomatske-veze-sa-zapadom",
    ],

    eventIds: [],

    predecessorId: "kralj-tvrtko-ii",
    successorId: "stjepan-tomasevic",

    status: "draft",
    order: 9,
  },
  {
    id: "stjepan-tomasevic",
    dynastyId: "kotromanici",

    name: "Стјепан Томашевић",
    slug: "stjepan-tomasevic",
    title: "краљ",

    description:
      "Посљедњи краљ средњовјековне Босне и краткотрајни српски деспот, који је покушао да организује одбрану од османског напредовања.",

    reigns: [
      {
        start: { year: 1461, precision: "year" },
        end: { year: 1463, precision: "year" },
        title: "краљ",
        note: "Последњи краљ Босне до османског освајања 1463. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1459, precision: "year" },
        title: "деспот",
      },
      {
        start: { year: 1461, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/stjepan-tomasevic.webp",

    achievementsIds: [
      "povelja-o-saveznistvu-i-odbrani",
      "utvrdjivanje-gradova-pred-osmanlijama",
    ],

    eventIds: ["pad-bosanskog-kraljevstva-1463"],

    predecessorId: "kralj-stjepan-tomas",

    status: "draft",
    order: 10,
  },

  {
    id: "balsa-i",
    dynastyId: "balsici",

    name: "Балша I Балшић",
    slug: "balsa-i",
    title: "господар",

    description:
      "Родоначелник династије Балшић који је у вријеме слабљења централне царске власти уздигао породицу од ситније властеле до водећих господара Зете.",

    reigns: [
      {
        start: { year: 1360, precision: "year" },
        end: { year: 1362, precision: "year" },
        title: "господар",
        note: "Почетак самосталнијег уздизања породице Балшић у Зетском приморју и Скадарском језеру.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1360, precision: "year" },
        title: "господар",
      },
    ],

    portrait: "/assets/images/backgrounds/balsici.webp",

    achievementsIds: [
      "pocetak-uspona-balsica-u-zeti",
      "oslonac-na-zetske-gradove-i-obalu",
    ],

    eventIds: ["uspon-balsica-u-zeti-1360"],

    successorId: "djuradj-i-balsic",

    status: "draft",
    order: 1,
  },
  {
    id: "djuradj-i-balsic",
    dynastyId: "balsici",

    name: "Ђурађ I Балшић",
    slug: "djuradj-i-balsic",
    title: "господар",

    description:
      "Најстарији син Балше I који је консолидовао власт у Зети, проширио територију ка Скадру и Призрену и учврстио политичке везе у окружењу.",

    reigns: [
      {
        start: { year: 1362, precision: "year" },
        end: { year: 1378, precision: "year" },
        title: "господар",
        note: "Период проширења власти на значајан дио Зете и дијелове сјеверне Албаније и Метохије.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1362, precision: "year" },
        title: "господар",
      },
    ],

    portrait: "/assets/images/backgrounds/balsici.webp",

    achievementsIds: [
      "prosirenje-zetske-oblasti-djuradj-i",
      "jacanje-veza-sa-dubrovnikom-i-primorjem",
    ],

    eventIds: [],

    predecessorId: "balsa-i",
    successorId: "balsa-ii",

    status: "draft",
    order: 2,
  },
  {
    id: "balsa-ii",
    dynastyId: "balsici",

    name: "Балша II Балшић",
    slug: "balsa-ii",
    title: "господар",

    description:
      "Господар Зете који је брачним везама и војним походима продрео дубље ка југу и Драчу, али је страдао у сукобу са Османлијама на Саурском пољу.",

    reigns: [
      {
        start: { year: 1378, precision: "year" },
        end: { year: 1385, precision: "year" },
        title: "господар",
        note: "Владавина обиљежена продорима на југ и pogibijom на Саурском пољу 1385. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1378, precision: "year" },
        title: "господар",
      },
    ],

    portrait: "/assets/images/backgrounds/balsici.webp",

    achievementsIds: [
      "prodor-ka-dracu-i-juznom-primorju",
      "odbrana-zetskih-uporista",
    ],

    eventIds: ["bitka-na-saurskom-polju-1385"],

    predecessorId: "djuradj-i-balsic",
    successorId: "djuradj-ii-balsic",

    status: "draft",
    order: 3,
  },
  {
    id: "djuradj-ii-balsic",
    dynastyId: "balsici",

    name: "Ђурађ II Страцимировић Балшић",
    slug: "djuradj-ii-balsic",
    title: "господар",

    description:
      "Господар Зете који је владао у периоду све јачег млетачког притиска на приморје и скадарску област, те османских продора у залеђу.",

    reigns: [
      {
        start: { year: 1385, precision: "year" },
        end: { year: 1403, precision: "year" },
        title: "господар",
        note: "Период дипломатског балансирања између Млетачке републике, Османлија и српских земаља.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1385, precision: "year" },
        title: "господар",
      },
    ],

    portrait: "/assets/images/backgrounds/balsici.webp",

    achievementsIds: [
      "odrzavanje-zetske-samostalnosti-krajem-xiv-vijeka",
      "diplomatija-prema-mlecanima-i-dubrovniku",
    ],

    eventIds: ["prvi-mletacki-rat-u-zeti-1396"],

    predecessorId: "balsa-ii",
    successorId: "balsa-iii",

    status: "draft",
    order: 4,
  },
  {
    id: "balsa-iii",
    dynastyId: "balsici",

    name: "Балша III Балшић",
    slug: "balsa-iii",
    title: "господар",

    description:
      "Посљедњи владар из династије Балшић који је годинама водио исцрпљујуће ратове против Млечана за зетске градове и Скадар, уз ослонац на деспота Стефана Лазаревића.",

    reigns: [
      {
        start: { year: 1403, precision: "year" },
        end: { year: 1421, precision: "year" },
        title: "господар",
        note: "Дуготрајна борба са Млетачком републиком и предаја Зете на управу деспоту Стефану Лазаревићу 1421. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1403, precision: "year" },
        title: "господар",
      },
    ],

    portrait: "/assets/images/backgrounds/balsici.webp",

    achievementsIds: [
      "dugotrajan-otpor-mletackoj-ekspanziji",
      "knjizevno-i-kulturno-okruzenje-na-dvoru",
    ],

    eventIds: ["pripajanje-zete-despotovini-1421"],

    predecessorId: "djuradj-ii-balsic",

    status: "draft",
    order: 5,
  },
  {
    id: "vlatko-vukovic",
    dynastyId: "kosace",
    name: "Влатко Вуковић",
    slug: "vlatko-vukovic",
    title: "велики војвода",
    description:
      "Истакнути војсковођа босанског краља Твртка I и један од најранијих познатих представника породице Косача. Проширио је породичне посједе у Хуму и Конавлима, а посебно се истакао у борбама против Османлија код Билеће и у Косовском боју 1389. године.",
    reigns: [
      {
        start: { year: 1378, precision: "approximate" },
        end: { year: 1392, precision: "approximate" },
        title: "велики војвода",
      },
    ],
    titleHistory: [
      {
        start: { year: 1378, precision: "approximate" },
        title: "велики војвода",
      },
    ],
    portrait: "/assets/images/rulers/vlatko-vukovic.webp",
    achievementsIds: ["pobjeda-kod-bilece", "vojno-sirenje-posjeda-kosaca"],
    eventIds: ["bitka-kod-bilece-1388"],
    successorId: "sandalj-hranic",
    status: "draft",
    order: 1,
  },
  {
    id: "sandalj-hranic",
    dynastyId: "kosace",
    name: "Сандаљ Хранић",
    slug: "sandalj-hranic",
    title: "велики војвода",
    description:
      "Један од најмоћнијих босанских великаша прве половине XV вијека. Наслиједио је посједе и положај стрица Влатка Вуковића, проширио власт у Хуму и Подрињу и водио самосталну политику у односу на босанске краљеве, Дубровник, Млетке и Османлије. Његов двор налазио се у Благају на Буни.",
    reigns: [
      {
        start: { year: 1392, precision: "approximate" },
        end: { year: 1435, precision: "year" },
        title: "велики војвода",
      },
    ],
    titleHistory: [
      {
        start: { year: 1392, precision: "approximate" },
        title: "велики војвода",
      },
    ],
    portrait: "/assets/images/backgrounds/kosace.webp",
    achievementsIds: [
      "prosirenje-posjeda-sandalja",
      "politicka-samostalnost-kosaca",
    ],
    eventIds: ["nasljedstvo-sandalja-1392"],
    predecessorId: "vlatko-vukovic",
    successorId: "stjepan-vukcic-kosaca",
    status: "draft",
    order: 2,
  },
  {
    id: "stjepan-vukcic-kosaca",
    dynastyId: "kosace",
    name: "Стефан Вукчић Косача",
    slug: "stjepan-vukcic-kosaca",
    title: "херцег",
    description:
      "Најмоћнији представник породице Косача и оснивач политичке области која ће добити име Херцеговина. Наслиједио је Сандаља Хранића 1435. године, проширио власт у Хуму и приморју, а 1448. узео титулу херцега од Светог Саве. Његова политика обиљежена је сукобима са босанским краљем и покушајима очувања самосталности.",
    reigns: [
      {
        start: { year: 1435, precision: "year" },
        end: { year: 1448, precision: "year" },
        title: "велики војвода",
      },
      {
        start: { year: 1448, precision: "year" },
        end: { year: 1466, precision: "year" },
        title: "херцег",
      },
    ],
    titleHistory: [
      { start: { year: 1435, precision: "year" }, title: "велики војвода" },
      { start: { year: 1448, precision: "year" }, title: "херцег" },
    ],
    portrait: "/assets/images/rulers/stjepan-vukcic-kosaca.webp",
    achievementsIds: [
      "hercegovina-kao-politicka-oblast",
      "titula-hercega-od-svetog-save",
    ],
    eventIds: ["proglasenje-hercega-1448", "pad-bosanskog-kraljevstva-1463"],
    predecessorId: "sandalj-hranic",
    successorId: "vladislav-hercegovic",
    status: "draft",
    order: 3,
  },
  {
    id: "vladislav-hercegovic",
    dynastyId: "kosace",
    name: "Владислав Херцеговић",
    slug: "vladislav-hercegovic",
    title: "херцег",
    description:
      "Син Стефана Вукчића Косаче који је након очеве смрти наставио борбу за насљеђе и власт у Херцеговини. Његови сукоби са братом Влатком и османско ширење довели су до слабљења политичког положаја породице.",
    reigns: [
      {
        start: { year: 1466, precision: "year" },
        end: { year: 1481, precision: "approximate" },
        title: "херцег",
        note: "Власт је дијелио и оспоравао са братом Влатком.",
      },
    ],
    titleHistory: [
      { start: { year: 1466, precision: "year" }, title: "херцег" },
    ],
    portrait: "/assets/images/backgrounds/kosace.webp",
    achievementsIds: ["ocuvanje-dijela-hercegovine"],
    eventIds: ["pad-hercegovine-1482"],
    predecessorId: "stjepan-vukcic-kosaca",
    status: "draft",
    order: 4,
  },
  {
    id: "vlatko-hercegovic",
    dynastyId: "kosace",
    name: "Влатко Херцеговић",
    slug: "vlatko-hercegovic",
    title: "херцег",
    description:
      "Син Стефана Вукчића Косаче који је након очеве смрти наставио да носи херцешку титулу и управља дијеловима породичних посједа. Под притиском Османског царства изгубио је већину насљеђених области, а посљедње године живота провео је изван Херцеговине.",
    reigns: [
      {
        start: { year: 1466, precision: "year" },
        end: { year: 1482, precision: "approximate" },
        title: "херцег",
      },
    ],
    titleHistory: [
      { start: { year: 1466, precision: "year" }, title: "херцег" },
    ],
    portrait: "/assets/images/backgrounds/kosace.webp",
    achievementsIds: ["posljednja-odbrana-hercegovine"],
    eventIds: ["pad-hercegovine-1482"],
    predecessorId: "stjepan-vukcic-kosaca",
    status: "draft",
    order: 5,
  },

  {
    id: "dejan-dejanovic",
    dynastyId: "dejanovici",
    name: "Дејан Дејановић",
    slug: "dejan-dejanovic",
    title: "севастократор",
    description:
      "Српски великаш, војвода и севастократор, зет цара Стефана Душана и супруг Теодоре Немањић. Управљао је областима око Куманова и Жеглигова, поставивши темеље породичне власти која ће након распада Српског царства постати једна од најзначајнијих области источне Македоније.",
    reigns: [
      {
        start: { year: 1355, precision: "approximate" },
        end: { year: 1365, precision: "approximate" },
        title: "севастократор",
      },
    ],
    titleHistory: [
      {
        start: { year: 1355, precision: "approximate" },
        title: "севастократор",
      },
    ],
    portrait: "/assets/images/rulers/dejan-dejanovic.webp",
    achievementsIds: ["uprava-nad-kumanovom", "ucvrscivanje-porodicne-oblasti"],
    eventIds: [],
    successorId: "jovan-dragas",
    status: "draft",
    order: 1,
  },
  {
    id: "jovan-dragas",
    dynastyId: "dejanovici",
    name: "Јован Драгаш",
    slug: "jovan-dragas",
    title: "деспот",
    description:
      "Старији син Дејана и Теодоре Немањић, који је са братом Константином Драгашем управљао пространом облашћу источне Македоније. Након Маричке битке 1371. године прихватио је османску врховну власт, задржавајући управу над породичним посједима.",
    reigns: [
      {
        start: { year: 1371, precision: "approximate" },
        end: { year: 1378, precision: "approximate" },
        title: "деспот",
        note: "Владао заједно са братом Константином.",
      },
    ],
    titleHistory: [
      { start: { year: 1371, precision: "approximate" }, title: "деспот" },
    ],
    portrait: "/assets/images/backgrounds/dejanovici.webp",
    achievementsIds: ["ocuvanje-oblasti-dejanovica"],
    eventIds: ["maricka-bitka-1371", "nasljedstvo-dejanove-oblasti"],
    predecessorId: "dejan-dejanovic",
    successorId: "konstantin-dragas",
    status: "draft",
    order: 2,
  },
  {
    id: "konstantin-dragas",
    dynastyId: "dejanovici",
    name: "Константин Драгаш",
    slug: "konstantin-dragas",
    title: "господар",
    description:
      "Један од најмоћнијих српских обласних господара друге половине XIV вијека. Управљао је источном Македонијом као османски вазал, одржавајући значајан степен унутрашње самосталности. Погинуо је 1395. године у бици на Ровинама борећи се на страни османске војске.",
    reigns: [
      {
        start: { year: 1378, precision: "approximate" },
        end: { year: 1395, precision: "year" },
        title: "господар",
      },
    ],
    titleHistory: [
      { start: { year: 1378, precision: "approximate" }, title: "господар" },
    ],
    portrait: "/assets/images/rulers/konstantin-dragas.webp",
    achievementsIds: [
      "prosirenje-oblasti-konstantina",
      "dinasticke-veze-sa-vizantijom",
    ],
    eventIds: ["bitka-na-rovinama-1395"],
    predecessorId: "jovan-dragas",
    status: "draft",
    order: 3,
  },

  {
    id: "kralj-vukasin",
    dynastyId: "mrnjavcevici",

    name: "Краљ Вукашин Мрњавчевић",
    slug: "kralj-vukasin",
    title: "краљ",

    description:
      "Најмоћнији великаш у доба слабљења Српског царства, савладар цара Уроша V и господар пространих области у Македонији са сједиштем у Прилепу.",

    reigns: [
      {
        start: { year: 1365, precision: "year" },
        end: { year: 1371, precision: "year" },
        title: "краљ",
        note: "Крунисан за краља и савладара цара Уроша V; погинуо у Маричкој бици 1371. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1365, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kralj-vukasin.webp",

    achievementsIds: [
      "savladarstvo-sa-carem-urosem-v",
      "ucvrscivanje-prilepske-oblasti",
    ],

    eventIds: ["krunisanje-vukasina-za-kralja-1365", "maricka-bitka-1371"],

    successorId: "kraljevic-marko",

    status: "draft",
    order: 1,
  },
  {
    id: "despot-ugljesa",
    dynastyId: "mrnjavcevici",

    name: "Деспот Јован Угљеша Мрњавчевић",
    slug: "despot-ugljesa",
    title: "деспот",

    description:
      "Господар Серске области и брат краља Вукашина, познат по дипломатском помирењу са Цариградском патријаршијом и организацији похода против Османлија.",

    reigns: [
      {
        start: { year: 1365, precision: "year" },
        end: { year: 1371, precision: "year" },
        title: "деспот",
        note: "Владао Серском облашћу са титулом деспота до погибије у Маричкој бици 1371. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1365, precision: "year" },
        title: "деспот",
      },
    ],

    portrait: "/assets/images/rulers/despot-ugljesa.webp",

    achievementsIds: [
      "pomirenje-srpske-i-carigradske-crkve-1368",
      "organizacija-anti-osmanskog-saveza-1371",
    ],

    eventIds: ["maricka-bitka-1371-m"],

    status: "draft",
    order: 2,
  },
  {
    id: "kraljevic-marko",
    dynastyId: "mrnjavcevici",

    name: "Краљ Марко Мрњавчевић (Краљевић Марко)",
    slug: "kraljevic-marko",
    title: "краљ",

    description:
      "Син краља Вукашина и посљедњи владар из куће Мрњавчевића, који је као османски вазал владао Прилепским краљевством и постао највећи јунак народне епике.",

    reigns: [
      {
        start: { year: 1371, precision: "year" },
        end: { year: 1395, precision: "year" },
        title: "краљ",
        note: "Носио титулу краља у Прилепу након Маричке битке до погибије на Ровинама 1395. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1370, precision: "approximate" },
        title: "млади краљ",
      },
      {
        start: { year: 1371, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kraljevic-marko.webp",

    achievementsIds: [
      "ocuvanje-prilepskog-kraljevstva",
      "manastir-svetog-dimitrija-markov-manastir",
    ],

    eventIds: ["bitka-na-rovinama-1395-m"],

    predecessorId: "kralj-vukasin",

    status: "draft",
    order: 3,
  },

  {
    id: "knez-lazar",
    dynastyId: "lazarevici",

    name: "Кнез Лазар Хребељановић",
    slug: "knez-lazar",
    title: "кнез",

    description:
      "Најмоћнији српски обласни господар послије распада Српског царства, утемељивач Моравске Србије и предводник хришћанске војске у Косовском боју 1389. године.",

    reigns: [
      {
        start: { year: 1371, precision: "year" },
        end: { year: 1389, precision: "year" },
        title: "кнез",
        note: "Учвршћивање власти у Моравској Србији и предвођење одбране на Косову пољу 1389. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1371, precision: "year" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/rulers/knez-lazar.webp",

    achievementsIds: [
      "objedinjavanje-moravske-srbije",
      "manastir-ravanica",
      "zastita-rudnika-i-trgovackih-puteva",
    ],

    eventIds: ["kosovski-boj-1389"],

    successorId: "kneginja-milica",

    status: "draft",
    order: 1,
  },
  {
    id: "kneginja-milica",
    dynastyId: "lazarevici",

    name: "Кнегиња Милица (монахиња Јевгенија)",
    slug: "kneginja-milica",
    title: "кнегиња",

    description:
      "Супруга кнеза Лазара која је послије Косовског боја преузела бригу о држави у име малољетног Стефана, сачувала мир и оставила траг у средњовјековној књижевности.",

    reigns: [
      {
        start: { year: 1389, precision: "year" },
        end: { year: 1393, precision: "year" },
        title: "кнегиња",
        note: "Регентска и савјетодавна улога након Косовског боја до пунољетства и самосталније управе Стефана Лазаревића.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1389, precision: "year" },
        title: "кнегиња",
      },
    ],

    portrait: "/assets/images/rulers/kneginja-milica.webp",

    achievementsIds: [
      "ocuvanje-zemlje-nakon-kosovskog-boja",
      "manastir-ljubostinja",
      "knjizevno-stvaralastvo-monahinje-jevgenije",
    ],

    eventIds: ["kosovski-boj-1389"],

    predecessorId: "knez-lazar",
    successorId: "despot-stefan-lazarevic",

    status: "draft",
    order: 2,
  },
  {
    id: "despot-stefan-lazarevic",
    dynastyId: "lazarevici",

    name: "Деспот Стефан Лазаревић",
    slug: "despot-stefan-lazarevic",
    title: "деспот",

    description:
      "Син кнеза Лазара и кнегиње Милице, први српски деспот који је уздигао Београд у нову пријестоницу, ојачао Српску деспотовину и остао упамћен као витез, државник и писац.",

    reigns: [
      {
        start: { year: 1389, precision: "year" },
        end: { year: 1402, precision: "year" },
        title: "кнез",
        note: "Владавина као српски кнез до добијања деспотске титуле 1402. године.",
      },
      {
        start: { year: 1402, precision: "year" },
        end: { year: 1427, precision: "year" },
        title: "деспот",
        note: "Период снажног културног, привредног и територијалног развоја Српске деспотовине.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1389, precision: "year" },
        title: "кнез",
      },
      {
        start: { year: 1402, precision: "year" },
        title: "деспот",
      },
    ],

    portrait: "/assets/images/rulers/despot-stefan-lazarevic.webp",

    achievementsIds: [
      "dobijanje-despotskog-dostojanstva-1402",
      "obnova-i-uzdizanje-beograda",
      "manastir-manasija-resava",
      "slovo-ljubve-i-resavska-skola",
      "zakon-o-rudnicima-u-novom-brdu",
    ],

    eventIds: [
      "angorska-bitka-1402",
      "beograd-prestonica-1404",
      "smrt-despota-stefana-1427",
    ],

    predecessorId: "kneginja-milica",

    status: "draft",
    order: 3,
  },

  {
    id: "vuk-brankovic",
    dynastyId: "brankovici",

    name: "Вук Бранковић",
    slug: "vuk-brankovic",
    title: "господар",

    description:
      "Родоначелник владарске лозе Бранковића, господар Косова, Метохије и Полимља који је предводио десно крило српске војске у Косовском боју 1389. године и наставио отпор Османлијама.",

    reigns: [
      {
        start: { year: 1371, precision: "approximate" },
        end: { year: 1396, precision: "year" },
        title: "господар",
        note: "Самостални обласни господар области Бранковића прије успостављања деспотске власти династије 1427. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1371, precision: "approximate" },
        title: "господар",
      },
    ],

    portrait: "/assets/images/rulers/vuk-brankovic.webp",

    achievementsIds: [
      "ucvrscivanje-oblasti-brankovica",
      "otpor-osmanlijama-poslije-1389",
    ],

    eventIds: [],

    successorId: "djuradj-brankovic",

    status: "draft",
    order: 1,
  },
  {
    id: "djuradj-brankovic",
    dynastyId: "brankovici",

    name: "Деспот Ђурађ Бранковић",
    slug: "djuradj-brankovic",
    title: "деспот",

    description:
      "Насљедник деспота Стефана Лазаревића, градитељ Смедеревске тврђаве и државник који је вјештом дипломатијом и жртвама годинама одлагао коначни пад Српске деспотовине.",

    reigns: [
      {
        start: { year: 1427, precision: "year" },
        end: { year: 1439, precision: "year" },
        title: "деспот",
        note: "Први период владавине и изградња нове пријестонице Смедерева.",
      },
      {
        start: { year: 1444, precision: "year" },
        end: { year: 1456, precision: "year" },
        title: "деспот",
        note: "Обнова Деспотовине након Сегединског мира и Дуге војне.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1427, precision: "year" },
        title: "деспот",
      },
    ],

    portrait: "/assets/images/rulers/despot-durad-brankovic.webp",

    achievementsIds: [
      "izgradnja-smederevske-tvrdjave",
      "obnova-srpske-despotovine-1444",
      "esfigmenska-povelja-i-podrska-svetoj-gori",
    ],

    eventIds: [
      "izgradnja-smedereva-1430",
      "prvi-pad-despotovine-1439",
      "segedinski-mir-i-obnova-despotovine-1444",
    ],

    predecessorId: "vuk-brankovic",
    successorId: "lazar-brankovic",

    status: "draft",
    order: 2,
  },
  {
    id: "lazar-brankovic",
    dynastyId: "brankovici",

    name: "Деспот Лазар Бранковић",
    slug: "lazar-brankovic",
    title: "деспот",

    description:
      "Најмлађи син деспота Ђурђа који је преузео управу над знатно суженом Српском деспотовином у изузетно тешким приликама након опсаде Београда 1456. године.",

    reigns: [
      {
        start: { year: 1456, precision: "year" },
        end: { year: 1458, precision: "year" },
        title: "деспот",
        note: "Кратка владавина обиљежена притиском Османлија и унутрашњим подјелама на двору.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1446, precision: "year" },
        title: "деспот",
      },
    ],

    portrait: "/assets/images/rulers/lazar-brankovic.webp",

    achievementsIds: ["ocuvanje-smedereva-i-preostalih-oblasti-1457"],

    eventIds: [],

    predecessorId: "djuradj-brankovic",
    successorId: "stefan-brankovic",

    status: "draft",
    order: 3,
  },
  {
    id: "stefan-brankovic",
    dynastyId: "brankovici",

    name: "Деспот Стефан Бранковић (Стефан Слепи)",
    slug: "stefan-brankovic",
    title: "деспот",

    description:
      "Средњи син деспота Ђурђа, ослијепљен у османском заточеништву 1441. године, који је након смрти брата Лазара накратко управљао Деспотовином уочи пада Смедерева.",

    reigns: [
      {
        start: { year: 1458, precision: "year" },
        end: { year: 1459, precision: "year" },
        title: "деспот",
        note: "Владао Српском деспотовином до доласка Стјепана Томашевића и пада Смедерева 1459. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1458, precision: "year" },
        title: "деспот",
      },
    ],

    portrait: "/assets/images/rulers/stefan-brankovic.webp",

    achievementsIds: ["ocuvanje-dinastickog-kontinuiteta-u-izgnanstvu"],

    eventIds: ["pad-smedereva-1459"],

    predecessorId: "lazar-brankovic",
    successorId: "vuk-grgurevic-brankovic",

    status: "draft",
    order: 4,
  },
  {
    id: "vuk-grgurevic-brankovic",
    dynastyId: "brankovici",

    name: "Деспот Вук Гргуревић Бранковић (Змај Огњени Вук)",
    slug: "vuk-grgurevic-brankovic",
    title: "деспот",

    description:
      "Унук деспота Ђурђа Бранковића и прослављени ратник у јужној Угарској и Срему, који је водио бројне походе против Османлија и стекао славу у народној епици.",

    reigns: [
      {
        start: { year: 1471, precision: "year" },
        end: { year: 1485, precision: "year" },
        title: "деспот",
        note: "Титуларни српски деспот у Срему и заповједник српских чета у Угарској.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1471, precision: "year" },
        title: "деспот",
      },
    ],

    portrait: "/assets/images/rulers/vuk-grgurevic-brankovic.webp",

    achievementsIds: [
      "obnova-despotske-titule-u-sremu-1471",
      "ratni-pohodi-protiv-osmanlija-u-posavini",
    ],

    eventIds: [],

    predecessorId: "stefan-brankovic",
    successorId: "djordje-brankovic",

    status: "draft",
    order: 5,
  },
  {
    id: "djordje-brankovic",
    dynastyId: "brankovici",

    name: "Деспот Ђорђе Бранковић (монах Максим)",
    slug: "djordje-brankovic",
    title: "деспот",

    description:
      "Син деспота Стефана Слепог који је владао као српски деспот у Срему, а потом се замонашио и као владика Максим обновио духовни живот и подигао манастир Крушедол.",

    reigns: [
      {
        start: { year: 1486, precision: "year" },
        end: { year: 1496, precision: "year" },
        title: "деспот",
        note: "Деспот у Срему до одрицања од титуле у корист брата Јована и одласка у монаштво.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1486, precision: "year" },
        title: "деспот",
      },
    ],

    portrait: "/assets/images/rulers/djordje-brankovic.webp",

    achievementsIds: [
      "manastir-krusedol-i-duhovno-srediste-srema",
      "obnova-beogradske-mitropolije",
    ],

    eventIds: [],

    predecessorId: "vuk-grgurevic-brankovic",
    successorId: "jovan-brankovic",

    status: "draft",
    order: 6,
  },
  {
    id: "jovan-brankovic",
    dynastyId: "brankovici",

    name: "Деспот Јован Бранковић",
    slug: "jovan-brankovic",
    title: "деспот",

    description:
      "Посљедњи српски деспот из породице Бранковић, који је из Срема водио борбе против Османлија у Босни и Подунављу све до своје смрти 1502. године.",

    reigns: [
      {
        start: { year: 1496, precision: "year" },
        end: { year: 1502, precision: "year" },
        title: "деспот",
        note: "Посљедњи мушки изданак владарске лозе Бранковића.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1496, precision: "year" },
        title: "деспот",
      },
    ],

    portrait: "/assets/images/rulers/jovan-brankovic.webp",

    achievementsIds: [
      "odbrana-srema-i-granicnih-oblasti",
      "ktitorska-djelatnost-na-fruskoj-gori",
    ],

    eventIds: ["kraj-sremskih-despota-brankovica-1502"],

    predecessorId: "djordje-brankovic",

    status: "draft",
    order: 7,
  },

  {
    id: "stefan-crnojevic",
    dynastyId: "crnojevici",
    name: "Стефан Црнојевић",
    slug: "stefan-crnojevic",
    title: "војвода",
    description:
      "Оснивач политичког успона Црнојевића у Зети. Учврстио је породичну власт у Горњој Зети, одржавао односе са Млетачком републиком и супротстављао се османском ширењу. Године 1452. признао је млетачку врховну власт и добио титулу војводе Горње Зете.",
    reigns: [
      {
        start: { year: 1451, precision: "approximate" },
        end: { year: 1465, precision: "approximate" },
        title: "војвода",
      },
    ],
    titleHistory: [
      { start: { year: 1452, precision: "year" }, title: "војвода" },
    ],
    portrait: "/assets/images/rulers/stefan-crnojevic.webp",
    achievementsIds: ["ucvrscivanje-vlasti-crnojevica"],
    eventIds: ["preuzimanje-vlasti-u-zeti-1421"],
    successorId: "ivan-crnojevic",
    status: "draft",
    order: 1,
  },
  {
    id: "ivan-crnojevic",
    dynastyId: "crnojevici",
    name: "Иван Црнојевић",
    slug: "ivan-crnojevic",
    title: "господар Зете",
    description:
      "Један од најзначајнијих владара из породице Црнојевића. Водио је борбу против Османлија, а након привременог изгнанства вратио се у Зету 1481. године и обновио своју власт. Сједиште државе пренио је најприје на Обод, а потом на Цетиње, гдје је поставио темеље будућег духовног и политичког средишта Црне Горе.",
    reigns: [
      {
        start: { year: 1465, precision: "approximate" },
        end: { year: 1479, precision: "year" },
        title: "господар Зете",
      },
      {
        start: { year: 1481, precision: "year" },
        end: { year: 1490, precision: "approximate" },
        title: "господар Зете",
        note: "Обновио власт након повратка из изгнанства.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1465, precision: "approximate" },
        title: "господар Зете",
      },
    ],
    portrait: "/assets/images/rulers/ivan-crnojevic.webp",
    achievementsIds: [
      "osnivanje-cetinja-dostignuce",
      "obnova-vlasti-ivana-crnojevica",
    ],
    eventIds: ["povratak-ivana-crnojevica-1481", "osnivanje-cetinja-1482"],
    predecessorId: "stefan-crnojevic",
    successorId: "durad-crnojevic",
    status: "draft",
    order: 2,
  },
  {
    id: "durad-crnojevic",
    dynastyId: "crnojevici",
    name: "Ђурађ Црнојевић",
    slug: "durad-crnojevic",
    title: "господар Зете",
    description:
      "Син Ивана Црнојевића и посљедњи значајни владар из главне линије породице. Остао је упамћен по оснивању штампарије на Ободу и штампању ћириличних књига. Због политичких сукоба и османског притиска напустио је Зету 1496. године.",
    reigns: [
      {
        start: { year: 1490, precision: "approximate" },
        end: { year: 1496, precision: "year" },
        title: "господар Зете",
      },
    ],
    titleHistory: [
      {
        start: { year: 1490, precision: "approximate" },
        title: "господар Зете",
      },
    ],
    portrait: "/assets/images/rulers/djuradj-crnojevic.webp",
    achievementsIds: ["crnojevica-stamparija-dostignuce", "oktoih-prvoglasnik"],
    eventIds: ["crnojevica-stamparija-1494"],
    predecessorId: "ivan-crnojevic",
    successorId: "stefan-crnojevic-ii",
    status: "draft",
    order: 3,
  },
  {
    id: "stefan-crnojevic-ii",
    dynastyId: "crnojevici",
    name: "Стефан Црнојевић",
    slug: "stefan-crnojevic-ii",
    title: "господар Зете",
    description:
      "Син Ивана Црнојевића и брат Ђурђа Црнојевића. Током одсуства брата преузео је управу над Зетом уз османску подршку. Његова власт означила је завршну фазу самосталне политичке улоге породице Црнојевића.",
    reigns: [
      {
        start: { year: 1496, precision: "year" },
        end: { year: 1499, precision: "approximate" },
        title: "господар Зете",
      },
    ],
    titleHistory: [
      { start: { year: 1496, precision: "year" }, title: "господар Зете" },
    ],
    portrait: "/assets/images/backgrounds/crnojevici.webp",
    achievementsIds: [],
    eventIds: ["kraj-vlasti-crnojevica-1499"],
    predecessorId: "durad-crnojevic",
    status: "draft",
    order: 4,
  },
  {
    id: "vladika-danilo",
    dynastyId: "petrovici",

    name: "Владика Данило I Петровић Његош",
    slug: "vladika-danilo",
    title: "владика",

    description:
      "Родоначелник владарске династије Петровић-Његош који је објединио црногорска племена, успоставио насљедни владарски континуитет на Цетињу и учврстио везе са Русијом.",

    reigns: [
      {
        start: { year: 1697, precision: "year" },
        end: { year: 1735, precision: "year" },
        title: "владика",
        note: "Успостављање владарске куће Петровића и зачетак организованије државне и црквене власти.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1697, precision: "year" },
        title: "владика",
      },
    ],

    portrait: "/assets/images/rulers/vladika-danilo.webp",

    achievementsIds: [
      "utemeljenje-dinastije-petrovic-njegos",
      "uspostavljanje-veza-sa-rusijom-1711",
    ],

    eventIds: ["izbor-vladike-danila-1697"],

    successorId: "vladika-sava-petrovic",

    status: "draft",
    order: 1,
  },
  {
    id: "vladika-sava-petrovic",
    dynastyId: "petrovici",

    name: "Владика Сава Петровић Његош",
    slug: "vladika-sava-petrovic",
    title: "владика",

    description:
      "Црногорски владика који је у више наврата управљао земљом у сложеним међународним околностима између Млетачке републике, Османског царства и Русије.",

    reigns: [
      {
        start: { year: 1735, precision: "year" },
        end: { year: 1781, precision: "year" },
        title: "владика",
        note: "Дуготрајно владикатовање са периодима заједничке управе и дипломатског дјеловања уз владику Василија.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1735, precision: "year" },
        title: "владика",
      },
    ],

    portrait: "/assets/images/rulers/vladika-sava-petrovic.webp",

    achievementsIds: [
      "ocuvanje-manastirskih-poseda-i-povelja",
      "odrzavanje-ravnoteze-prema-mlecima-i-porti",
    ],

    eventIds: [],

    predecessorId: "vladika-danilo",
    successorId: "vladika-vasilije-petrovic",

    status: "draft",
    order: 2,
  },
  {
    id: "vladika-vasilije-petrovic",
    dynastyId: "petrovici",

    name: "Владика Василије Петровић Његош",
    slug: "vladika-vasilije-petrovic",
    title: "владика",

    description:
      "Истакнути дипломата, реформатор и писац „Историје о Црној Гори“ (1754), који је неуморно тражио заштиту и помоћ за Црну Гору на европским дворовима.",

    reigns: [
      {
        start: { year: 1750, precision: "year" },
        end: { year: 1766, precision: "year" },
        title: "владика",
        note: "Интензивна дипломатска мисија у Русији и одбрана црногорске самосталности.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1750, precision: "year" },
        title: "владика",
      },
    ],

    portrait: "/assets/images/rulers/vladika-vasilije-petrovic.webp",

    achievementsIds: [
      "istorija-o-crnoj-gori-1754",
      "diplomatska-borba-za-polozaj-crne-gore",
    ],

    eventIds: [],

    predecessorId: "vladika-sava-petrovic",
    successorId: "petar-i-petrovic-njegos",

    status: "draft",
    order: 3,
  },
  {
    id: "petar-i-petrovic-njegos",
    dynastyId: "petrovici",

    name: "Свети Петар I Цетињски (Петар I Петровић Његош)",
    slug: "petar-i-petrovic-njegos",
    title: "владика",

    description:
      "Један од највећих црногорских владара и духовника који је извојевао велике војне побједе на Мартинићима и Крусима, донио први писани законик и објединио Црну Гору и Брда.",

    reigns: [
      {
        start: { year: 1784, precision: "year" },
        end: { year: 1830, precision: "year" },
        title: "владика",
        note: "Дуготрајна владавина у којој су постављени темељи црногорске државности и законодавства.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1784, precision: "year" },
        title: "владика",
      },
    ],

    portrait: "/assets/images/rulers/vladika-petar-i-petrovic.webp",

    achievementsIds: [
      "zakonik-opsti-crnogorski-i-brdski-1798",
      "pobjede-na-martinicima-i-krusima-1796",
      "ujedinjenje-crne-gore-i-brda",
    ],

    eventIds: [
      "bitke-na-martinicima-i-krusima-1796",
      "donosenje-zakonika-opsteg-crnogorskog-1798",
    ],

    predecessorId: "scepan-mali",
    successorId: "petar-ii-petrovic-njegos",

    status: "draft",
    order: 5,
  },
  {
    id: "petar-ii-petrovic-njegos",
    dynastyId: "petrovici",

    name: "Петар II Петровић Његош",
    slug: "petar-ii-petrovic-njegos",
    title: "владика",

    description:
      "Владика, државник и највећи пјесник и мислилац српске и јужнословенске књижевности, аутор „Горског вијенца“, „Луче микрокозма“ и „Лажног цара Шћепана Малог“.",

    reigns: [
      {
        start: { year: 1830, precision: "year" },
        end: { year: 1851, precision: "year" },
        title: "владика",
        note: "Период јачања централне власти, увођења гвардије, пореза и штампарије на Цетињу, уз врхунско књижевно стваралаштво.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1830, precision: "year" },
        title: "владика",
      },
    ],

    portrait: "/assets/images/rulers/vladika-petar-ii-petrovic.webp",

    achievementsIds: [
      "gorski-vijenac-i-knjizevno-nasljedje",
      "osnivanje-gvardije-i-drzavnih-institucija",
      "cetinjaska-stamparija-i-prosvjeta",
    ],

    eventIds: [],

    predecessorId: "petar-i-petrovic-njegos",
    successorId: "knjaz-danilo-i",

    status: "draft",
    order: 6,
  },
  {
    id: "knjaz-danilo-i",
    dynastyId: "petrovici",

    name: "Књаз Данило I Петровић Његош",
    slug: "knjaz-danilo-i",
    title: "књаз",

    description:
      "Први свјетовни владар и књаз Црне Горе који је раздвојио свјетовну од духовне власти, донио Данилов законик (1855) и извојевао велику побједу на Граховцу (1858).",

    reigns: [
      {
        start: { year: 1851, precision: "year" },
        end: { year: 1860, precision: "year" },
        title: "књаз",
        note: "Претварање Црне Горе у насљедну свјетовну књажевину и снажне државно-правне реформе.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1851, precision: "year" },
        title: "књаз",
      },
    ],

    portrait: "/assets/images/rulers/knjaz-danilo-petrovic.webp",

    achievementsIds: [
      "danilov-zakonik-1855",
      "sekularizacija-vlasti-i-jacanje-drzave",
      "grahovacka-bitka-i-medjunarodno-razgranicenje-1858",
    ],

    eventIds: [],

    predecessorId: "petar-ii-petrovic-njegos",
    successorId: "kralj-nikola-i",

    status: "draft",
    order: 7,
  },
  {
    id: "kralj-nikola-i",
    dynastyId: "petrovici",

    name: "Књаз и краљ Никола I Петровић Његош",
    slug: "kralj-nikola-i",
    title: "краљ",

    description:
      "Најдуговечнији владар из династије Петровић-Његош, прво књаз а од 1910. године краљ Црне Горе, за чије владавине је држава добила међународно признање независности (1878), значајно проширила територију и модернизовала се.",

    reigns: [
      {
        start: { year: 1860, precision: "year" },
        end: { year: 1910, precision: "year" },
        title: "књаз",
        note: "Владавина као књаз Црне Горе обиљежена ратовима за ослобођење, Берлинским конгресом и модернизацијом.",
      },
      {
        start: { year: 1910, precision: "year" },
        end: { year: 1918, precision: "year" },
        title: "краљ",
        note: "Проглашен за краља Црне Горе 1910. године; владао до одлука Подгоричке скупштине и уједињења 1918. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1860, precision: "year" },
        title: "књаз",
      },
      {
        start: { year: 1910, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kralj-nikola.webp",

    achievementsIds: [
      "medjunarodno-priznanje-nezavisnosti-1878",
      "ustav-knjazevine-crne-gore-1905",
      "uzdizanje-crne-gore-u-kraljevinu-1910",
      "oslobodjenje-niksica-bara-ulcinja-i-podgorice",
    ],

    eventIds: [
      "berlinski-kongres-crna-gora-1878",
      "proglasenje-kraljevine-crne-gore-1910",
      "podgoricka-skupstina-1918",
    ],

    predecessorId: "knjaz-danilo-i",

    status: "draft",
    order: 8,
  },
  {
    id: "karadjordje-petrovic",
    dynastyId: "karadjordjevici",

    name: "Ђорђе Петровић — Карађорђе",
    slug: "karadjordje-petrovic",
    title: "вожд",

    description:
      "Врховни вожд Првог српског устанка и родоначелник династије Карађорђевић, који је подигао народ на оружје против османске власти и поставио темеље обнове српске државности.",

    reigns: [
      {
        start: { year: 1804, precision: "year" },
        end: { year: 1813, precision: "year" },
        title: "вожд",
        note: "Врховни вожд устаничке Србије од окупљања у Орашцу 1804. до слома устанка 1813. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1804, precision: "year" },
        title: "вожд",
      },
    ],

    portrait: "/assets/images/rulers/karadjordje.webp",

    achievementsIds: [
      "podizanje-prvog-srpskog-ustanka",
      "oslobodjenje-beograda-i-ustanicka-vlast",
      "praviteljstvujsci-sovjet-i-ustanicke-institucije",
    ],

    eventIds: ["prvi-srpski-ustanak-1804", "oslobodjenje-beograda-1806"],

    successorId: "knez-aleksandar-karadjordjevic",

    status: "draft",
    order: 1,
  },
  {
    id: "knez-aleksandar-karadjordjevic",
    dynastyId: "karadjordjevici",

    name: "Кнез Александар Карађорђевић",
    slug: "knez-aleksandar-karadjordjevic",
    title: "кнез",

    description:
      "Син Карађорђа Петровића и кнез Србије у периоду уставобранитеља, током чије владавине су ојачане државне институције, просвјета, закони и привредни развој земље.",

    reigns: [
      {
        start: { year: 1842, precision: "year" },
        end: { year: 1858, precision: "year" },
        title: "кнез",
        note: "Владавина као српски кнез у доба уставобранитеља до Светоандрејске скупштине 1858. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1842, precision: "year" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/rulers/knez-aleksandar-karadjordjevic.webp",

    achievementsIds: [
      "gradjanski-zakonik-i-pravne-reforme-1844",
      "osnivanje-prvih-fabrika-i-nacertanije",
    ],

    eventIds: [],

    predecessorId: "karadjordje-petrovic",
    successorId: "kralj-petar-i",

    status: "draft",
    order: 2,
  },
  {
    id: "kralj-petar-i",
    dynastyId: "karadjordjevici",

    name: "Краљ Петар I Карађорђевић",
    slug: "kralj-petar-i",
    title: "краљ",

    description:
      "Уставни краљ Србије и потом први краљ Срба, Хрвата и Словенаца, упамћен као симбол парламентаризма, слободарства и пожртвовања у балканским ратовима и Првом свјетском рату.",

    reigns: [
      {
        start: { year: 1903, precision: "year" },
        end: { year: 1918, precision: "year" },
        title: "краљ",
        note: "Краљ Србије од 1903. године до стварања заједничке југословенске државе 1918. године.",
      },
      {
        start: { year: 1918, precision: "year" },
        end: { year: 1921, precision: "year" },
        title: "краљ",
        note: "Први краљ Краљевства Срба, Хрвата и Словенаца до смрти 1921. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1903, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kralj-petar-i.webp",

    achievementsIds: [
      "ustavna-monarhija-i-parlamentarni-zivot-1903",
      "oslobodjenje-stare-srbije-i-makedonije-1912-1913",
      "zaduzbina-crkva-svetog-djordja-na-oplencu",
    ],

    eventIds: [
      "krunisanje-petra-i-1904",
      "proboj-solunskog-fronta-1918",
      "ujedinjenje-1918",
    ],

    predecessorId: "knez-aleksandar-karadjordjevic",
    successorId: "kralj-aleksandar-i",

    status: "draft",
    order: 3,
  },
  {
    id: "kralj-aleksandar-i",
    dynastyId: "karadjordjevici",

    name: "Краљ Александар I Карађорђевић",
    slug: "kralj-aleksandar-i",
    title: "краљ",

    description:
      "Врховни командант српске војске у побједничким ратовима 1912–1918. и краљ Југославије који је објединио јужнословенске земље у заједничку државу и изградио монументалне задужбине.",

    reigns: [
      {
        start: { year: 1921, precision: "year" },
        end: { year: 1934, precision: "year" },
        title: "краљ",
        note: "Краљ Краљевства Срба, Хрвата и Словенаца, а од 1929. године краљ Краљевине Југославије до атентата у Марсељу 1934. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1921, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kralj-aleksandar-karadjordjevic.webp",

    achievementsIds: [
      "stvaranje-i-konsolidacija-jugoslovenske-drzave",
      "pobjeda-na-solunskom-frontu-kao-regent-i-komandant",
      "kraljevski-dvor-na-dedinju-i-oplenacki-mozaici",
    ],

    eventIds: ["proboj-solunskog-fronta-1918", "ujedinjenje-1918"],

    predecessorId: "kralj-petar-i",
    successorId: "kralj-petar-ii",

    status: "draft",
    order: 4,
  },
  {
    id: "kralj-petar-ii",
    dynastyId: "karadjordjevici",

    name: "Краљ Петар II Карађорђевић",
    slug: "kralj-petar-ii",
    title: "краљ",

    description:
      "Посљедњи краљ из династије Карађорђевић који је на престо дошао уочи Другог свјетског рата и проводио ратне и поратне године у изгнанству након проглашења републике 1945. године.",

    reigns: [
      {
        start: { year: 1934, precision: "year" },
        end: { year: 1945, precision: "year" },
        title: "краљ",
        note: "Формално краљ од 1934. (прво под намесништвом, а од марта 1941. самостално) до укидања монархије 1945. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1934, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kralj-petar-ii.webp",

    achievementsIds: ["simbol-drzavnog-kontinuiteta-u-drugom-svjetskom-ratu"],

    eventIds: [],

    predecessorId: "kralj-aleksandar-i",

    status: "draft",
    order: 5,
  },
  {
    id: "knez-milos",
    dynastyId: "obrenovici",

    name: "Кнез Милош Обреновић",
    slug: "knez-milos",
    title: "кнез",

    description:
      "Вођа Другог српског устанка и родоначелник династије Обреновић, који је комбинацијом оружане борбе и вјеште дипломатије изборио аутономију Кнежевине Србије и насљедно кнежевско достојанство.",

    reigns: [
      {
        start: { year: 1815, precision: "year" },
        end: { year: 1839, precision: "year" },
        title: "кнез",
        note: "Прва владавина обиљежена стицањем аутономије (1830), Сретењским уставом (1835) и укидањем феудализма.",
      },
      {
        start: { year: 1858, precision: "year" },
        end: { year: 1860, precision: "year" },
        title: "кнез",
        note: "Друга владавина након Светоандрејске скупштине и повратка Обреновића на пријесто.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1817, precision: "year" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/rulers/knez-milos.webp",

    achievementsIds: [
      "podizanje-drugog-srpskog-ustanka",
      "sticanje-autonomije-hatiserifom-1830",
      "ukidanje-feudalizma-i-sretenjski-ustav",
      "konak-kneza-milosa-i-sabornа-crkva",
    ],

    eventIds: [
      "drugi-srpski-ustanak-1815",
      "hatiserif-i-autonomija-1830",
      "sretenjski-ustav-1835",
    ],

    successorId: "knez-milan-obrenovic",

    status: "draft",
    order: 1,
  },
  {
    id: "knez-milan-obrenovic",
    dynastyId: "obrenovici",

    name: "Кнез Милан Обреновић (Милан II)",
    slug: "knez-milan-obrenovic",
    title: "кнез",

    description:
      "Најстарији син кнеза Милоша који је наслиједио пријесто након очеве абдикације 1839. године, али је због тешке болести владао свега двадесет шест дана.",

    reigns: [
      {
        start: { year: 1839, precision: "year" },
        end: { year: 1839, precision: "year" },
        title: "кнез",
        note: "Најкраћа владавина у нововјековној историји Србије (јун–јул 1839. године).",
      },
    ],
    titleHistory: [
      {
        start: { year: 1839, precision: "year" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images//achievements/knez-milan-ii-portret.webp",

    achievementsIds: ["ocuvanje-nasljednog-knezevskog-prava-1839"],

    eventIds: [],

    predecessorId: "knez-milos",
    successorId: "knez-mihailo",

    status: "draft",
    order: 2,
  },
  {
    id: "knez-mihailo",
    dynastyId: "obrenovici",

    name: "Кнез Михаило Обреновић",
    slug: "knez-mihailo",
    title: "кнез",

    description:
      "Један од најпросвећенијих српских владара XIX вијека, творац Балканског савеза и државник који је мирним путем изборио повлачење османских гарнизона из српских градова 1867. године.",

    reigns: [
      {
        start: { year: 1839, precision: "year" },
        end: { year: 1842, precision: "year" },
        title: "кнез",
        note: "Прва владавина након смрти брата Милана до доласка уставобранитеља 1842. године.",
      },
      {
        start: { year: 1860, precision: "year" },
        end: { year: 1868, precision: "year" },
        title: "кнез",
        note: "Друга владавина обиљежена модернизацијом државе, војним реформама и преузимањем градова 1867. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1839, precision: "year" },
        title: "кнез",
      },
    ],

    portrait: "/assets/images/rulers/knez-mihailo.webp",

    achievementsIds: [
      "oslobodjenje-gradova-od-osmanskih-posada-1867",
      "osnivanje-narodne-vojske-i-drzavne-reforme",
      "balkanski-savez-i-kulturni-procvat-beograda",
    ],

    eventIds: ["predaja-gradova-1867"],

    predecessorId: "knez-milan-obrenovic",
    successorId: "kralj-milan",

    status: "draft",
    order: 3,
  },
  {
    id: "kralj-milan",
    dynastyId: "obrenovici",

    name: "Кнез и краљ Милан Обреновић",
    slug: "kralj-milan",
    title: "краљ",

    description:
      "Владар за чије владавине је Србија послије ослободилачких ратова добила међународно признање независности на Берлинском конгресу (1878) и била проглашена за краљевину (1882).",

    reigns: [
      {
        start: { year: 1868, precision: "year" },
        end: { year: 1882, precision: "year" },
        title: "кнез",
        note: "Владавина као кнез Србије (до 1872. под намјесништвом), крунисана међународним признањем независности 1878. године.",
      },
      {
        start: { year: 1882, precision: "year" },
        end: { year: 1889, precision: "year" },
        title: "краљ",
        note: "Први нововјековни краљ Србије од 1882. до абдикације 1889. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1868, precision: "year" },
        title: "кнез",
      },
      {
        start: { year: 1882, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kralj-milan.webp",

    achievementsIds: [
      "medjunarodno-priznanje-nezavisnosti-srbije-1878",
      "uzdizanje-srbije-u-kraljevinu-1882",
      "izgradnja-prve-zeljeznice-i-stajace-vojske",
      "namesnicki-ustav-1869-i-radikalski-ustav-1888",
    ],

    eventIds: ["berlinski-kongres-1878", "proglasenje-kraljevine-1882"],

    predecessorId: "knez-mihailo",
    successorId: "kralj-aleksandar-obrenovic",

    status: "draft",
    order: 4,
  },
  {
    id: "kralj-aleksandar-obrenovic",
    dynastyId: "obrenovici",

    name: "Краљ Александар Обреновић",
    slug: "kralj-aleksandar-obrenovic",
    title: "краљ",

    description:
      "Посљедњи владар из династије Обреновић, чију су владавину обиљежили чести уставни преокрети, политичке кризе и Мајски преврат 1903. године којим је угашена династија.",

    reigns: [
      {
        start: { year: 1889, precision: "year" },
        end: { year: 1903, precision: "year" },
        title: "краљ",
        note: "Краљ Србије (до 1893. под намјесништвом) до Мајског преврата 1903. године.",
      },
    ],
    titleHistory: [
      {
        start: { year: 1889, precision: "year" },
        title: "краљ",
      },
    ],

    portrait: "/assets/images/rulers/kralj-aleksandar-obrenovic.webp",

    achievementsIds: [
      "aprilski-ustav-i-dvodomni-sistem-1901",
      "podrska-hilandaru-i-kulturnim-ustanovama",
    ],

    eventIds: ["majski-prevrat-1903"],

    predecessorId: "kralj-milan",

    status: "draft",
    order: 5,
  },
];
