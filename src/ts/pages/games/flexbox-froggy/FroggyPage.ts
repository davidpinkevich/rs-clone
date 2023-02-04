import Page from "../../abstract/page";
import getPageHTML from "./view/ui";
import AppView from "./view/AppView";
import Coordinates from "../../../utils/Coordinates";
import levels from "./data/data-levels";

class FroggyPage extends Page {
  private level: number;

  private view: AppView;

  constructor(id: string) {
    super(id);
    this.level = 24; // ... localstorage.getItem(...) || 1;
    this.view = new AppView(this.container);
  }

  executeAfterRender(): void {
    this.inputListener();
  }

  render() {
    this.container.innerHTML = getPageHTML();
    this.view.drawLevel(this.level);
    return this.container;
  }

  inputListener() {
    const frogsContainer = this.container.querySelector(".frogs");
    const input = this.container.querySelector("#code") as HTMLTextAreaElement;
    input.addEventListener("input", () => {
      const levelInfo = levels[this.level - 1];
      if (levelInfo.order) {
        const orderFrogs = Array.from(
          this.container.querySelectorAll(`.frog-${levelInfo.order}`)
        );
        orderFrogs.forEach((orderFrog) => {
          const orderFrogWrapper = orderFrog.closest(
            ".frog__wrapper"
          ) as HTMLElement;
          orderFrogWrapper.style.cssText = input.value;
        });
      } else {
        (frogsContainer as HTMLElement).style.cssText = levelInfo.stylesForInit
          ? `flex-wrap: wrap;${input.value}`
          : input.value;
      }
      if (this.isWin()) {
        // временно
        console.log("win");
      }
    });
  }

  isWin() {
    const frogContainers = Array.from(
      this.container.querySelectorAll(".frog__wrapper")
    );
    const lilyContainers = Array.from(
      this.container.querySelectorAll(".lily__wrapper")
    );

    for (let i = 0; i < frogContainers.length; i += 1) {
      const coordinates = new Coordinates(
        frogContainers[i] as HTMLElement,
        lilyContainers[i] as HTMLElement
      );
      if (!coordinates.comparisonСoordinates()) {
        return false;
      }
    }

    return true;
  }
}

export default FroggyPage;
