import checkRange from "../level/check-range";
import showdownStore from "../data/showdown-store";
import resetBeforeLevel from "../level/reset-before-level";
import showLevel from "../level/show-level";

const prevHandler = (): void => {
  const prevBtn = <HTMLButtonElement>document.querySelector(".btn__prev");

  prevBtn.addEventListener("click", (): void => {
    resetBeforeLevel();
    showdownStore.currentLevel -= 1;
    checkRange();
    showLevel();
  });
};

export default prevHandler;
