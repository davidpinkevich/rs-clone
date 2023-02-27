import Page from "../../abstract/page";
import createLevels from "./level/create-levels";
import bottomHandler from "./handlers/bottom-handler";
import correctHandler from "./handlers/correct-handler";
import incorrectHandler from "./handlers/incorrect-handler";
import levelHandler from "./handlers/level-handler";
import menuHandler from "./handlers/menu-handler";
import modalHandler from "./handlers/modal-handler";
import newHandler from "./handlers/new-handler";
import nextHandler from "./handlers/next-handler";
import prevHandler from "./handlers/prev-handler";
import topHandler from "./handlers/top-handler";
import volumeHandler from "./handlers/volume-handler";
import readLs from "./ls/read-ls";
import showLevel from "./level/show-level";
import showdownUi from "./showdown-ui";

class ShowdownPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    createLevels();
    readLs();
    showLevel();
    menuHandler();
    levelHandler();
    nextHandler();
    prevHandler();
    topHandler();
    bottomHandler();
    correctHandler();
    incorrectHandler();
    modalHandler();
    newHandler();
    volumeHandler();
  }

  render() {
    this.container.innerHTML = showdownUi();
    return this.container;
  }
}

export default ShowdownPage;
