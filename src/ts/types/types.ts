export interface IFroggyLevel {
  instructions: TInstructions;
  beforeText: string;
  stringsCount: number;
  items: string[];
  styles: TStyles;
  stylesForInit?: string[];
}

type TInstructions = { [key: string]: string };
type TStyles = { [key: string]: string };
