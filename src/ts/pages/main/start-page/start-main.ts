import { NUMBER_GAMES } from "../../../data/goods-data";
import MainPageView from "../view/AppView";
import MoveImages from "../view/move-images/MoveImages";
import DrawLevel from "../view/games/DrawGame";
import ChangeGame from "../change-games/ChangeGame";

class StartMain {
  public element: HTMLElement;

  constructor() {
    this.element = this.getBody();
  }

  getBody() {
    const { body } = document;
    return body;
  }

  start() {
    const view = new MainPageView();
    view.drawPage();

    const move = new MoveImages(this.element);
    move.startMove();

    const level = new DrawLevel(NUMBER_GAMES.LEVEL);
    level.drawLevel();

    const last = <HTMLButtonElement>document.querySelector(".games__body-last");
    const next = <HTMLButtonElement>document.querySelector(".games__body-next");

    const btns = new ChangeGame(last, next);
    btns.addButtons();
  }
}

export default StartMain;
