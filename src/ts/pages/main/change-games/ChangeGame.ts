import { NUMBER_GAMES } from "../../../data/goods-data";
import DrawLevelGame from "../view/games/DrawGame";

class ChangeGame {
  public last: HTMLButtonElement;

  public next: HTMLButtonElement;

  constructor(last: HTMLButtonElement, next: HTMLButtonElement) {
    this.last = last;
    this.next = next;
  }

  addListenerLast() {
    this.last.addEventListener("click", () => {
      NUMBER_GAMES.LEVEL -= 1;
      const newGame = new DrawLevelGame(NUMBER_GAMES.LEVEL);
      newGame.drawLevel();
      if (NUMBER_GAMES.LEVEL === NUMBER_GAMES.START) {
        this.last.disabled = true;
        this.next.disabled = false;
      } else {
        this.last.disabled = false;
        this.next.disabled = false;
      }
    });
  }

  addListenerNext() {
    this.next.addEventListener("click", () => {
      NUMBER_GAMES.LEVEL += 1;
      const newGame = new DrawLevelGame(NUMBER_GAMES.LEVEL);
      newGame.drawLevel();
      if (NUMBER_GAMES.LEVEL === NUMBER_GAMES.END) {
        this.next.disabled = true;
        this.last.disabled = false;
      } else {
        this.last.disabled = false;
        this.next.disabled = false;
      }
    });
  }

  disabledBtns() {
    if (NUMBER_GAMES.LEVEL === NUMBER_GAMES.START) this.last.disabled = true;
    if (NUMBER_GAMES.LEVEL === NUMBER_GAMES.END) this.next.disabled = true;
  }

  addButtons() {
    this.addListenerLast();
    this.addListenerNext();
    this.disabledBtns();
  }
}

export default ChangeGame;
