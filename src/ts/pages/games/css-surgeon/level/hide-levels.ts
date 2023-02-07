import surgeonStore from "../data/surgeon-store";
import disableElement from "../utils/disabled-element";

const hideLevels = () => {
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__holes");
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__items");
  const viewEl = <HTMLElement>document.querySelector(".surgeon__view");
  const samEl = <HTMLElement>document.querySelector(".surgeon__sam");
  const bodyEl = <HTMLElement>document.querySelector(".surgeon__body");

  for (let i = 0; i < holesEl.length; i += 1) {
    holesEl[i].classList.add("surgeon__holes_hide");
    holesEl[i].style.opacity = "0";
    itemsEl[i].classList.add("surgeon__items_hide");
    itemsEl[i].style.opacity = "0";
  }

  const { currentLevel } = surgeonStore;
  const { origin } = surgeonStore.levels[currentLevel - 1];
  disableElement(".surgeon__code", true);

  viewEl.style.background = "";
  samEl.style.transformOrigin = origin;
  bodyEl.style.opacity = "1";
  samEl.style.transform = "scale(1)";
  disableElement(".surgeon__level", false);
};

export default hideLevels;
