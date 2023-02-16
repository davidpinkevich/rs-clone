import Page from "../pages/abstract/page";
import PageFactory from "./PageFactory";

class App {
  private static container: HTMLElement = document.body;

  private static renderNewPage(idPage: string) {
    App.container.innerHTML = "";
    let page: Page | null = null;

    const pageFactory = new PageFactory();
    page = pageFactory.createPage(idPage);

    if (page) {
      const pageHTML = page.render();
      App.container.append(pageHTML);
      App.changeFavicon(idPage);
      page.executeAfterRender();
    }
  }

  private static changeFavicon(idPage: string) {
    const favicon = document.querySelector(
      'link[rel="shortcut icon"]'
    ) as HTMLLinkElement;

    const path = `./assets/icons/${
      idPage === "" || idPage === "#" ? "space" : idPage.slice(1)
    }.ico`;
    favicon.href = path;

    document.head.appendChild(favicon);
  }

  private enableRouteChange() {
    const { hash } = window.location;
    App.renderNewPage(hash);
    window.addEventListener("hashchange", () => {
      const currentHash = window.location.hash;
      App.renderNewPage(currentHash);
    });
  }

  run() {
    this.enableRouteChange();
  }
}

export default App;
