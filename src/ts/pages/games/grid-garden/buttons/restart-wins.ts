import { LEVELS_GARDEN } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";

const restartAddWins = () => {
  const btnsTable: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".state__levels-item"
  );
  const items: boolean[] = [];
  const lsWins = new LocalStorage("gridGardenWins");

  if (lsWins.get("numberWins")) {
    const getWins = JSON.parse(lsWins.get("numberWins"));

    getWins.forEach((item: boolean, index: number) => {
      if (item) btnsTable[index].classList.add("table__level-win");
    });
  } else {
    for (let i = 0; i < LEVELS_GARDEN.END; i += 1) {
      items.push(false);
    }
    lsWins.set("numberWins", JSON.stringify(items));
  }
};

export default restartAddWins;
