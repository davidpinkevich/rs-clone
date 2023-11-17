import createInstruction from "../level/create-instruction";
import showLevel from "../level/show-level";
import disableElement from "../utils/disabled-element";

const startHandler = (): void => {
  const startBtn = <HTMLElement>document.querySelector(".button__start");

  startBtn.addEventListener("click", (): void => {
    disableElement(".surgeon__level", true);
    disableElement(".surgeon__see", true);
    createInstruction();
    showLevel();
  });
};

export default startHandler;
