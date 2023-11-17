import { LANG_GRID, GRID_LS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import addRules from "../start-game/rules-add";
import changeLangItemsGrid from "./language-items";

const changeLangGrid = () => {
  const btn = <HTMLButtonElement>(
    document.querySelector(".settings__garden-lang")
  );
  const level = <HTMLElement>(
    document.querySelector(".settings__garden-levels-list>p")
  );
  const next = <HTMLButtonElement>(
    document.querySelector(".code__garden-button")
  );

  const btns = [btn, level, next];

  const ls = new LocalStorage(GRID_LS.LS_LEVELS);
  if (ls.get(GRID_LS.LANG) === GRID_LS.LANG_ENG) {
    btn.classList.add("grid__en");
    changeLangItemsGrid(btns, LANG_GRID.BTN_ENG);
  } else if (ls.get(GRID_LS.LANG) === GRID_LS.LANG_RU) {
    btn.classList.remove("grid__en");
    changeLangItemsGrid(btns, LANG_GRID.BTN_RU);
  }
  if (!ls.get(GRID_LS.LANG)) {
    ls.set(GRID_LS.LANG, GRID_LS.LANG_ENG);
  }

  btn.addEventListener("click", () => {
    const lsBtn = new LocalStorage(GRID_LS.LS_LEVELS);
    btn.classList.toggle("grid__en");
    if (btn.classList.contains("grid__en")) {
      changeLangItemsGrid(btns, LANG_GRID.BTN_ENG);
      lsBtn.set(GRID_LS.LANG, GRID_LS.LANG_ENG);
    } else {
      changeLangItemsGrid(btns, LANG_GRID.BTN_RU);
      lsBtn.set(GRID_LS.LANG, GRID_LS.LANG_RU);
    }
    addRules();
  });
};

export default changeLangGrid;
