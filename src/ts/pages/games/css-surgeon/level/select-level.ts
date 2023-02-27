import select from "../handlers/select";

const selectLevel = (): void => {
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__item");
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__hole");

  holesEl.forEach((holeEl): void => {
    holeEl.addEventListener("click", () => {
      select(holeEl);
    });
  });

  itemsEl.forEach((itemEl): void => {
    itemEl.addEventListener("click", () => {
      select(itemEl);
    });
  });
};

export default selectLevel;
