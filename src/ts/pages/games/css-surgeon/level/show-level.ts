import surgeonStore from "../data/surgeon-store";
import disableElement from "../utils/disabled-element";

const showLevel = (): void => {
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__holes");
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__items");
  const viewEl = <HTMLElement>document.querySelector(".surgeon__view");
  const samEl = <HTMLElement>document.querySelector(".surgeon__sam");
  const bodyEl = <HTMLElement>document.querySelector(".surgeon__body");

  if (holesEl.length === 0) return;

  const { currentLevel } = surgeonStore;
  const { origin } = surgeonStore.levels[currentLevel - 1];

  holesEl[currentLevel - 1].classList.remove("surgeon__holes_hide");
  itemsEl[currentLevel - 1].classList.remove("surgeon__items_hide");
  samEl.style.transformOrigin = origin;
  samEl.style.transform = "scale(7)";
  viewEl.style.background = "#ffd4ce";
  disableElement(".surgeon__code", false);
  setTimeout((): void => {
    bodyEl.style.opacity = "0";
    itemsEl[currentLevel - 1].style.opacity = "1";
    holesEl[currentLevel - 1].style.opacity = "1";
    disableElement(".surgeon__level", false);
    disableElement(".surgeon__see", false);
  }, 2000);
};

export default showLevel;
