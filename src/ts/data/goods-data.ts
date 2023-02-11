import {
  TLangGrid,
  TGridLocalStore,
  TScoopsLinks,
  TColorsScoops,
} from "../types/types";

const enum PageIds {
  MainPage = "#",
  SurgeonPage = "#surgeon",
  FroggyPage = "#froggy",
  GardenPage = "#garden",
  ScoopsPage = "#scoops",
  NthPage = "#nth",
  Showdown = "#showdown",
  Statistics = "#statistics",
}

const LEVELS_GARDEN = {
  START: 1,
  END: 14,
};

const LANG_GRID: TLangGrid = {
  BTN_ENG: ["English", "Level:", "Next"],
  BTN_RU: ["Русский", "Уровень:", "Следующий"],
};

const GRID_LS: TGridLocalStore = {
  LS_LEVELS: "gridGarden",
  LS_WINS: "gridGardenWins",
  NUMBER_LEVEL: "numberLevel",
  NUMBER_WINS: "numberWins",
  LANG: "lang",
  LANG_ENG: "en",
  LANG_RU: "ru",
};

const LINKS_SCOOPS: TScoopsLinks = {
  CUP: "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/cup.svg",
  CUP_MASK:
    "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/cup-mask.svg",
  CONE: "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/cone.svg",
  CONE_MASK:
    "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/cone-mask.svg",
  CONE_CHOCOLATE:
    "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/cone-chocolate.svg",
  CHOCO_MASK:
    "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/cone-chocolate-mask.svg",
  CHAIR:
    "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/stool.svg",
};

const COLORS_SCOOPS: TColorsScoops = {
  PINK: "rgb(245,92,150)",
};

export {
  PageIds,
  LEVELS_GARDEN,
  LANG_GRID,
  GRID_LS,
  LINKS_SCOOPS,
  COLORS_SCOOPS,
};
