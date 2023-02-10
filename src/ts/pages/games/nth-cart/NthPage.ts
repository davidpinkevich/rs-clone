import Page from "../../abstract/page";
import levels from "./data/data-levels";
import AppView from "./view/AppView";
import { getPageHTML } from "./view/ui";
import { checkInput, createSelectorString } from "./settings/nth-utils";

class NthPage extends Page {
  private level: number;

  private view: AppView;

  constructor(id: string) {
    super(id);
    this.level = 1; // ... localStorage.getItem() || 1;
    this.view = new AppView();
  }

  public executeAfterRender(): void {
    this.view.drawEnvironment();
    this.view.draw(this.level);
    this.listeners();
  }

  public render() {
    this.container.innerHTML = getPageHTML();
    return this.container;
  }

  private listeners() {
    this.submitListener();
  }

  private submitListener() {
    const levelInfo = levels[this.level - 1];

    const submitBtn = document.querySelector(".submit-btn");
    submitBtn?.addEventListener("click", () => {
      const inputs = document.querySelectorAll(".input");
      const isValidInputs = Array.from(inputs).every((input) =>
        checkInput((input as HTMLInputElement).value)
      );
      if (!isValidInputs) {
        // Todo
        // убрать все бочки
        return;
      }

      const selectorString = createSelectorString(levelInfo);
      const pickedSelectors = document.querySelectorAll(selectorString);
      pickedSelectors.forEach((picked) => {
        picked.classList.add("picked");
      });
    });
  }
}

export default NthPage;
