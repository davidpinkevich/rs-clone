import { TLangGrid } from "../types/types";

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
  BTN_ENG: ["English", "Sound", "Level:", "Next"],
  BTN_RU: ["Русский", "Звук", "Уровень:", "Следующий"],
};

export { PageIds, LEVELS_GARDEN, LANG_GRID };
