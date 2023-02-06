import { LEVELS_GARDEN } from "../../../../data/goods-data";
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

  const ls = new LocalStorage("gridGarden");
  const levelGarden = Number(ls.get("numberLevel"));
  if (!ls.get("lang")) {
    ls.set("lang", "en");
  }
  const lang = ls.get("lang");
  if (!levelGarden) {
    ls.set("numberLevel", `${LEVELS_GARDEN.START}`);
    last.disabled = true;
  } else if (levelGarden === LEVELS_GARDEN.START) {
    last.disabled = true;
  } else if (levelGarden === LEVELS_GARDEN.END) {
    next.disabled = true;
  }

  const numberLvl = ls.get("numberLevel");
  lvlInfo.innerHTML = `${ls.get("numberLevel")}`;
  console.log("numberLvl: ", numberLvl);

  if (lang === "en") {
    header.innerHTML = `${RULES_GARDEN.RULES_ENG[Number(numberLvl) - 1]}`;
  } else if (lang === "ru") {
    header.innerHTML = `${RULES_GARDEN.RULES_RU[Number(numberLvl) - 1]}`;
  }
};

export default addRules;
