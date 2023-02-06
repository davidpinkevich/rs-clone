import { GRID_LS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";

const resetLevels = () => {
  const allWins: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".state__levels-item"
  );

  const ls = new LocalStorage(GRID_LS.LS_WINS);
  if (ls) {
    const numberWins = JSON.parse(ls.get(GRID_LS.NUMBER_WINS));

    const resetResult = numberWins.map(() => false);
    ls.set(GRID_LS.NUMBER_WINS, JSON.stringify(resetResult));
  }
  allWins.forEach((item) => {
    item.classList.remove("table__level-win");
  });
};

export default resetLevels;
