import showdownStore from "../data/showdown-store";
import resetBeforeLevel from "../level/reset-before-level";
import showLevel from "../level/show-level";

const incorrectHandler = (): void => {
  const incorrectBtn = <HTMLElement>(
    document.querySelector(".showdown__btn_incorrect")
  );

  incorrectBtn.addEventListener("click", (): void => {
    resetBeforeLevel();
    const { currentLevel } = showdownStore;
    if (currentLevel === 1) {
      showLevel();
    } else {
      showdownStore.currentLevel -= 1;
      showLevel();
    }
  });
};

export default incorrectHandler;
