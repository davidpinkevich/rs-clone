import { IFroggyLevel } from "../../../../../types/types";
import { getFrogHTML } from "../ui";

class Frogs {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  draw(levelInfo: IFroggyLevel) {
    const frogsContainer = this.container.querySelector(
      ".frogs"
    ) as HTMLElement;
    frogsContainer.innerHTML = "";

    const { wrapForInit } = levelInfo;
    frogsContainer.style.flexWrap = wrapForInit ? "wrap" : "nowrap";

    const frogs = levelInfo.items;
    frogs.forEach((frog) => {
      const frogNode = document.createElement("div");
      frogNode.innerHTML = getFrogHTML();

      const frogNodeImg = frogNode.querySelector(
        ".frog-img"
      ) as HTMLImageElement;
      frogNodeImg.classList.add(`frog-${frog}`);
      frogNodeImg.src = `./assets/images/froggy/frog-${frog}.svg`;

      frogsContainer.innerHTML += frogNode.innerHTML;
    });
  }
}

export default Frogs;
