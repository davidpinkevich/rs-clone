import Carts from "./Carts/Carts";
import Environment from "./Environment/Environment";
import InfoWindow from "./Window/Window";

class AppView {
  private environment: Environment;

  private carts: Carts;

  private infoWindow: InfoWindow;

  constructor() {
    this.environment = new Environment();
    this.carts = new Carts();
    this.infoWindow = new InfoWindow();
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

  draw(level: number) {
    this.drawCarts(level);
    this.drawWindow(level);
  }
}

export default AppView;
