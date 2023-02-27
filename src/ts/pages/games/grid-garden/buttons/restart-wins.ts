import { LEVELS_GARDEN, GRID_LS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";

const restartAddWins = () => {
  const btnsTable: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".state__levels-item"
  );
  const items: boolean[] = [];
  const lsWins = new LocalStorage(GRID_LS.LS_WINS);

  if (lsWins.get(GRID_LS.NUMBER_WINS)) {
    const getWins = JSON.parse(lsWins.get(GRID_LS.NUMBER_WINS));

    getWins.forEach((item: boolean, index: number) => {
      if (item) btnsTable[index].classList.add("table__level-win");
    });
  } else {
    for (let i = 0; i < LEVELS_GARDEN.END; i += 1) {
      items.push(false);
    }
    lsWins.set(GRID_LS.NUMBER_WINS, JSON.stringify(items));
  }
};

export default restartAddWins;
