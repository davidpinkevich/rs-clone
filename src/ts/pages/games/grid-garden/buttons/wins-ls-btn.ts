import LocalStorage from "../../../../utils/LocalStorage";
import { LEVELS_GARDEN } from "../../../../data/goods-data";

const addWinsGridLS = () => {
  const lsWins = new LocalStorage("gridGardenWins");
  const lsNumber = new LocalStorage("gridGarden");
  const items: boolean[] = [];
  const number = Number(lsNumber.get("numberLevel"));

  if (!lsWins.get("numberWins")) {
    for (let i = 0; i < LEVELS_GARDEN.END; i += 1) {
      items.push(false);
    }
    lsWins.set("numberWins", JSON.stringify(items));
  } else {
    const wins = JSON.parse(lsWins.get("numberWins"));
    wins[number - 1] = true;
    lsWins.set("numberWins", JSON.stringify(wins));
  }
};

export default addWinsGridLS;
