import Page from "../pages/abstract/page";
import PageFactory from "./PageFactory";

class App {
  private static container: HTMLElement = document.body;

  static renderNewPage(idPage: string) {
    App.container.innerHTML = "";
    let page: Page | null = null;

    const pageFactory = new PageFactory();
    page = pageFactory.createPage(idPage);

    if (page) {
      const pageHTML = page.render();
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    const { hash } = window.location;
    App.renderNewPage(hash);
    window.addEventListener("hashchange", () => {
      const currentHash = window.location.hash;
      App.renderNewPage(currentHash);
    });
  }

  constructor() {
    // this.initialPage = new MainPage('main-page');
    // this.header = new Header('header', 'header');
  }

  run() {
    this.enableRouteChange();
  }
}

export default App;
