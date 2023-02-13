import showdownStore from "../data/showdown-store";
import lsShowdown from "../ls/ls-showdown";

const bottomHandler = (): void => {
  const bottomBtn = <HTMLElement>document.querySelector(".showdown__bottom");

  bottomBtn.addEventListener("click", (): void => {
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

    const bottomScore = Number(bottomEl.getAttribute("data-score"));
    const topScore = Number(topEl.getAttribute("data-score"));

    const { currentLevel } = showdownStore;

    if (topScore > bottomScore) {
      incorrectAudio.play();
      incorrectBtn.style.opacity = "1";
    } else if (topScore < bottomScore) {
      correctBtn.style.opacity = "1";
      correctAudio.play();
      lsShowdown.set("completed", `${currentLevel}`);
    } else {
      correctAudio.play();
      correctBtn.style.opacity = "1";
      lsShowdown.set("completed", `${currentLevel}`);
    }

    topEl.style.pointerEvents = "none";
    bottomEl.style.pointerEvents = "none";

    specificityTopEl.style.opacity = "1";
    specificityBottomEl.style.opacity = "1";
  });
};

export default bottomHandler;
