import surgeonStore from "../data/surgeon-store";

const showItem = (): void => {
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__item");
  const levelsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__level");

  const { currentLevel } = surgeonStore;

  itemsEl[currentLevel - 1].classList.remove("surgeon__item_hide");
  levelsEl[currentLevel - 1].classList.add("surgeon__level_solved");
};

export default showItem;
