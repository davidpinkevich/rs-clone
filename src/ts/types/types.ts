export interface IFroggyLevel {
  id: number,
  instructions: TInstructions,
  beforeText: string,
  afterText: string,
  stringsCount: number,
  items: string[],
  styles: TStyles,
  stylesForInit?: string[]
}

type TInstructions = { [key: string]: string }
type TStyles = { [key: string]: string }
export type TStyleKey = "justifyContent" | "alignItems" | "flexDirection" | "order" | "alignSelf" | "flexWrap" | "flexFlow" | "alignContent";
