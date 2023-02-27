import froggyData from "./froggy-data";
import gardenData from "./garden-data";
import nthData from "./nth-data";
import scoopsData from "./scoops-data";
import showdownData from "./showdown-data";
import surgeonData from "./surgeon-data";

const completedLevels = (): void => {
  scoopsData();
  surgeonData();
  froggyData();
  gardenData();
  nthData();
  showdownData();
};

export default completedLevels;
