import select from "../handlers/select";

const selectLevel = () => {
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__item");
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__hole");

  holesEl.forEach((holeEl) => {
    holeEl.addEventListener("click", () => {
      select(holeEl);
    });
  });

  itemsEl.forEach((itemEl) => {
    itemEl.addEventListener("click", () => {
      select(itemEl);
    });
  });
};

export default selectLevel;
