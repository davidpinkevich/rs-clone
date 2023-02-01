import Page from "../pages/abstract/page";
import MainPage from "../pages/main/MainPage";
import ErrorPage from "../pages/error/ErrorPage";
import { PageIds } from "../data/goods-data";

class PageFactory {
  public createPage(idPage: string) {
    let page: Page | null = null;

    switch (idPage) {
      case "":
        page = new MainPage(idPage);
        break;
      case PageIds.MainPage:
        page = new MainPage(idPage);
        break;
      default:
        page = new ErrorPage(idPage);
        break;
    }

    return page;
  }
}

export default PageFactory;
