import { LEVELS_GARDEN, GRID_LS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";

const addWinsGridLS = () => {
  const lsWins = new LocalStorage(GRID_LS.LS_WINS);
  const lsNumber = new LocalStorage(GRID_LS.LS_LEVELS);
  const items: boolean[] = [];
  const number = Number(lsNumber.get(GRID_LS.NUMBER_LEVEL));

  if (!lsWins.get(GRID_LS.NUMBER_WINS)) {
    for (let i = 0; i < LEVELS_GARDEN.END; i += 1) {
      items.push(false);
    }
    lsWins.set(GRID_LS.NUMBER_WINS, JSON.stringify(items));
  } else {
    const wins = JSON.parse(lsWins.get(GRID_LS.NUMBER_WINS));
    wins[number - 1] = true;
    lsWins.set(GRID_LS.NUMBER_WINS, JSON.stringify(wins));
  }
};

export default addWinsGridLS;
