import surgeonStore from "../data/surgeon-store";
import hideLevels from "../level/hide-levels";
import showLevel from "../level/show-level";
import disableElement from "../utils/disabled-element";

const loupe = (): void => {
  const { currentLevel } = surgeonStore;
  const itemEl = <HTMLElement>(
    document.querySelector(`.surgeon__items_${currentLevel - 1}`)
  );

  if (itemEl.classList.contains("surgeon__items_hide")) {
    disableElement(".surgeon__level", true);
    disableElement(".surgeon__see", true);
    showLevel();
    return;
  }

  hideLevels();
  disableElement(".surgeon__level", true);
  disableElement(".surgeon__see", true);
  setTimeout(() => {
    disableElement(".surgeon__level", false);
    disableElement(".surgeon__see", false);
    disableElement(".surgeon__code", false);
  }, 3000);
};

export default loupe;
