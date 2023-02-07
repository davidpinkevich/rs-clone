import createInstruction from "./create-instruction";
import showLevel from "./show-level";
import disableElement from "./utils/disabled-element";

const startHandler = () => {
  const startBtn = <HTMLElement>document.querySelector(".button__start");

  startBtn.addEventListener("click", () => {
    disableElement(".surgeon__level", true);
    createInstruction();
    showLevel();
  });
};

export default startHandler;
