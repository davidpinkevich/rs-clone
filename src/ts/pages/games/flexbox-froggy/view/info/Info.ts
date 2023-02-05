import { IFroggyLevel } from "../../../../../types/types";
import levels from "../../data/data-levels";
import { getLevelHTML } from "../ui";

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

    this.drawLevelsMenu();
  }

  drawLevelsMenu() {
    const levelsContainer = this.container.querySelector(
      ".levels"
    ) as HTMLElement;
    levelsContainer.innerHTML = "";

    let counter = 1;
    levels.forEach(() => {
      const levelNode = document.createElement("div");
      levelNode.innerHTML = getLevelHTML();

      const currentLevel = levelNode.querySelector(
        ".level-marker"
      ) as HTMLElement;
      currentLevel.setAttribute("data-level", String(counter));
      currentLevel.textContent = String(counter);

      counter += 1;

      levelsContainer.innerHTML += levelNode.innerHTML;
    });
  }
}

export default Info;
