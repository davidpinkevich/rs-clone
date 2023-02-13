import showdownStore from "../data/showdown-store";
import resetBeforeLevel from "../level/reset-before-level";
import showLevel from "../level/show-level";

const levelHandler = (): void => {
  const levelsBtn: NodeListOf<HTMLElement> =
    document.querySelectorAll(".btn__level");

  levelsBtn.forEach((levelBtn): void => {
    levelBtn.addEventListener("click", (e): void => {
      const target = e.target as HTMLElement;
      resetBeforeLevel();
      const curr = Number(target.getAttribute("data-level"));
      showdownStore.currentLevel = curr;
      showLevel();
    });
  });
};

export default levelHandler;
