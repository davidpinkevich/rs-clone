import Page from "../../abstract/page";
import drowPageGarden from "./patterns/drow-page";
import startGame from "./start-game/start-game";

class GardenPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    startGame();
  }

  render() {
    this.container.innerHTML = `${drowPageGarden()}`;
    return this.container;
  }
}

export default GardenPage;
