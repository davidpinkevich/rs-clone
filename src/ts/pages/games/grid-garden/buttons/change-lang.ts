import { LANG_GRID } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import addRules from "../start-game/rules-add";
import changeLangItemsGrid from "./language-items";

const changeLangGrid = () => {
  const btn = <HTMLButtonElement>(
    document.querySelector(".settings__garden-lang")
  );
  const sound = <HTMLElement>(
    document.querySelector(".settings__garden-sound>span")
  );
  const level = <HTMLElement>(
    document.querySelector(".settings__garden-levels-list>p")
  );
  const next = <HTMLButtonElement>(
    document.querySelector(".code__garden-button")
  );

  const btns = [btn, sound, level, next];

  const ls = new LocalStorage("gridGarden");
  if (ls.get("lang") === "en") {
    btn.classList.add("grid__en");
    changeLangItemsGrid(btns, LANG_GRID.BTN_ENG);
  } else if (ls.get("lang") === "ru") {
    btn.classList.remove("grid__en");
    changeLangItemsGrid(btns, LANG_GRID.BTN_RU);
  }
  if (!ls.get("lang")) {
    ls.set("lang", "en");
  }

  btn.addEventListener("click", () => {
    const lsBtn = new LocalStorage("gridGarden");
    btn.classList.toggle("grid__en");
    if (btn.classList.contains("grid__en")) {
      changeLangItemsGrid(btns, LANG_GRID.BTN_ENG);
      lsBtn.set("lang", "en");
    } else {
      changeLangItemsGrid(btns, LANG_GRID.BTN_RU);
      lsBtn.set("lang", "ru");
    }
    addRules();
  });
};

export default changeLangGrid;
