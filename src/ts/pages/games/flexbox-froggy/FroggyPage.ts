import Page from "../../abstract/page";
import getPageHTML from "./ui";

class FroggyPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {}

  render() {
    this.container.innerHTML = getPageHTML();
    return this.container;
  }
}

export default FroggyPage;
