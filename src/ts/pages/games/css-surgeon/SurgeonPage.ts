import Page from "../../abstract/page";
import codeHandler from "./code-handler";
import innerSurgeon from "./inner-surgeon";
import nextHandler from "./next-handler";
import readLs from "./read-ls";
import startHandler from "./start-handler";

class SurgeonPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    readLs();
    startHandler();
    nextHandler();
    codeHandler();
  }

  render() {
    this.container.innerHTML = innerSurgeon();
    return this.container;
  }
}

export default SurgeonPage;
