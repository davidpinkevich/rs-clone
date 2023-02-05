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
    this.level = 1; // ... localstorage.getItem(...) || 1;
    this.view = new AppView(this.container);
  }

  executeAfterRender(): void {
    this.updateStatePage();
    this.allListener();
  }

  render() {
    this.container.innerHTML = getPageHTML();
    this.view.drawLevel(this.level);
    return this.container;
  }

  updateStatePage() {
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");
    if (this.level === 1) {
      leftArrow?.classList.add("disabledButton");
    } else if (this.level === levels.length) {
      rightArrow?.classList.add("disabledButton");
    } else {
      leftArrow?.classList.remove("disabledButton");
      rightArrow?.classList.remove("disabledButton");
    }

    const levelLabel = document.querySelector(
      ".level-indicator"
    ) as HTMLElement;
    levelLabel.textContent = `Level ${this.level} of 24 ▾`;

    const nextBtn = this.container.querySelector(
      ".next-btn"
    ) as HTMLButtonElement;
    nextBtn.classList.add("disabledButton");
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

  allListener() {
    this.inputListener();
    this.levelCounterListener();
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
        (frogsContainer as HTMLElement).style.cssText = levelInfo.wrapForInit
          ? `flex-wrap: wrap;${input.value}`
          : input.value;
      }
    });
  }

  levelCounterListener() {
    this.container.addEventListener("click", (e) => {
      if (e.target instanceof Element && e.target.closest(".arrow.left")) {
        this.prevLevel();
      }
      if (e.target instanceof Element && e.target.closest(".arrow.right")) {
        this.nextLevel();
      }

      const levelsWrapper = this.container.querySelector(
        ".levels-wrapper"
      ) as HTMLElement;
      if (
        e.target instanceof Element &&
        (e.target.closest(".level-indicator") ||
          e.target.closest(".levels-wrapper"))
      ) {
        levelsWrapper.style.display = "block";
      } else {
        levelsWrapper.style.display = "none";
      }
    });
  }

  nextLevel() {
    this.level += 1;
    this.view.drawLevel(this.level);
    this.updateStatePage();
  }

  prevLevel() {
    this.level -= 1;
    this.view.drawLevel(this.level);
    this.updateStatePage();
  }
}

export default FroggyPage;
