import Frogs from "./frogs/Frogs";
import Lilies from "./lilies/Lilies";
import Info from "./info/Info";
import levels from "../data/data-levels";

class AppView {
  private container: HTMLElement;

  private frogs: Frogs;

  private lilies: Lilies;

  private info: Info;

  constructor(container: HTMLElement) {
    this.container = container;
    this.frogs = new Frogs(this.container);
    this.lilies = new Lilies(this.container);
    this.info = new Info(this.container);
  }

  drawFrogs(level: number) {
    const levelInfo = levels[level - 1];
    this.frogs.draw(levelInfo);
  }

  drawLilies(level: number) {
    const levelInfo = levels[level - 1];
    this.lilies.draw(levelInfo);
  }

  drawInfo(level: number) {
    const levelInfo = levels[level - 1];
    this.info.draw(levelInfo);
  }

  drawLevel(level: number) {
    this.drawFrogs(level);
    this.drawLilies(level);
    this.drawInfo(level);
  }
}

export default AppView;
