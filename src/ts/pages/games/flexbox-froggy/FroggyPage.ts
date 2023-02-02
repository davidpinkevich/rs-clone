import Page from "../../abstract/page";
import getPageHTML, { getFrogHTML, getLilyHTML } from "./ui";
import levels from "./data-levels";
import { IFroggyLevel, TStyleKey } from "../../../types/types";

class FroggyPage extends Page {
  private level: number;

  constructor(id: string) {
    super(id);
    this.level = 1; // localstorage.getItem(...) || 1;
  }

  executeAfterRender(): void {}

  render() {
    this.container.innerHTML = getPageHTML();
    this.drawLevel();
    return this.container;
  }

  drawLevel() {
    const levelInfo = levels[this.level - 1];
    this.drawFrogs(levelInfo);
    this.drawLilies(levelInfo);
  }

  drawFrogs(levelInfo: IFroggyLevel) {
    const { stylesForInit } = levelInfo;

    const frogsContainer = this.container.querySelector(
      ".frogs"
    ) as HTMLElement;
    frogsContainer.innerHTML = "";

    if (stylesForInit && stylesForInit.find((frog) => frog === "wrap")) {
      frogsContainer.style.flexWrap = "wrap";
    } else {
      frogsContainer.style.flexWrap = "nowrap";
    }

    const frogs = levelInfo.items;
    frogs.forEach((frog) => {
      const frogNode = document.createElement("div");
      frogNode.innerHTML = getFrogHTML();

      const frogNodeImg = frogNode.querySelector(
        ".frog-img"
      ) as HTMLImageElement;
      frogNodeImg.classList.add(frog);
      frogNodeImg.src = `./assets/images/froggy/frog-${frog}.svg`;

      frogsContainer.innerHTML += frogNode.innerHTML;
    });
  }

  drawLilies(levelInfo: IFroggyLevel) {
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

export default FroggyPage;
