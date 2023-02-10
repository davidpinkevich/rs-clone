import levels from "../data/data-levels";
import state from "../data/state";
import { checkInput, createSelectorString } from "../settings/nth-utils";

class Listener {
  public allListener() {
    this.submitListener();
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
      if (!isValidInputs) {
        carts.forEach((cart) => cart.classList.remove("picked"));
        return;
      }

      carts.forEach((cart) => cart.classList.remove("picked"));

      const selectorString = createSelectorString(levelInfo);
      const pickedSelectors = document.querySelectorAll(selectorString);
      pickedSelectors.forEach((picked) => {
        picked.classList.add("picked");
      });
    });
  }
}

export default Listener;
