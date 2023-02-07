import answerFromLs from "../ls/answer-from-ls";
import createInstruction from "../level/create-instruction";
import surgeonStore from "../data/surgeon-store";
import hideLevels from "../level/hide-levels";
import showLevel from "../level/show-level";
import disableElement from "../utils/disabled-element";

const levelsHandler = () => {
  const counterEl = <HTMLElement>document.querySelector(".surgeon__indicator");
  const menuEl = <HTMLElement>(
    document.querySelector(".surgeon__levels-wrapper")
  );
  const closeEl = <HTMLElement>document.querySelector(".surgeon__close");
  const levelsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__level");

  counterEl.addEventListener("click", () => {
    menuEl.style.display = "block";
  });

  closeEl.addEventListener("click", () => {
    menuEl.style.display = "";
  });

  levelsEl.forEach((levelEl) => {
    levelEl.addEventListener("click", () => {
      const codeEl = <HTMLTextAreaElement>(
        document.querySelector(".surgeon__code")
      );
      const { currentLevel } = surgeonStore;
      const itemEl = <HTMLElement>(
        document.querySelector(`.surgeon__items_${currentLevel - 1}`)
      );
      disableElement(".button__next", true);
      disableElement(".surgeon__level", true);
      disableElement(".surgeon__see", true);
      menuEl.style.display = "";
      codeEl.value = "";
      const level = Number(levelEl.getAttribute("data-level"));
      surgeonStore.currentLevel = level;
      if (itemEl.classList.contains("surgeon__items_hide")) {
        createInstruction();
        showLevel();
        return;
      }
      hideLevels();
      createInstruction();
      answerFromLs(5000);
      setTimeout(() => {
        showLevel();
      }, 3000);
    });
  });
};

export default levelsHandler;
