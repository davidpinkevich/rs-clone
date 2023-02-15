import Page from "../abstract/page";
import drawMainPage from "./patterns/draw-main-page";
import StartMain from "./start-page/start-main";

class MainPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    const start = new StartMain();
    start.start();
  }

  render() {
    this.container.innerHTML = `${drawMainPage()}`;
    return this.container;
  }
}

export default MainPage;
