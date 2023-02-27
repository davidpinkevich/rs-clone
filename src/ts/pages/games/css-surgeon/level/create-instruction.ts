import surgeonStore from "../data/surgeon-store";
import levelCounter from "./level-counter";

const createInstruction = (): void => {
  const instructionsEl = <HTMLElement>(
    document.querySelector(".surgeon__instructions")
  );
  const editorEl = <HTMLElement>document.querySelector(".surgeon__editor");
  const selectorEl = <HTMLElement>document.querySelector(".surgeon__before");
  const controlsEl = <HTMLElement>document.querySelector(".surgeon__controls");

  controlsEl.style.display = "flex";
  levelCounter();

  const { currentLevel } = surgeonStore;
  const { descr1, descr2, selector } = surgeonStore.levels[currentLevel - 1];

  instructionsEl.innerHTML = `
  <p>${descr1}</p>
  <p>${descr2}</p>
  `;

  editorEl.style.display = "block";

  selectorEl.innerHTML = `${selector} {`;
};

export default createInstruction;
