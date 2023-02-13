export interface IFroggyLevel {
  instructions: TInstructions;
  beforeText: string;
  stringsCount: number;
  items: string[];
  styles: TStyles;
  wrapForInit?: boolean;
  order?: string;
}

export type TRulesGarden = {
  FIELD: number;
  RULES_ENG: string[];
  RULES_RU: string[];
  TEXT__GARDEN: string[];
  TEXT__WATER: string[];
  CARROT_RULES: string[];
  WATER_RULES: string[];
};

export type TLangGrid = {
  BTN_ENG: string[];
  BTN_RU: string[];
};

export type TGridLocalStore = {
  LS_LEVELS: string;
  LS_WINS: string;
  NUMBER_LEVEL: string;
  NUMBER_WINS: string;
  LANG: string;
  LANG_ENG: string;
  LANG_RU: string;
};

type TInstructions = { [key: string]: string };
type TStyles = { [key: string]: string };
export type TLocalStorageObj = { [key: string]: string };

type TLevelSurgeon = {
  level: number;
  selector: string;
  descr1: string;
  descr2: string;
  origin: string;
};

export type TSurgeonStore = {
  levels: TLevelSurgeon[];
  currentLevel: number;
};

export type TSelectorShowdown = {
  selector: string;
  score: string;
};

export type TLevelShowdown = {
  level: number;
  descr: string;
  info: TSelectorShowdown[];
};

export type TShowdownStore = {
  levels: TLevelShowdown[];
  currentLevel: number;
  volume: number;
};
