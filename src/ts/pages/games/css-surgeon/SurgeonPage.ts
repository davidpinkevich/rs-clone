import Page from "../../abstract/page";
import innerSurgeon from "./inner-surgeon";
import nextHandler from "./next-handler";
import startHandler from "./start-handler";

class SurgeonPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    startHandler();
    nextHandler();
  }

  render() {
    this.container.innerHTML = innerSurgeon();
    return this.container;
  }
}

export default SurgeonPage;
