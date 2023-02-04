import surgeonStore from "./data/surgeon-store";

const hideLevels = () => {
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__holes");
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__items");
  const viewEl = <HTMLElement>document.querySelector(".surgeon__view");
  const samEl = <HTMLElement>document.querySelector(".surgeon__sam");
  const bodyEl = <HTMLElement>document.querySelector(".surgeon__body");

  holesEl.forEach((holeEl) => {
    holeEl.classList.add("surgeon__holes_hide");
  });

  itemsEl.forEach((itemEl) => {
    itemEl.classList.add("surgeon__items_hide");
  });

  const { currentLevel } = surgeonStore;
  const { origin } = surgeonStore.levels[currentLevel - 1];

  viewEl.style.background = "";
  samEl.style.transformOrigin = origin;
  bodyEl.style.opacity = "1";
  samEl.style.transform = "scale(1)";
};

export default hideLevels;
