import createInstruction from "./create-instruction";
import showLevel from "./show-level";

const startHandler = () => {
  const startBtn = <HTMLElement>document.querySelector(".button__start");

  startBtn.addEventListener("click", () => {
    createInstruction();
    showLevel();
  });
};

export default startHandler;
