import showdownStore from "../data/showdown-store";
import disableElement from "../utils/disabled-element";

const checkRange = (): void => {
  const lockedLevelsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".btn__level_locked");
  const { currentLevel, levels } = showdownStore;

  disableElement(".btn__prev", false);
  disableElement(".btn__next", false);

  if (currentLevel >= levels.length) {
    disableElement(".btn__next", true);
  }

  if (currentLevel === 1) {
    disableElement(".btn__prev", true);
  }

  const lockedLevels: number[] = [];

  lockedLevelsEl.forEach((levelLocked): void => {
    const lvl = Number(levelLocked.getAttribute("data-level"));
    lockedLevels.push(lvl);
  });

  const minLockedLevel = Math.min(...lockedLevels);

  if (minLockedLevel - 1 === currentLevel) {
    disableElement(".btn__next", true);
  }
};

export default checkRange;
