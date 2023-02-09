import Page from "../../abstract/page";
import AppView from "./view/AppView";
import { getPageHTML } from "./view/ui";

class NthPage extends Page {
  private level: number;

  private view: AppView;

  constructor(id: string) {
    super(id);
    this.level = 10; // ... localStorage.getItem() || 1;
    this.view = new AppView();
  }

  executeAfterRender(): void {
    this.view.drawEnvironment();
    this.view.draw(this.level);
  }

  render() {
    this.container.innerHTML = getPageHTML();
    return this.container;
  }
}

export default NthPage;
