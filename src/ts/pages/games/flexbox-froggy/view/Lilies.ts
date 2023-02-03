import { IFroggyLevel, TStyleKey } from "../../../../types/types";
import { getLilyHTML } from "./ui";

class Lilies {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  draw(levelInfo: IFroggyLevel) {
    const liliesContainer = this.container.querySelector(
      ".lilies"
    ) as HTMLElement;
    liliesContainer.innerHTML = "";

    const lilies = levelInfo.items;
    lilies.forEach((lily) => {
      const lilyNode = document.createElement("div");
      lilyNode.innerHTML = getLilyHTML();

      const lilyNodeImg = lilyNode.querySelector(
        ".lily-img"
      ) as HTMLImageElement;
      lilyNodeImg.classList.add(lily);
      lilyNodeImg.src = `./assets/images/froggy/lilypad-${lily}.svg`;

      liliesContainer.innerHTML += lilyNode.innerHTML;
    });

    const entries = Object.entries(levelInfo.styles);
    entries.forEach((entry) => {
      const styleKey = entry[0] as TStyleKey;
      const styleValue = entry[1];
      liliesContainer.style[styleKey] = styleValue;
    });
  }
}

export default Lilies;
