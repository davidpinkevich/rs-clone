import { LINKS_SCOOPS } from "../../../../../data/goods-data";

class Cup {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  drowCup() {
    const item = document.createElement("div");
    item.classList.add("cup__body");
    item.setAttribute("id", `${this.id}`);
    const img = document.createElement("img");
    img.classList.add("cup__scoop-img");
    img.src = LINKS_SCOOPS.CUP;
    item.append(img);
    return item;
  }
}

export default Cup;
