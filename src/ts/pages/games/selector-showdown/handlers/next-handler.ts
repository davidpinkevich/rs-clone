import checkRange from "../level/check-range";
import showdownStore from "../data/showdown-store";
import resetBeforeLevel from "../level/reset-before-level";
import showLevel from "../level/show-level";

const nextHandler = (): void => {
  const nextBtn = <HTMLButtonElement>document.querySelector(".btn__next");

  nextBtn.addEventListener("click", (): void => {
    resetBeforeLevel();
    showdownStore.currentLevel += 1;
    checkRange();
    showLevel();
  });
};

export default nextHandler;
