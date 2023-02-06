export interface IFroggyLevel {
  instructions: TInstructions;
  beforeText: string;
  stringsCount: number;
  items: string[];
  styles: TStyles;
  wrapForInit?: boolean;
  order?: string;
}

type TInstructions = { [key: string]: string };
type TStyles = { [key: string]: string };
export type TLocalStorageObj = { [key: string]: string };
