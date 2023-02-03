import Page from "../../abstract/page";
import getPageHTML from "./view/ui";
import AppView from "./view/AppView";

class FroggyPage extends Page {
  private level: number;

  private view: AppView;

  constructor(id: string) {
    super(id);
    this.level = 1; // ... localstorage.getItem(...) || 1;
    this.view = new AppView(this.container);
  }

  executeAfterRender(): void {}

  render() {
    this.container.innerHTML = getPageHTML();
    this.view.drawLevel(this.level);
    return this.container;
  }
}

export default FroggyPage;
