import surgeonStore from "./data/surgeon-store";

const startHandler = () => {
  const startBtn = <HTMLElement>document.querySelector(".button__start");

  startBtn.addEventListener("click", () => {
    const instructionsEl = <HTMLElement>(
      document.querySelector(".surgeon__instructions")
    );
    const editorEl = <HTMLElement>document.querySelector(".surgeon__editor");
    const selectorEl = <HTMLElement>document.querySelector(".surgeon__before");

    const { descr1, descr2, selector } =
      surgeonStore.levels[surgeonStore.currentLevel - 1];

    instructionsEl.innerHTML = `
    <p>${descr1}</p>
    <p>${descr2}</p>
    `;

    editorEl.style.display = "block";

    selectorEl.innerHTML = `${selector} {`;
  });
};

export default startHandler;
