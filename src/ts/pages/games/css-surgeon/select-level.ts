import answerFromLs from "./answer-from-ls";
import createInstruction from "./create-instruction";
import surgeonStore from "./data/surgeon-store";
import showLevel from "./show-level";
import disableElement from "./utils/disabled-element";

const selectLevel = () => {
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__item");
  const holesEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__hole");

  holesEl.forEach((holeEl) => {
    holeEl.addEventListener("click", () => {
      const level = Number(holeEl.getAttribute("data-level"));
      surgeonStore.currentLevel = level;
      disableElement(".surgeon__level", true);
      createInstruction();
      answerFromLs(2000);
      showLevel();
    });
  });

  itemsEl.forEach((itemEl) => {
    itemEl.addEventListener("click", () => {
      const level = Number(itemEl.getAttribute("data-level"));
      surgeonStore.currentLevel = level;
      disableElement(".surgeon__level", true);
      createInstruction();
      answerFromLs(2000);
      showLevel();
    });
  });
};

export default selectLevel;
