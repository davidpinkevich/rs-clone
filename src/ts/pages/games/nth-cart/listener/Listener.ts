import levels from "../data/data-levels";
import ls from "../data/ls";
import state from "../data/state";
import { toggleSound } from "../settings/nth-sound";
import {
  changeLevel,
  checkInput,
  createSelectorString,
  executeAfterWin,
  isWin,
} from "../settings/nth-utils";
import AppView from "../view/AppView";

class Listener {
  private view: AppView;

  constructor() {
    this.view = new AppView();
  }

  public allListener() {
    this.submitListener();
    this.nextLevelListener();
    this.prevLevelListener();
    this.levelsListener();
    this.resetListener();
    this.soundListener();
  }

  private submitListener() {
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn?.addEventListener("click", () => {
      const levelInfo = levels[state.currentLevel - 1];

      const carts = document.querySelectorAll(".element");
      carts.forEach((cart) => cart.classList.remove("picked"));

      const inputs = document.querySelectorAll(".input");
      const isValidInputs = Array.from(inputs).every((input) =>
        checkInput((input as HTMLInputElement).value)
      );
      if (!isValidInputs) {
        return;
      }

      const isNotValidInputs = Array.from(inputs).every(
        (input) => (input as HTMLInputElement).value === ""
      );
      if (isNotValidInputs) {
        return;
      }

      const selectorString = createSelectorString(levelInfo);
      const pickedSelectors = document.querySelectorAll(selectorString);
      pickedSelectors.forEach((picked) => {
        picked.classList.add("picked");
      });

      const dragAudio = document.querySelector(".dragging") as HTMLAudioElement;
      dragAudio.currentTime = 0;
      dragAudio.play();

      if (isWin()) {
        if (state.currentLevel === 40) {
          this.view.drawWin(pickedSelectors);
        } else {
          executeAfterWin(pickedSelectors);
        }
      }
    });
  }

  private nextLevelListener() {
    const nextBtn = document.querySelector(".next-btn");
    nextBtn?.addEventListener("click", () => {
      state.currentLevel += 1;
      ls.set("currentLevel", String(state.currentLevel));
      changeLevel();
    });
  }

  private prevLevelListener() {
    const prevBtn = document.querySelector(".prev-btn");
    prevBtn?.addEventListener("click", () => {
      state.currentLevel -= 1;
      ls.set("currentLevel", String(state.currentLevel));
      changeLevel();
    });
  }

  private levelsListener() {
    document.body.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const dropdownMenu = document.querySelector(".dropdown-menu");
      if (target.closest(".reset")) {
        dropdownMenu?.classList.remove("show");
      } else if (
        target.closest(".level-indicator") ||
        target.closest(".dropdown-menu")
      ) {
        dropdownMenu?.classList.add("show");
      } else {
        dropdownMenu?.classList.remove("show");
      }

      if (target.closest(".level-marker")) {
        dropdownMenu?.classList.remove("show");
        state.currentLevel = Number(target.dataset.level);
        ls.set("currentLevel", String(state.currentLevel));
        changeLevel();
      }
    });
  }

  private resetListener() {
    const reset = document.querySelector(".reset") as HTMLElement;
    reset.addEventListener("click", () => {
      state.currentLevel = 1;
      state.completedLevels = [];
      ls.set("currentLevel", String(state.currentLevel));
      ls.set("completedLevels", JSON.stringify(state.completedLevels));
      changeLevel();
    });
  }

  private soundListener() {
    const sound = document.querySelector(".sound");
    sound?.addEventListener("click", () => {
      toggleSound();
    });
  }
}

export default Listener;
