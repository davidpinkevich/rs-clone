import ls from "./ls";

const restartHandler = () => {
  const restartBtn = <HTMLElement>document.querySelector(".button__restart");
  const resetBtn = <HTMLElement>document.querySelector(".button__reset");

  const newGame = (e: MouseEvent) => {
    e.preventDefault();
    ls.removeAll();
    window.location.reload();
  };

  resetBtn.addEventListener("click", (e) => {
    newGame(e);
  });

  restartBtn.addEventListener("click", (e) => {
    newGame(e);
  });
};

export default restartHandler;
