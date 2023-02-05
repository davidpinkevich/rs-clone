import Page from "../../abstract/page";
import AppView from "./view/AppView";
import LocalStorage from "../../../utils/LocalStorage";
import getPageHTML from "./view/ui";
import levels from "./data/data-levels";
import { updateStatePage, isWin } from "./froggy-helper";

class FroggyPage extends Page {
  private level: number;

  private view: AppView;

  private ls: LocalStorage;

  constructor(id: string) {
    super(id);
    this.ls = new LocalStorage("froggy");
    this.level = Number(this.ls.get("currentLevel")) || 1; // ... localstorage.getItem(...) || 1;
    this.view = new AppView(this.container);
  }

  executeAfterRender(): void {
    updateStatePage(this.level);
    this.allListener();
  }

  render() {
    this.container.innerHTML = getPageHTML();
    this.view.drawLevel(this.level);
    return this.container;
  }

  allListener() {
    this.inputListener();
    this.levelCounterListener();
    this.nextLevelBtnListener();
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

      const nextBtn = this.container.querySelector(".next-btn");
      if (isWin()) {
        (document.querySelector(".correct") as HTMLAudioElement).play();
        nextBtn?.classList.remove("disabledButton");
      } else {
        nextBtn?.classList.add("disabledButton");
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

      const newLevel = e.target as HTMLElement;
      if (newLevel.closest(".level-marker")) {
        this.level = Number(newLevel.dataset.level);
        this.view.drawLevel(this.level);
        updateStatePage(this.level);
        this.ls.set("currentLevel", String(this.level));
        levelsWrapper.style.display = "none";
      }
    });
  }

  nextLevelBtnListener() {
    const nextBtn = document.querySelector(".next-btn") as HTMLButtonElement;
    nextBtn.addEventListener("click", () => {
      let completedLevels = JSON.parse(this.ls.get("completedLevels") || "[]");
      completedLevels.push(this.level);
      completedLevels = Array.from(new Set(completedLevels));
      this.ls.set("completedLevels", JSON.stringify(completedLevels));
      this.nextLevel();
    });
  }

  nextLevel() {
    this.level += 1;
    this.view.drawLevel(this.level);
    updateStatePage(this.level);
    this.ls.set("currentLevel", String(this.level));
  }

  prevLevel() {
    this.level -= 1;
    this.view.drawLevel(this.level);
    updateStatePage(this.level);
    this.ls.set("currentLevel", String(this.level));
  }
}

export default FroggyPage;
