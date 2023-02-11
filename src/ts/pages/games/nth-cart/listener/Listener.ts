import levels from "../data/data-levels";
import ls from "../data/ls";
import state from "../data/state";
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
  }

  private submitListener() {
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn?.addEventListener("click", () => {
      const levelInfo = levels[state.currentLevel - 1];

      const inputs = document.querySelectorAll(".input");
      const isValidInputs = Array.from(inputs).every((input) =>
        checkInput((input as HTMLInputElement).value)
      );

      const carts = document.querySelectorAll(".element");
      carts.forEach((cart) => cart.classList.remove("picked"));
      if (!isValidInputs) {
        return;
      }

      const selectorString = createSelectorString(levelInfo);
      const pickedSelectors = document.querySelectorAll(selectorString);
      pickedSelectors.forEach((picked) => {
        picked.classList.add("picked");
      });

      if (isWin()) {
        executeAfterWin(pickedSelectors);
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
}

export default Listener;
