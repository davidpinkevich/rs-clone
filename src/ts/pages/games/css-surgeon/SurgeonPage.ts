import Page from "../../abstract/page";
import codeHandler from "./handlers/code-handler";
import innerSurgeon from "./inner-surgeon";
import levelsHandler from "./handlers/levels-handler";
import loupeHandler from "./handlers/loupe-handler";
import nextHandler from "./handlers/next-handler";
import readLs from "./ls/read-ls";
import restartHandler from "./handlers/restart-handler";
import selectLevel from "./level/select-level";
import startHandler from "./handlers/start-handler";
import volumeHandler from "./handlers/volume-handler";

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
