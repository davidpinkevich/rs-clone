import levels from "../../data/data-levels";
import { getSelectorHTML } from "../ui";

class InfoWindow {
  draw(level: number) {
    const instructions = document.querySelector(".instructions") as HTMLElement;

    const levelInfo = levels[level - 1];
    instructions.innerHTML = levelInfo.instructions;

    const selectors = document.querySelector(".selectors") as HTMLElement;
    selectors.innerHTML = "";

    levelInfo.styles.forEach((style, index) => {
      const selectorNode = document.createElement("div") as HTMLElement;
      selectorNode.innerHTML = getSelectorHTML();
      (selectorNode.querySelector(".prefix") as HTMLElement).innerHTML =
        index === 0 ? `.cart${style}(` : `)${style}(`;

      selectors.innerHTML += selectorNode.innerHTML;
    });
    selectors.innerHTML += ")";
  }
}

export default InfoWindow;
