import Page from "../pages/abstract/page";
import MainPage from "../pages/main/MainPage";
import SurgeonPage from "../pages/games/css-surgeon/SurgeonPage";
import FroggyPage from "../pages/games/flexbox-froggy/FroggyPage";
import GardenPage from "../pages/games/grid-garden/GardenPage";
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
      case PageIds.SurgeonPage:
        page = new SurgeonPage(idPage);
        break;
      case PageIds.FroggyPage:
        page = new FroggyPage(idPage);
        break;
      case PageIds.GardenPage:
        page = new GardenPage(idPage);
        break;
      default:
        page = new ErrorPage(idPage);
        break;
    }

    return page;
  }
}

export default PageFactory;
