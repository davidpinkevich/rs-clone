import Coordinates from "../../../utils/Coordinates";
import surgeonStore from "./data/surgeon-store";
import ls from "./ls";

const codeHandler = () => {
  const codeEl = <HTMLElement>document.querySelector(".surgeon__code");

  codeEl.addEventListener("input", (e) => {
    const holesEl: NodeListOf<HTMLElement> =
      document.querySelectorAll(".surgeon__holes");
    const itemsEl: NodeListOf<HTMLElement> =
      document.querySelectorAll(".surgeon__items");
    const nextBtn = <HTMLButtonElement>document.querySelector(".button__next");
    const { currentLevel } = surgeonStore;
    const target = e.target as HTMLTextAreaElement;

    itemsEl[currentLevel - 1].setAttribute(
      "style",
      `opacity: 1; ${target.value}`
    );

    const coord = new Coordinates(
      itemsEl[currentLevel - 1],
      holesEl[currentLevel - 1]
    );

    if (coord.comparisonСoordinates()) {
      nextBtn.disabled = false;
      ls.set(`${currentLevel - 1}`, target.value);
    } else {
      nextBtn.disabled = true;
    }
  });

  // codeEl.addEventListener("paste", (e) => {
  //   e.preventDefault();
  // });
};

export default codeHandler;
