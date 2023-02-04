import surgeonStore from "./data/surgeon-store";

const showLevel = () => {
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__holes");
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__items");
  const bodyEl = <HTMLElement>document.querySelector(".surgeon__sam");
  const viewEl = <HTMLElement>document.querySelector(".surgeon__view");

  const { currentLevel } = surgeonStore;

  holesEl[currentLevel - 1].classList.remove("surgeon__holes_hide");
  itemsEl[currentLevel - 1].classList.remove("surgeon__items_hide");
  viewEl.style.background = "#ffd4ce";
  bodyEl.style.opacity = "0";
};

export default showLevel;
