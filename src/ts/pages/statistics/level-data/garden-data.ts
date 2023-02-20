import { ETotalLevels } from "../../../types/types";
import LocalStorage from "../../../utils/LocalStorage";
import resolveProcentCompleted from "./resolve-procent-completed";

const gardenData = (): void => {
  const currEl = <HTMLElement>(
    document.querySelector(".statistics__achievement_4")
  );
  const currentLevelEl = <HTMLElement>(
    currEl.querySelector(".statistics__current")
  );
  const barEl = <HTMLElement>currEl.querySelector(".statistics__bar");

  const gardenLs = new LocalStorage("gridGardenWins");
  const data = gardenLs.getAll();
  if (!data.numberWins) {
    currentLevelEl.textContent = "0";
    barEl.style.width = "0%";
    return;
  }
  const countCompletedLevels = JSON.parse(data.numberWins).filter(
    (level: boolean) => level === true
  ).length;

  const totalLevels: number = ETotalLevels.SurgeonOrGarden;

  if (countCompletedLevels) {
    const procentCompleted = resolveProcentCompleted(
      countCompletedLevels,
      totalLevels
    );
    currentLevelEl.textContent = `${countCompletedLevels}`;
    barEl.style.width = `${procentCompleted}%`;
  }
};

export default gardenData;
