import updateState from "../settings/nth-state";
import Carts from "./carts/Carts";
import Environment from "./environment/Environment";
import Win from "./win/Win";
import InfoWindow from "./window/Window";

class AppView {
  private environment: Environment;

  private carts: Carts;

  private infoWindow: InfoWindow;

  private win: Win;

  constructor() {
    this.environment = new Environment();
    this.carts = new Carts();
    this.infoWindow = new InfoWindow();
    this.win = new Win();
  }

  drawWin(pickedSelectors: NodeListOf<Element>) {
    this.win.draw(pickedSelectors);
  }

  drawCarts(level: number) {
    this.carts.draw(level);
  }

  drawWindow(level: number) {
    this.infoWindow.draw(level);
  }

  drawEnvironment() {
    this.environment.draw();
  }

  drawLevel(level: number) {
    this.drawCarts(level);
    this.drawWindow(level);
    updateState();
  }
}

export default AppView;
