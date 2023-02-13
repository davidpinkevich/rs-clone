import { LEVELS_SCOOPS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import SoundScoops from "./SoundScoops";
import VievScoops from "../view/AppViev";

class TableLevels extends SoundScoops {
  public table: HTMLElement;

  public levels: HTMLElement;

  public btnTable: HTMLButtonElement;

  constructor() {
    super();
    this.table = this.getTable();
    this.levels = this.getLevels();
    this.btnTable = this.getBtnTable();
  }

  getTable() {
    const table = <HTMLElement>document.querySelector(".table__scoop");
    return table;
  }

  getBtnTable() {
    const btnTable = <HTMLButtonElement>(
      document.querySelector(".header__sidebar-levels-main")
    );
    return btnTable;
  }

  changeLevelsTable() {
    const tableLevels = <HTMLElement>(
      document.querySelector(".table__scoop-levels")
    );

    const mainbtnTable = <HTMLElement>(
      document.querySelector(".header__sidebar-levels-main")
    );

    const tableHidden = <HTMLElement>document.querySelector(".table__scoop");

    const infoLevel = <HTMLElement>(
      document.querySelector(".header__sidebar-levels-main>span")
    );

    const lastLevel = <HTMLButtonElement>(
      document.querySelector(".header__sidebar-levels-last")
    );

    const nextLevel = <HTMLButtonElement>(
      document.querySelector(".header__sidebar-levels-next")
    );

    tableLevels.addEventListener("click", (event: Event) => {
      const target = <HTMLElement>event.target;
      if (target.classList.contains("table__scoop-levels-item")) {
        const level = Number(target.getAttribute("data-table"));
        console.log(level);
        const ls = new LocalStorage("cssScoops");
        ls.set("numberLevel", String(level));
        infoLevel.innerHTML = `${level}`;
        if (level === LEVELS_SCOOPS.START) {
          lastLevel.disabled = true;
          nextLevel.disabled = false;
        } else if (level === LEVELS_SCOOPS.END) {
          lastLevel.disabled = false;
          nextLevel.disabled = true;
        } else {
          lastLevel.disabled = false;
          nextLevel.disabled = false;
        }
        const view = new VievScoops(level - 1);
        view.drawNewLevel();
        mainbtnTable.classList.remove("table__active");
        tableHidden.style.display = "none";
      }
    });
  }

  getLevels() {
    const levels = <HTMLElement>document.querySelector(".table__scoop-levels");
    return levels;
  }

  addHiddenTableClick() {
    this.btnTable.addEventListener("click", () => {
      this.btnTable.classList.toggle("table__active");
      if (this.btnTable.classList.contains("table__active")) {
        this.table.style.display = "block";
      } else {
        this.table.style.display = "none";
      }
    });
  }

  addHiddenTableBody() {
    const { body } = document;
    const infoLevel = <HTMLElement>(
      document.querySelector(".header__sidebar-levels-main>span")
    );
    body.addEventListener("click", (event: Event) => {
      const target = <HTMLElement>event.target;
      if (
        this.btnTable.classList.contains("table__active") &&
        !target.classList.contains("table__scoop-levels") &&
        target !== this.btnTable &&
        target !== infoLevel &&
        !target.classList.contains("table__scoop-levels-item") &&
        !target.classList.contains("table__scoop-buttons-refresh") &&
        !target.classList.contains("table__scoop-buttons-sound") &&
        !target.classList.contains("img__sound-scoop") &&
        !target.classList.contains("table__scoop-buttons") &&
        !target.classList.contains("img__refresh-scoop")
      ) {
        this.btnTable.classList.remove("table__active");
        this.table.style.display = "none";
      }
    });
  }

  visibleLevelsTable() {
    this.btnTable.addEventListener("click", () => {
      const ls = new LocalStorage("cssScoops");
      const numberLevel = ls.get("numberLevel");
      const wins = JSON.parse(ls.get("numberWins"));
      const allLevels: NodeListOf<HTMLElement> =
        document.querySelectorAll("[data-table]");
      allLevels.forEach((item) => {
        if (item.getAttribute("data-table") === numberLevel) {
          item.classList.add("current__scoop");
        } else {
          item.classList.remove("current__scoop");
        }
      });
      if (wins) {
        wins.forEach((win: number) => {
          const item = <HTMLElement>(
            document.querySelector(`[data-table="${win}"]`)
          );
          item.classList.add("scoop__win");
        });
      }
    });
  }
}

export default TableLevels;
