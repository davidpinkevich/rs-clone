import showdownStore from "../data/showdown-store";
import modal from "../modal/modal";
import resetBeforeLevel from "../level/reset-before-level";
import showLevel from "../level/show-level";

const correctHandler = (): void => {
  const correctBtn = <HTMLElement>(
    document.querySelector(".showdown__btn_correct")
  );

  correctBtn.addEventListener("click", (): void => {
    const lockedLevelsEl: NodeListOf<HTMLElement> =
      document.querySelectorAll(".btn__level_locked");
    const winAudio = <HTMLAudioElement>document.querySelector(".audio__win");
    const { currentLevel, levels } = showdownStore;
    if (currentLevel >= levels.length) {
      winAudio.play();
      modal();
      return;
    }
    resetBeforeLevel();
    if (lockedLevelsEl.length > 0) {
      lockedLevelsEl[0].classList.remove("btn__level_locked");
    }
    showdownStore.currentLevel += 1;
    showLevel();
  });
};

export default correctHandler;
