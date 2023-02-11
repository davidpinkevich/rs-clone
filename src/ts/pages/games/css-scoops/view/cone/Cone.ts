import { LINKS_SCOOPS } from "../../../../../data/goods-data";

class Cone {
  public parameters: string;

  public color: string;

  constructor(parameters: string) {
    this.parameters = parameters;
    this.color = this.getColor();
  }

  getColor() {
    return this.parameters.split("-")[0];
  }

  drowCone(id: number) {
    const item = document.createElement("div");
    item.classList.add("cone__body");
    item.setAttribute("id", `${id}`);
    const img = document.createElement("img");
    img.classList.add("cone__scoop-img");

    switch (this.color) {
      case "cone":
        img.src = LINKS_SCOOPS.CONE;
        break;
      case "choco":
        img.src = LINKS_SCOOPS.CONE_CHOCOLATE;
        break;
      default:
    }
    item.append(img);
    return item;
  }
}

export default Cone;
