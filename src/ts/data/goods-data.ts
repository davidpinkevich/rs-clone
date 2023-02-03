const enum PageIds {
  MainPage = "#",
  SurgeonPage = "#surgeon",
  FroggyPage = "#froggy",
  GardenPage = "#garden",
}

type TRulesGarden = {
  FIELD: number;
  RULES: string[];
  CODE: string[];
  CARROT_RULES: string[];
  WATER_RULES: string[];
};

export { PageIds, TRulesGarden };
