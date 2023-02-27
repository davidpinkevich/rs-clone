import PortionListeners from "../../listeners/PortionListeners";
import Cup from "../cup/Cup";
import Scoop from "../scoop/Scoop";
import Cone from "../cone/Cone";

class Portion extends PortionListeners {
  public parameters: Array<string[]>;

  public innerBody: HTMLElement;

  constructor(parameters: Array<string[]>, innerBody: HTMLElement) {
    super();
    this.parameters = parameters;
    this.innerBody = innerBody;
  }

  createPortion() {
    let counterID = 0;
    for (let i = 0; i < this.parameters.length; i += 1) {
      const portion = <HTMLElement>document.createElement("div");
      portion.classList.add("portion__body");
      for (let j = 0; j < this.parameters[i].length; j += 1) {
        counterID += 1;
        const [nameItem, pulse] = this.parameters[i][j].split("-");
        if (pulse === "pulse") portion.classList.add("pulse-scoops");
        if (nameItem === "cup") {
          const cup = new Cup(counterID);
          portion.append(cup.drowCup());
        } else if (nameItem === "cone" || nameItem === "choco") {
          const cone = new Cone(this.parameters[i][j]);
          portion.append(cone.drowCone(counterID));
        } else if (nameItem === "scoop") {
          const scoop = new Scoop(this.parameters[i][j]);
          portion.append(scoop.drowScoop(counterID));
        }
      }
      this.addListenerPortion(portion);
      this.innerBody.append(portion);
    }
  }
}

export default Portion;
