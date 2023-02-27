import { ETotalLevels } from "../../../types/types";
import LocalStorage from "../../../utils/LocalStorage";
import resolveProcentCompleted from "./resolve-procent-completed";

const showdownData = (): void => {
  const currEl = <HTMLElement>(
    document.querySelector(".statistics__achievement_6")
  );
  const currentLevelEl = <HTMLElement>(
    currEl.querySelector(".statistics__current")
  );
  const barEl = <HTMLElement>currEl.querySelector(".statistics__bar");

  const showdownLs = new LocalStorage("showdown");
  const data = showdownLs.getAll();
  if (!data.completed) {
    currentLevelEl.textContent = "0";
    barEl.style.width = "0%";
    return;
  }
  const countCompletedLevels = +data.completed;

  const totalLevels: number = ETotalLevels.Showdown;

  if (countCompletedLevels) {
    const procentCompleted = resolveProcentCompleted(
      countCompletedLevels,
      totalLevels
    );
    currentLevelEl.textContent = `${countCompletedLevels}`;
    barEl.style.width = `${procentCompleted}%`;
  }
};

export default showdownData;
