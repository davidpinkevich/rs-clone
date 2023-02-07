const createWinner = () => {
  const nextBtn = <HTMLButtonElement>document.querySelector(".button__next");
  const instructionsEl = <HTMLElement>(
    document.querySelector(".surgeon__instructions")
  );
  const editorEl = <HTMLElement>document.querySelector(".surgeon__editor");
  const winnerEl = <HTMLElement>document.querySelector(".surgeon__winner");
  const overlayEl = <HTMLElement>document.querySelector(".surgeon__overlay");
  const samImg = <HTMLElement>document.querySelector(".surgeon__sam-img");
  const samWinImg = <HTMLElement>document.querySelector(".surgeon__sam-win");
  const controlsEl = <HTMLElement>document.querySelector(".surgeon__controls");

  nextBtn.disabled = true;
  controlsEl.style.display = "none";
  instructionsEl.style.display = "none";
  editorEl.style.display = "";
  winnerEl.style.display = "block";
  overlayEl.style.display = "none";
  samImg.style.display = "none";
  samWinImg.style.display = "block";
};

export default createWinner;
