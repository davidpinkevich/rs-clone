import LocalStorage from "../../../../utils/LocalStorage";
import { LEVELS_GARDEN } from "../../../../data/goods-data";

const addWinsGridLS = (number?: number) => {
  const ls = new LocalStorage("gridGardenWins");
  const items: boolean[] = [];
  const lsLevels = ls.get("numberWins");
  if (!lsLevels) {
    for (let i = 0; i < LEVELS_GARDEN.END; i += 1) {
      items.push(false);
    }
    ls.set("numberWins", JSON.stringify(items));
  } else {
    const wins = JSON.parse(ls.get("numberWins"));
    wins.splice(number, 1, true);
    ls.set("numberWins", JSON.stringify(wins));
  }
};

export default addWinsGridLS;
