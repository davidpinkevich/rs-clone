import Page from "../../abstract/page";
import codeHandler from "./code-handler";
import innerSurgeon from "./inner-surgeon";
import levelsHandler from "./levels-handler";
import loupeHandler from "./loupe-handler";
import nextHandler from "./next-handler";
import readLs from "./read-ls";
import restartHandler from "./restart-handler";
import selectLevel from "./select-level";
import startHandler from "./start-handler";
import volumeHandler from "./volume-handler";

class SurgeonPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    readLs();
    startHandler();
    nextHandler();
    codeHandler();
    selectLevel();
    levelsHandler();
    restartHandler();
    loupeHandler();
    volumeHandler();
  }

  render() {
    this.container.innerHTML = innerSurgeon();
    return this.container;
  }
}

export default SurgeonPage;
