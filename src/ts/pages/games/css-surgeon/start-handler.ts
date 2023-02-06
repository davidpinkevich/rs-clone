import createInstruction from "./create-instruction";
import surgeonStore from "./data/surgeon-store";
import showLevel from "./show-level";

const startHandler = () => {
  const startBtn = <HTMLElement>document.querySelector(".button__start");

  startBtn.addEventListener("click", () => {
    surgeonStore.currentLevel = 1;
    createInstruction();
    showLevel();
  });
};

export default startHandler;
