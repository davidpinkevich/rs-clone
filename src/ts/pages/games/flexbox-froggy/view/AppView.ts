import levels from "../data-levels";
import Frogs from "./Frogs";
import Info from "./Info";
import Lilies from "./Lilies";

class AppView {
  private container: HTMLElement;

  private level: number;

  private frogs: Frogs;

  private lilies: Lilies;

  private info: Info;

  constructor(container: HTMLElement, level: number) {
    this.container = container;
    this.level = level;
    this.frogs = new Frogs(this.container);
    this.lilies = new Lilies(this.container);
    this.info = new Info(this.container);
  }

  drawFrogs() {
    const levelInfo = levels[this.level - 1];
    this.frogs.draw(levelInfo);
  }

  drawLilies() {
    const levelInfo = levels[this.level - 1];
    this.lilies.draw(levelInfo);
  }

  drawInfo() {
    const levelInfo = levels[this.level - 1];
    this.info.draw(levelInfo);
  }
}

export default AppView;
