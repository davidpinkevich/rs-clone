import Page from "../../abstract/page";
import { getPageHTML } from "./view/ui";
import backgr from "./test";

class NthPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    backgr();
  }

  render() {
    this.container.innerHTML = getPageHTML();
    return this.container;
  }
}

export default NthPage;
