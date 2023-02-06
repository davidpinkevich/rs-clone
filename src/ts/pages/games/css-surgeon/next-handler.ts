import createInstruction from "./create-instruction";
import currentLevel from "./current-level";
import surgeonStore from "./data/surgeon-store";
import hideLevels from "./hide-levels";
import showItem from "./show-item";
import showLevel from "./show-level";

const nextHandler = () => {
  const nextBtn = <HTMLButtonElement>document.querySelector(".button__next");
  const codeEl = <HTMLTextAreaElement>document.querySelector(".surgeon__code");

  nextBtn.addEventListener("click", () => {
    showItem();
    const itemsEl: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".surgeon__item_hide"
    );
    nextBtn.disabled = true;
    codeEl.value = "";
    hideLevels();
    currentLevel();
    if (
      surgeonStore.currentLevel === surgeonStore.levels.length &&
      itemsEl.length === 0
    ) {
      currentLevel();
      return;
    }
    createInstruction();
    setTimeout(() => {
      showLevel();
    }, 3000);
  });
};

export default nextHandler;
