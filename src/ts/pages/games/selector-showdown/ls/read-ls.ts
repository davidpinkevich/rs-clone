import showdownStore from "../data/showdown-store";
import lsShowdown from "./ls-showdown";

const readLs = (): void => {
  const lockedLevelsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".btn__level_locked");
  const levelsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".btn__level");

  const data = lsShowdown.getAll();

  if (data.completed) {
    const currLevel = +data.completed;
    for (let i = 0; i <= currLevel; i += 1) {
      if (i === showdownStore.levels.length) break;
      levelsEl[i].classList.remove("btn__level_locked");
    }
  } else {
    lockedLevelsEl[0].classList.remove("btn__level_locked");
  }

  if (data.curr) {
    showdownStore.currentLevel = +data.curr;
  } else {
    showdownStore.currentLevel = 1;
  }
};

export default readLs;
