import Page from "../../abstract/page";
import getPageHTML from "./view/ui";
import levels from "./data-levels";
import { IFroggyLevel } from "../../../types/types";
import AppView from "./view/AppView";

class FroggyPage extends Page {
  private level: number;

  private view: AppView;

  constructor(id: string) {
    super(id);
    this.level = 1; // localstorage.getItem(...) || 1;
    this.view = new AppView(this.container, this.level);
  }

  executeAfterRender(): void {}

  render() {
    this.container.innerHTML = getPageHTML();
    this.drawLevel();
    return this.container;
  }

  drawLevel() {
    const levelInfo = levels[this.level - 1];
    this.view.drawFrogs();
    this.view.drawLilies();
    this.drawInstructions(levelInfo);
  }

  drawInstructions(levelInfo: IFroggyLevel) {
    const levelInstructions = levelInfo.instructions;

    const instructionsContainer = this.container.querySelector(
      ".instructions"
    ) as HTMLElement;
    instructionsContainer.innerHTML = levelInstructions.en;
  }
}

export default FroggyPage;
