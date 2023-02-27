import Sound from "../settings/Sound";
import AppView from "../view/AppView";
import levels from "../data/data-levels";
import ls from "../data/ls";
import state from "../data/state";
import Utils from "../settings/Utils";

class Listener {
  private view: AppView;

  private sound: Sound;

  private utils: Utils;

  constructor() {
    this.view = new AppView();
    this.sound = new Sound();
    this.utils = new Utils();
  }

  public allListener() {
    this.submitListener();
    this.enterListener();
    this.nextLevelListener();
    this.prevLevelListener();
    this.levelsListener();
    this.resetListener();
    this.soundListener();
  }

  private submit() {
    const levelInfo = levels[state.currentLevel - 1];

    const carts = document.querySelectorAll(".element");
    carts.forEach((cart) => cart.classList.remove("picked"));

    const inputs = document.querySelectorAll(".input");
    const isValidInputs = Array.from(inputs).every((input) =>
      this.utils.checkInput((input as HTMLInputElement).value)
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

    const selectorString = this.utils.createSelectorString(levelInfo);
    const pickedSelectors = document.querySelectorAll(selectorString);
    pickedSelectors.forEach((picked) => {
      picked.classList.add("picked");
    });

    const dragAudio = document.querySelector(".dragging") as HTMLAudioElement;
    dragAudio.currentTime = 0;
    dragAudio.play();

    if (this.utils.isWin()) {
      if (state.currentLevel === 40) {
        this.view.drawWin(pickedSelectors);
      } else {
        this.utils.executeAfterWin(pickedSelectors);
      }
    }
  }

  private submitListener() {
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn?.addEventListener("click", () => {
      this.submit();
    });
  }

  private enterListener() {
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.submit();
      }
    });
  }

  private nextLevelListener() {
    const nextBtn = document.querySelector(".next-btn");
    nextBtn?.addEventListener("click", () => {
      state.currentLevel =
        state.currentLevel >= levels.length
          ? levels.length
          : state.currentLevel + 1;
      ls.set("currentLevel", String(state.currentLevel));
      this.utils.changeLevel();
    });
  }

  private prevLevelListener() {
    const prevBtn = document.querySelector(".prev-btn");
    prevBtn?.addEventListener("click", () => {
      state.currentLevel = state.currentLevel < 1 ? 1 : state.currentLevel - 1;
      ls.set("currentLevel", String(state.currentLevel));
      this.utils.changeLevel();
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
        this.utils.changeLevel();
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
      this.utils.changeLevel();
    });
  }

  private soundListener() {
    const sound = document.querySelector(".sound");
    sound?.addEventListener("click", () => {
      this.sound.toggleSound();
    });
  }
}

export default Listener;
