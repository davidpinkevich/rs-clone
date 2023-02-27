import LocalStorage from "../../../../utils/LocalStorage";

class RefreshScoop {
  public refresh: HTMLElement;

  constructor() {
    this.refresh = this.getRefresh();
  }

  getRefresh() {
    const refresh = <HTMLElement>(
      document.querySelector(".table__scoop-buttons-refresh")
    );
    return refresh;
  }

  addRefreshListener() {
    const img = <HTMLImageElement>(
      document.querySelector(".table__scoop-buttons-refresh>img")
    );
    img.src = "./assets/images/scoops/refresh.svg";

    this.refresh.addEventListener("click", () => {
      const ls = new LocalStorage("cssScoops");
      const wins: NodeListOf<HTMLElement> = document.querySelectorAll(
        ".table__scoop-levels-item"
      );
      wins.forEach((item) => {
        item.classList.remove("scoop__win");
      });
      ls.set("numberWins", "[]");
    });
  }
}

export default RefreshScoop;
