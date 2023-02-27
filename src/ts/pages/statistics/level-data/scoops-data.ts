import { ETotalLevels } from "../../../types/types";
import LocalStorage from "../../../utils/LocalStorage";
import resolveProcentCompleted from "./resolve-procent-completed";

const scoopsData = (): void => {
  const currEl = <HTMLElement>(
    document.querySelector(".statistics__achievement_1")
  );
  const currentLevelEl = <HTMLElement>(
    currEl.querySelector(".statistics__current")
  );
  const barEl = <HTMLElement>currEl.querySelector(".statistics__bar");

  const scoopsLs = new LocalStorage("cssScoops");
  const data = scoopsLs.getAll();
  if (!data.numberWins || JSON.parse(data.numberWins).length === 0) {
    currentLevelEl.textContent = "0";
    barEl.style.width = "0%";
    return;
  }
  const countCompletedLevels = JSON.parse(data.numberWins).length;

  const totalLevels: number = ETotalLevels.Scoops;

  if (countCompletedLevels) {
    const procentCompleted = resolveProcentCompleted(
      countCompletedLevels,
      totalLevels
    );
    currentLevelEl.textContent = `${countCompletedLevels}`;
    barEl.style.width = `${procentCompleted}%`;
  }
};

export default scoopsData;
