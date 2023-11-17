import Page from "../../abstract/page";
import drawPageScoops from "./patterns/inner-patterns";
import startGameScoops from "./start-game/start-game";

class ScoopsPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    startGameScoops();
  }

  render() {
    this.container.innerHTML = `${drawPageScoops()}`;
    return this.container;
  }
}

export default ScoopsPage;
