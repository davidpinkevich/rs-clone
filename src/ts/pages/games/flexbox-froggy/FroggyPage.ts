import Page from "../../abstract/page";
import AppView from "./view/AppView";
import LocalStorage from "../../../utils/LocalStorage";
import levels from "./data/data-levels";
import getPageHTML from "./view/ui";
import updateStatePage from "./settings/froggy-state-page";
import { isWin, animateFrogs } from "./settings/froggy-utils";
import { toggleSound } from "./settings/froggy-sound";
import { toggleLanguage } from "./settings/froggy-language";

class FroggyPage extends Page {
  private level: number;

  private view: AppView;

  private ls: LocalStorage;

  constructor(id: string) {
    super(id);
    this.ls = new LocalStorage("froggy");
    this.level = Number(this.ls.get("currentLevel")) || 1;
    this.view = new AppView(this.container);
  }

  public executeAfterRender(): void {
    updateStatePage(this.level);
    this.allListener();
  }

  public render() {
    this.container.innerHTML = getPageHTML();
    this.view.drawLevel(this.level);
    return this.container;
  }

  private allListener() {
    this.inputListener();
    this.levelCounterListener();
    this.nextLevelBtnListener();
    this.settingsListener();
  }

  private inputListener() {
    const frogsContainer = this.container.querySelector(".frogs");
    const input = this.container.querySelector("#code") as HTMLTextAreaElement;
    input.addEventListener("input", () => {
      this.ls = new LocalStorage("froggy");
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
        const sound = this.ls.get("sound") || "on";
        if (sound === "on") {
          (document.querySelector(".correct") as HTMLAudioElement).play();
        }
        nextBtn?.classList.remove("disabledButton");
        nextBtn?.classList.add("animate__animated", "animate__tada");
      } else {
        nextBtn?.classList.add("disabledButton");
        nextBtn?.classList.remove("animate__animated", "animate__tada");
      }
    });
  }

  private levelCounterListener() {
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
      if (e.target instanceof Element && e.target.closest(".label-reset")) {
        this.ls.remove("currentLevel");
        this.ls.remove("completedLevels");
        this.level = 1;
        this.view.drawLevel(this.level);
        updateStatePage(this.level);
        levelsWrapper.style.display = "none";
      } else if (
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
        this.ls = new LocalStorage("froggy");
        this.ls.set("currentLevel", String(this.level));
        levelsWrapper.style.display = "none";
      }
    });
  }

  private settingsListener() {
    const controls = document.querySelector(".header__controls") as HTMLElement;
    controls.addEventListener("click", (e) => {
      if (e.target instanceof Element && e.target.closest(".controls-sound")) {
        toggleSound();
      }
      if (
        e.target instanceof Element &&
        e.target.closest(".controls-language")
      ) {
        toggleLanguage();
        this.view.drawInfo(this.level);
        updateStatePage(this.level);
      }
    });
  }

  private nextLevelBtnListener() {
    const nextBtn = document.querySelector(".next-btn") as HTMLButtonElement;
    nextBtn.addEventListener("click", () => {
      let completedLevels = JSON.parse(this.ls.get("completedLevels") || "[]");
      completedLevels.push(this.level);
      completedLevels = Array.from(new Set(completedLevels));
      this.ls = new LocalStorage("froggy");
      this.ls.set("completedLevels", JSON.stringify(completedLevels));

      animateFrogs();
      setTimeout(() => {
        this.nextLevel();
      }, 800);
    });
  }

  private nextLevel() {
    this.level += 1;
    this.view.drawLevel(this.level);
    updateStatePage(this.level);
    this.ls = new LocalStorage("froggy");
    this.ls.set("currentLevel", String(this.level));
  }

  private prevLevel() {
    this.level -= 1;
    this.view.drawLevel(this.level);
    updateStatePage(this.level);
    this.ls = new LocalStorage("froggy");
    this.ls.set("currentLevel", String(this.level));
  }
}

export default FroggyPage;
