import answerFromLs from "./answer-from-ls";
import createInstruction from "./create-instruction";
import surgeonStore from "./data/surgeon-store";
import showLevel from "./show-level";
import disableElement from "./utils/disabled-element";

const select = (selector: HTMLElement) => {
  const level = Number(selector.getAttribute("data-level"));
  surgeonStore.currentLevel = level;
  disableElement(".surgeon__level", true);
  createInstruction();
  answerFromLs(2000);
  showLevel();
};

export default select;
