import Page from "../../abstract/page";
import getPageHTML from "./view/ui";
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
    this.view.drawFrogs();
    this.view.drawLilies();
    this.view.drawInfo();
  }
}

export default FroggyPage;
