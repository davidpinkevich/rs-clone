import createInstruction from "./create-instruction";
import surgeonStore from "./data/surgeon-store";
import hideLevels from "./hide-levels";
import showLevel from "./show-level";

const nextHandler = () => {
  const nextBtn = <HTMLButtonElement>document.querySelector(".button__next");

  nextBtn.addEventListener("click", () => {
    surgeonStore.currentLevel += 1;
    if (surgeonStore.currentLevel >= surgeonStore.levels.length) {
      nextBtn.disabled = true;
    }
    createInstruction();
    hideLevels();
    showLevel();
  });
};

export default nextHandler;
