import { ETotalLevels } from "../../../types/types";
import LocalStorage from "../../../utils/LocalStorage";
import resolveProcentCompleted from "./resolve-procent-completed";

const surgeonData = (): void => {
  const currEl = <HTMLElement>(
    document.querySelector(".statistics__achievement_2")
  );
  const currentLevelEl = <HTMLElement>(
    currEl.querySelector(".statistics__current")
  );
  const barEl = <HTMLElement>currEl.querySelector(".statistics__bar");

  const surgeonLs = new LocalStorage("surgeon");
  const data = surgeonLs.getAll();
  const countCompletedLevels = Object.keys(data).length;

  const totalLevels: number = ETotalLevels.SurgeonOrGarden;

  if (countCompletedLevels) {
    const procentCompleted = resolveProcentCompleted(
      countCompletedLevels,
      totalLevels
    );
    currentLevelEl.textContent = `${countCompletedLevels}`;
    barEl.style.width = `${procentCompleted}%`;
  } else {
    currentLevelEl.textContent = "0";
    barEl.style.width = "0%";
  }
};

export default surgeonData;
