import { IFroggyLevel } from "../../../../types/types";

class Info {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  draw(levelInfo: IFroggyLevel) {
    const levelInstructions = levelInfo.instructions;

    const instructionsContainer = this.container.querySelector(
      ".instructions"
    ) as HTMLElement;
    instructionsContainer.innerHTML = levelInstructions.en;

    const codeContainer = this.container.querySelector(
      ".editor"
    ) as HTMLElement;
    (codeContainer.querySelector("#before") as HTMLElement).textContent =
      levelInfo.beforeText;
    (codeContainer.querySelector("#after") as HTMLElement).textContent = "}";
    (codeContainer.querySelector("#code") as HTMLDivElement).style.height = `${
      24 * levelInfo.stringsCount
    }px`;
  }
}

export default Info;
