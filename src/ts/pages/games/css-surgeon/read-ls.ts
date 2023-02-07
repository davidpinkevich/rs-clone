import currentLevel from "./current-level";
import surgeonStore from "./data/surgeon-store";
import ls from "./ls";

const readLs = () => {
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__item");

  const data = ls.getAll();

  const levels = Object.keys(data).map((level) => +level);

  itemsEl.forEach((itemEl, i) => {
    levels.forEach((level) => {
      if (i === level) {
        itemEl.classList.remove("surgeon__item_hide");
      }
    });
  });

  surgeonStore.currentLevel = Math.min(...levels);

  currentLevel();
};

export default readLs;
