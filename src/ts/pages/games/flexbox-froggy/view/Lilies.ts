import { IFroggyLevel } from "../../../../types/types";
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
    const cssText = entries
      .map((style) => `${style[0]}: ${style[1]};`)
      .join("");
    liliesContainer.style.cssText = cssText;
  }
}

export default Lilies;
