import showdownStore from "../data/showdown-store";
import lsShowdown from "../ls/ls-showdown";

const topHandler = (): void => {
  const topBtn = <HTMLElement>document.querySelector(".showdown__top");

  topBtn.addEventListener("click", (): void => {
    const topEl = <HTMLElement>document.querySelector(".showdown__top");
    const bottomEl = <HTMLElement>document.querySelector(".showdown__bottom");
    const correctBtn = <HTMLElement>(
      document.querySelector(".showdown__btn_correct")
    );
    const incorrectBtn = <HTMLElement>(
      document.querySelector(".showdown__btn_incorrect")
    );
    const specificityTopEl = <HTMLElement>(
      document.querySelector(".showdown__specificity_top")
    );
    const specificityBottomEl = <HTMLElement>(
      document.querySelector(".showdown__specificity_bottom")
    );
    const correctAudio = <HTMLAudioElement>(
      document.querySelector(".audio__correct")
    );
    const incorrectAudio = <HTMLAudioElement>(
      document.querySelector(".audio__incorrect")
    );

    const topScore = Number(topEl.getAttribute("data-score"));
    const bottomScore = Number(bottomEl.getAttribute("data-score"));

    const { currentLevel } = showdownStore;

    if (topScore > bottomScore) {
      correctBtn.style.opacity = "1";
      correctAudio.play();
      lsShowdown.set("completed", `${currentLevel}`);
    } else if (topScore < bottomScore) {
      incorrectAudio.play();
      incorrectBtn.style.opacity = "1";
    } else {
      incorrectAudio.play();
      incorrectBtn.style.opacity = "1";
    }

    topEl.style.pointerEvents = "none";
    bottomEl.style.pointerEvents = "none";

    specificityTopEl.style.opacity = "1";
    specificityBottomEl.style.opacity = "1";
  });
};

export default topHandler;
