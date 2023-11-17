import { LEVELS_GARDEN, GRID_LS } from "../../../../data/goods-data";
import RULES_GARDEN from "../data/rules";
import LocalStorage from "../../../../utils/LocalStorage";

const addRules = () => {
  const header = <HTMLElement>document.querySelector(".garden__info-rules");
  header.innerHTML = "";
  const last = <HTMLButtonElement>(
    document.querySelector(".settings__garden-levels-last")
  );

  const next = <HTMLButtonElement>(
    document.querySelector(".settings__garden-levels-next")
  );

  const lvlInfo = <HTMLElement>(
    document.querySelector(".settings__garden-levels-list>span")
  );

  const ls = new LocalStorage(GRID_LS.LS_LEVELS);
  const levelGarden = Number(ls.get(GRID_LS.NUMBER_LEVEL));
  if (!ls.get(GRID_LS.LANG)) {
    ls.set(GRID_LS.LANG, GRID_LS.LANG_ENG);
  }
  const lang = ls.get(GRID_LS.LANG);
  if (!levelGarden) {
    ls.set(GRID_LS.NUMBER_LEVEL, `${LEVELS_GARDEN.START}`);
    last.disabled = true;
  } else if (levelGarden === LEVELS_GARDEN.START) {
    last.disabled = true;
  } else if (levelGarden === LEVELS_GARDEN.END) {
    next.disabled = true;
  }

  const numberLvl = ls.get(GRID_LS.NUMBER_LEVEL);
  lvlInfo.innerHTML = `${ls.get(GRID_LS.NUMBER_LEVEL)}`;

  if (lang === GRID_LS.LANG_ENG) {
    header.innerHTML = `${RULES_GARDEN.RULES_ENG[Number(numberLvl) - 1]}`;
  } else if (lang === GRID_LS.LANG_RU) {
    header.innerHTML = `${RULES_GARDEN.RULES_RU[Number(numberLvl) - 1]}`;
  }
};

export default addRules;
