import currentLevel from "../level/current-level";
import surgeonStore from "../data/surgeon-store";
import ls from "./ls";

const readLs = (): void => {
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__item");
  const levelsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__level");

  const data = ls.getAll();

  const levels = Object.keys(data).map((level) => +level);

  itemsEl.forEach((itemEl, i): void => {
    levels.forEach((level) => {
      if (i === level) {
        itemEl.classList.remove("surgeon__item_hide");
        levelsEl[i].classList.add("surgeon__level_solved");
      }
    });
  });

  surgeonStore.currentLevel = Math.min(...levels);

  currentLevel();
};

export default readLs;
