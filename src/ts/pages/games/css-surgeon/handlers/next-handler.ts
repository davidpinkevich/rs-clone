import createInstruction from "../level/create-instruction";
import currentLevel from "../level/current-level";
import hideLevels from "../level/hide-levels";
import showItem from "../level/show-item";
import showLevel from "../level/show-level";
import disableElement from "../utils/disabled-element";

const nextHandler = () => {
  const nextBtn = <HTMLButtonElement>document.querySelector(".button__next");
  const codeEl = <HTMLTextAreaElement>document.querySelector(".surgeon__code");
  const audioEl = <HTMLAudioElement>(
    document.querySelector(".surgeon__audio-correct")
  );

  nextBtn.addEventListener("click", () => {
    showItem();
    audioEl.play();
    const itemsEl: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".surgeon__item_hide"
    );
    nextBtn.disabled = true;
    codeEl.value = "";
    currentLevel();
    hideLevels();
    disableElement(".surgeon__see", true);
    disableElement(".surgeon__level", true);
    if (itemsEl.length === 0) {
      return;
    }
    createInstruction();
    setTimeout(() => {
      showLevel();
    }, 3000);
  });
};

export default nextHandler;
