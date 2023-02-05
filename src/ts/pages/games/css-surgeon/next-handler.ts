import createInstruction from "./create-instruction";
import surgeonStore from "./data/surgeon-store";
import hideLevels from "./hide-levels";
import showLevel from "./show-level";

const nextHandler = () => {
  const nextBtn = <HTMLButtonElement>document.querySelector(".button__next");

  nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    hideLevels();
    surgeonStore.currentLevel += 1;
    if (surgeonStore.currentLevel >= surgeonStore.levels.length) {
      nextBtn.disabled = true;
    }
    createInstruction();
    setTimeout(() => {
      showLevel();
    }, 3000);
  });
};

export default nextHandler;
