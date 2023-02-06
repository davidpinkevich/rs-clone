import surgeonStore from "./data/surgeon-store";

const showItem = () => {
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__item");

  const { currentLevel } = surgeonStore;

  itemsEl[currentLevel - 1].classList.remove("surgeon__item_hide");
};

export default showItem;
