import { IFroggyLevel } from "../../../../types/types";

class Info { 
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  draw(levelInfo: IFroggyLevel) {
    const levelInstructions = levelInfo.instructions;

    const instructionsContainer = this.container.querySelector(
      ".instructions"
    ) as HTMLElement;
    instructionsContainer.innerHTML = levelInstructions.en;

    
  }
}

export default Info;
