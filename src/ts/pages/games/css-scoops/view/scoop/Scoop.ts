import { COLORS_SCOOPS } from "../../../../../data/goods-data";
import ScoopListeners from "../../listeners/ScoopListener";

class Scoop extends ScoopListeners {
  public parameters: string;

  public color: string;

  public position: string;

  constructor(parameters: string) {
    super();
    this.parameters = parameters;
    this.color = this.getColor();
    this.position = this.getPosition();
  }

  getColor() {
    return this.parameters.split("-")[1];
  }

  getPosition() {
    const bottom = this.parameters.split("-").at(-1);
    if (bottom === "table") return "-40";
    return `${bottom}`;
  }

  drowScoop(id: number) {
    const item = document.createElement("div");
    item.classList.add("scoop__body");
    switch (this.color) {
      case "pink":
        item.style.backgroundColor = COLORS_SCOOPS.PINK;
        break;
      default:
    }
    if (this.parameters.split("-")[2] === "pulse") {
      item.classList.add("pulse-scoops");
    }
    item.setAttribute("id", `${id}`);
    item.style.bottom = `${this.position}px`;
    this.addListenerScoop(item);
    return item;
  }
}

export default Scoop;
