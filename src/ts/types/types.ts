export interface IFroggyLevel {
  id: number,
  instructions: TInstructions,
  beforeText: string,
  afterText: string,
  stringsCount: number,
}

type TInstructions = { [key: string]: string }
