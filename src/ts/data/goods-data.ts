import { TLangGrid, TGridLocalStore } from "../types/types";

const enum PageIds {
  MainPage = "#",
  SurgeonPage = "#surgeon",
  FroggyPage = "#froggy",
  GardenPage = "#garden",
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

export { PageIds, LEVELS_GARDEN, LANG_GRID, GRID_LS };
