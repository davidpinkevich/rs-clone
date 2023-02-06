export interface IFroggyLevel {
  instructions: TInstructions;
  beforeText: string;
  stringsCount: number;
  items: string[];
  styles: TStyles;
  stylesForInit?: string[];
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

type TInstructions = { [key: string]: string };
type TStyles = { [key: string]: string };
export type TLocalStorageObj = { [key: string]: string };
