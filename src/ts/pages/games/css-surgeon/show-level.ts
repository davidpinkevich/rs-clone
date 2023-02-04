import surgeonStore from "./data/surgeon-store";

const showLevel = () => {
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__holes");
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__items");
  const viewEl = <HTMLElement>document.querySelector(".surgeon__view");
  const samEl = <HTMLElement>document.querySelector(".surgeon__sam");
  const bodyEl = <HTMLElement>document.querySelector(".surgeon__body");

  const { currentLevel } = surgeonStore;
  const { origin } = surgeonStore.levels[currentLevel - 1];

  samEl.style.transformOrigin = origin;
  samEl.style.transform = "scale(7)";
  viewEl.style.background = "#ffd4ce";
  setTimeout(() => {
    bodyEl.style.opacity = "0";
    holesEl[currentLevel - 1].classList.remove("surgeon__holes_hide");
    itemsEl[currentLevel - 1].classList.remove("surgeon__items_hide");
  }, 2000);
};

export default showLevel;
