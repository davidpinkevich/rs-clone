import surgeonStore from "../data/surgeon-store";
import ls from "./ls";

const answerFromLs = (delay: number): void => {
  const codeEl = <HTMLTextAreaElement>document.querySelector(".surgeon__code");
  const nextBtn = <HTMLButtonElement>document.querySelector(".button__next");
  const itemsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__items");
  const { currentLevel } = surgeonStore;

  const answer = ls.get(`${currentLevel - 1}`);
  if (answer) {
    codeEl.value = answer;
    setTimeout((): void => {
      nextBtn.disabled = false;
      itemsEl[currentLevel - 1].setAttribute("style", `opacity: 1; ${answer}`);
    }, delay);
  }
};

export default answerFromLs;
