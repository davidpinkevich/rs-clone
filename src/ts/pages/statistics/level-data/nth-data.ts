import { ETotalLevels } from "../../../types/types";
import LocalStorage from "../../../utils/LocalStorage";
import resolveProcentCompleted from "./resolve-procent-completed";

const nthData = (): void => {
  const currEl = <HTMLElement>(
    document.querySelector(".statistics__achievement_5")
  );
  const currentLevelEl = <HTMLElement>(
    currEl.querySelector(".statistics__current")
  );
  const barEl = <HTMLElement>currEl.querySelector(".statistics__bar");

  const nthLs = new LocalStorage("nth");
  const data = nthLs.getAll();
  if (!data.completedLevels) {
    currentLevelEl.textContent = "0";
    barEl.style.width = "0%";
    return;
  }
  const countCompletedLevels = JSON.parse(data.completedLevels).length;

  const totalLevels: number = ETotalLevels.Froggy;

  if (countCompletedLevels) {
    const procentCompleted = resolveProcentCompleted(
      countCompletedLevels,
      totalLevels
    );
    currentLevelEl.textContent = `${countCompletedLevels}`;
    barEl.style.width = `${procentCompleted}%`;
  }
};

export default nthData;
