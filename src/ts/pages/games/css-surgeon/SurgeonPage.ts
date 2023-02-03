import Page from "../../abstract/page";
import innerSurgeon from "./inner-surgeon";
import startHandler from "./start-handler";

class SurgeonPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    startHandler();
  }

  render() {
    this.container.innerHTML = innerSurgeon();
    return this.container;
  }
}

export default SurgeonPage;
