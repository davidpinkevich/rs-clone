import { IFroggyLevel } from "../../../../../types/types";
import { getLilyHTML } from "../ui";

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
      lilyNodeImg.classList.add(`lily-${lily}`);
      lilyNodeImg.src = `./assets/images/froggy/lilypad-${lily}.svg`;

      liliesContainer.innerHTML += lilyNode.innerHTML;
    });

    this.setStyles(levelInfo);
  }

  setStyles(levelInfo: IFroggyLevel) {
    const liliesContainer = this.container.querySelector(
      ".lilies"
    ) as HTMLElement;

    const entries = Object.entries(levelInfo.styles);
    const cssText = entries
      .map((style) => `${style[0]}: ${style[1]};`)
      .join("");

    if (levelInfo.order) {
      const orderLilies = Array.from(
        this.container.querySelectorAll(`.lily-${levelInfo.order}`)
      );
      orderLilies.forEach((orderLily) => {
        const orderLilyWrapper = orderLily.closest(
          ".lily__wrapper"
        ) as HTMLElement;
        orderLilyWrapper.style.cssText = cssText;
      });
    } else {
      liliesContainer.style.cssText = cssText;
    }
  }
}

export default Lilies;
