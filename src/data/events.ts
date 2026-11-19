import type { HistoricalEvent } from "../types";

export const events: HistoricalEvent[] = [
  {
    id: "zicki-sabor-1196",
    dynastyId: "nemanjici",
    rulerIds: ["stefan-nemanja", "stefan-prvovencani"],
    title: "Државни сабор и предаја власти (1196)",
    description:
      "Стефан Немања одрекао се престола у корист сина Стефана Првовенчаног, а затим се замонашио и узео монашко име Симеон.",
    date: {
      year: 1196,
      precision: "year",
    },
    category: "political",
    status: "draft",
    order: 1,
  },
  {
    id: "krunisanje-1217",
    dynastyId: "nemanjici",
    rulerIds: ["stefan-prvovencani"],
    title: "Крунисање Стефана Првовенчаног",
    description:
      "Стефан Првовенчани крунисан је за краља 1217. године, чиме је Србија међународно потврђена као краљевина.",
    date: {
      year: 1217,
      precision: "year",
    },
    category: "coronation",
    status: "draft",
    order: 2,
  },
  {
    id: "autokefalnost-crkve-1219",
    dynastyId: "nemanjici",
    rulerIds: ["stefan-prvovencani"],
    title: "Стицање аутокефалности Српске цркве (1219)",
    description:
      "Сава Немањић изборио је самосталност Српске архиепископије, чиме су постављени темељи државне и духовне самобитности.",
    date: {
      year: 1219,
      precision: "year",
    },
    category: "political",
    status: "draft",
    order: 3,
  },
  {
    id: "sabor-u-dezevu-1282",
    dynastyId: "nemanjici",
    rulerIds: ["dragutin", "milutin"],
    title: "Сабор у Дежеву (1282)",
    description:
      "Краљ Драгутин предао је српски престо млађем брату Милутину, задржавши сјеверне области и добивши обећање о насљеђивању престола.",
    date: {
      year: 1282,
      precision: "year",
    },
    category: "political",
    status: "draft",
    order: 4,
  },
  {
    id: "bitka-kod-velbuzda-1330",
    dynastyId: "nemanjici",
    rulerIds: ["stefan-decanski", "stefan-dusan"],
    title: "Битка код Велбужда (1330)",
    description:
      "Српска војска под вођством краља Стефана Дечанског и младог краља Душана поразила је бугарску војску и обезбиједила превласт у Македонији.",
    date: {
      year: 1330,
      precision: "year",
    },
    category: "battle",
    status: "draft",
    order: 5,
  },
  {
    id: "proglasenje-carstva-1346",
    dynastyId: "nemanjici",
    rulerIds: ["stefan-dusan"],
    title: "Проглашење Српског царства",
    description:
      "Стефан Душан проглашен је и крунисан за цара у Скопљу 1346. године, након уздизања Српске цркве на ниво патријаршије.",
    date: {
      year: 1346,
      precision: "year",
    },
    category: "coronation",
    status: "draft",
    order: 6,
  },
  {
    id: "maricka-bitka-1371",
    dynastyId: "nemanjici",
    rulerIds: ["uros-v"],
    title: "Маричка битка и крај царства (1371)",
    description:
      "Након погибије браће Мрњавчевића на Марици и смрти цара Уроша V исте године, угасила се главна грана Немањића и започело доба обласних господара.",
    date: {
      year: 1371,
      precision: "year",
    },
    category: "battle",
    status: "draft",
    order: 7,
  },
];
