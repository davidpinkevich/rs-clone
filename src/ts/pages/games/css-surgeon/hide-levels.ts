const hideLevels = () => {
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__holes");
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__items");

  holesEl.forEach((holeEl) => {
    holeEl.classList.add("surgeon__holes_hide");
  });

  itemsEl.forEach((itemEl) => {
    itemEl.classList.add("surgeon__items_hide");
  });
};

export default hideLevels;
