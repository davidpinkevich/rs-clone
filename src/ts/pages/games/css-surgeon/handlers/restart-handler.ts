import ls from "../ls/ls";

const restartHandler = (): void => {
  const restartBtn = <HTMLElement>document.querySelector(".button__restart");
  const resetBtn = <HTMLElement>document.querySelector(".button__reset");

  const newGame = (e: MouseEvent) => {
    e.preventDefault();
    ls.removeAll();
    window.location.reload();
  };

  resetBtn.addEventListener("click", (e): void => {
    newGame(e);
  });

  restartBtn.addEventListener("click", (e): void => {
    newGame(e);
  });
};

export default restartHandler;
