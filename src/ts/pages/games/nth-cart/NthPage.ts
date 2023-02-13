import Page from "../../abstract/page";
import AppView from "./view/AppView";
import Listener from "./listener/Listener";
import state from "./data/state";
import { getPageHTML } from "./view/ui";

class NthPage extends Page {
  private view: AppView;

  private listener: Listener;

  constructor(id: string) {
    super(id);
    this.view = new AppView();
    this.listener = new Listener();
  }

  public executeAfterRender(): void {
    this.view.drawEnvironment();
    this.view.drawLevel(state.currentLevel);
    this.listener.allListener();
  }

  public render() {
    this.container.innerHTML = getPageHTML();
    return this.container;
  }
}

export default NthPage;
