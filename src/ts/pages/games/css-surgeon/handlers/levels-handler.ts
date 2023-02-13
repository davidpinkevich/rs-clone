import answerFromLs from "../ls/answer-from-ls";
import createInstruction from "../level/create-instruction";
import surgeonStore from "../data/surgeon-store";
import hideLevels from "../level/hide-levels";
import showLevel from "../level/show-level";
import disableElement from "../utils/disabled-element";

const levelsHandler = (): void => {
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

  document.body.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains("surgeon__counter") ||
      target.classList.contains("surgeon__indicator") ||
      target.classList.contains("surgeon__lvl") ||
      target.classList.contains("surgeon__current") ||
      target.classList.contains("surgeon__of") ||
      target.classList.contains("surgeon__total") ||
      target.classList.contains("surgeon__caret") ||
      target.classList.contains("surgeon__levels-wrapper") ||
      target.classList.contains("surgeon__levels")
    ) {
      return;
    }
    menuEl.style.display = "";
  });

  levelsEl.forEach((levelEl): void => {
    levelEl.addEventListener("click", (): void => {
      const codeEl = <HTMLTextAreaElement>(
        document.querySelector(".surgeon__code")
      );
      const { currentLevel } = surgeonStore;
      const itemEl = <HTMLElement>(
        document.querySelector(`.surgeon__items_${currentLevel - 1}`)
      );
      disableElement(".button__next", true);
      disableElement(".surgeon__see", true);
      menuEl.style.display = "";
      codeEl.value = "";
      const level = Number(levelEl.getAttribute("data-level"));
      if (itemEl.classList.contains("surgeon__items_hide")) {
        disableElement(".surgeon__level", true);
        surgeonStore.currentLevel = level;
        createInstruction();
        showLevel();
        return;
      }
      hideLevels();
      disableElement(".surgeon__level", true);
      surgeonStore.currentLevel = level;
      createInstruction();
      answerFromLs(5000);
      setTimeout(() => {
        showLevel();
      }, 3000);
    });
  });
};

export default levelsHandler;
