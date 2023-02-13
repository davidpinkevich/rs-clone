import { LEVELS_SCOOPS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import VievScoops from "../view/AppViev";
import Result from "./Result";

class SubmitButtonScoops {
  public btnSubmit: HTMLButtonElement;

  public inputCSS: HTMLInputElement;

  constructor() {
    this.btnSubmit = this.getButtonSubmit();
    this.inputCSS = this.getInput();
  }

  getButtonSubmit() {
    const submit = <HTMLButtonElement>(
      document.querySelector(".code__css-submit")
    );
    return submit;
  }

  getInput() {
    const input = <HTMLInputElement>document.querySelector(".code__css-input");
    return input;
  }

  addVisible() {
    this.btnSubmit.disabled = false;
  }

  addDisabled() {
    this.btnSubmit.disabled = true;
  }

  changeLevel() {
    this.btnSubmit.addEventListener("click", () => {
      const lastLevel = <HTMLButtonElement>(
        document.querySelector(".header__sidebar-levels-last")
      );
      const nextLevel = <HTMLButtonElement>(
        document.querySelector(".header__sidebar-levels-next")
      );
      const infoLevelTable = <HTMLElement>(
        document.querySelector(".header__sidebar-levels-main>span")
      );
      const ls = new LocalStorage("cssScoops");
      const numberLevel = Number(ls.get("numberLevel"));
      if (numberLevel === LEVELS_SCOOPS.END - 1) {
        nextLevel.disabled = true;
      }
      if (numberLevel === LEVELS_SCOOPS.END) {
        const mainPage = <HTMLElement>document.querySelector(".scoops");
        mainPage.classList.add("shadow");
        const result = new Result();
        result.openResult();
      }
      if (numberLevel !== LEVELS_SCOOPS.END) {
        infoLevelTable.innerHTML = `${numberLevel + 1}`;
        if (!ls.get("numberWins")) {
          ls.set("numberWins", JSON.stringify([numberLevel]));
        }
        const wins = JSON.parse(ls.get("numberWins"));
        if (!wins.includes(numberLevel)) {
          wins.push(numberLevel);
          ls.set("numberWins", JSON.stringify(wins));
        }
        ls.set("numberLevel", String(numberLevel + 1));
        const view = new VievScoops(numberLevel);
        view.drawNewLevel();
      } else {
        const wins = JSON.parse(ls.get("numberWins"));
        if (!wins.includes(numberLevel)) {
          wins.push(numberLevel);
          ls.set("numberWins", JSON.stringify(wins));
        }
      }
      this.addDisabled();
      this.inputCSS.value = "";
      lastLevel.disabled = false;
    });
  }
}

export default SubmitButtonScoops;
