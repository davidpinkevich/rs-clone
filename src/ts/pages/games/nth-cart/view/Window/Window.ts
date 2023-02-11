import levels from "../../data/data-levels";
import { getLevelHTML, getSelectorHTML } from "../ui";

class InfoWindow {
  draw(level: number) {
    const instructions = document.querySelector(".instructions") as HTMLElement;
    instructions.classList.remove("hidden");
    document.querySelector(".selectors")?.classList.remove("hidden");

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

    this.drawLevelsMenu();
  }

  drawLevelsMenu() {
    const levelsContainer = document.querySelector(
      ".levels-menu"
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

export default InfoWindow;
