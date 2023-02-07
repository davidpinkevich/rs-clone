import createInstruction from "./create-instruction";
import currentLevel from "./current-level";
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
    currentLevel();
    hideLevels();
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
