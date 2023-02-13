import { LEVELS_SCOOPS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import VievScoops from "../view/AppViev";
import SubmitButtonScoops from "./SubmitButton";
import InputScoops from "./InputScoops";
import TableLevels from "./TableLevels";
import Result from "./Result";

class ButtonsLevels extends TableLevels {
  public last: HTMLButtonElement;

  public next: HTMLButtonElement;

  public main: HTMLButtonElement;

  public infoLevel: HTMLElement;

  public submit;

  public input;

  constructor() {
    super();
    this.last = this.getLast();
    this.next = this.getNext();
    this.main = this.getMain();
    this.infoLevel = this.getInfoLevel();
    this.submit = new SubmitButtonScoops();
    this.input = new InputScoops();
  }

  getLast() {
    const lastLevel = <HTMLButtonElement>(
      document.querySelector(".header__sidebar-levels-last")
    );
    return lastLevel;
  }

  getNext() {
    const nextLevel = <HTMLButtonElement>(
      document.querySelector(".header__sidebar-levels-next")
    );
    return nextLevel;
  }

  getMain() {
    const main = <HTMLButtonElement>(
      document.querySelector(".header__sidebar-levels-main")
    );
    return main;
  }

  getInfoLevel() {
    const infoLevel = <HTMLElement>(
      document.querySelector(".header__sidebar-levels-main>span")
    );
    return infoLevel;
  }

  viewNumberLevel() {
    const ls = new LocalStorage("cssScoops");
    const numberLevel = ls.get("numberLevel");
    this.infoLevel.innerHTML = numberLevel;
    const imgLast = document.createElement("img");
    const imgNext = document.createElement("img");
    this.last.append(imgLast);
    this.next.append(imgNext);
    imgLast.src = "./assets/images/scoops/arrow-left.svg";
    imgNext.src = "./assets/images/scoops/arrow-right.svg";
  }

  addTable() {
    const table = <HTMLElement>document.querySelector(".table__scoop-levels");
    for (let i = 0; i < LEVELS_SCOOPS.END; i += 1) {
      const item = document.createElement("div");
      item.classList.add("table__scoop-levels-item");
      item.setAttribute("data-table", String(i + 1));
      item.innerHTML = `${i + 1}`;
      table.append(item);
    }
  }

  disabledLevelBtn() {
    const ls = new LocalStorage("cssScoops");
    const numberLevel = Number(ls.get("numberLevel"));
    if (LEVELS_SCOOPS.START === numberLevel) {
      this.last.disabled = true;
      this.next.disabled = false;
    } else if (LEVELS_SCOOPS.END === numberLevel) {
      this.next.disabled = true;
      this.last.disabled = false;
    } else {
      this.next.disabled = false;
      this.last.disabled = false;
    }
  }

  changeLevels() {
    this.last.addEventListener("click", () => {
      const ls = new LocalStorage("cssScoops");
      const numberLevel = Number(ls.get("numberLevel"));
      const newLevel = numberLevel - 1;
      ls.set("numberLevel", `${newLevel}`);
      const view = new VievScoops(newLevel - 1);
      view.drawNewLevel();
      this.submit.addDisabled();
      this.input.clearInput();
      this.disabledLevelBtn();
      this.infoLevel.innerHTML = `${newLevel}`;
    });

    this.next.addEventListener("click", () => {
      const ls = new LocalStorage("cssScoops");
      const numberLevel = Number(ls.get("numberLevel"));
      const newLevel = numberLevel + 1;
      ls.set("numberLevel", `${newLevel}`);
      const view = new VievScoops(newLevel - 1);
      view.drawNewLevel();
      this.submit.addDisabled();
      this.input.clearInput();
      this.disabledLevelBtn();
      this.infoLevel.innerHTML = `${newLevel}`;
    });
  }

  viewResult() {
    const result = new Result();
    result.viewResult();
  }

  startButtons() {
    this.changeLevels();
    this.viewNumberLevel();
    this.addTable();
    this.addHiddenTableClick();
    this.addHiddenTableBody();
    this.visibleLevelsTable();
    this.disabledLevelBtn();
    this.startButtonsTable();
    this.addRefreshListener();
    this.changeLevelsTable();
    this.viewResult();
  }
}

export default ButtonsLevels;
