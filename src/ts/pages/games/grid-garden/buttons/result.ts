import { GRID_LS } from "../../../../data/goods-data";
import drowResult from "../patterns/drow-result-grid";
import LocalStorage from "../../../../utils/LocalStorage";

const addResultGrid = () => {
  const body = <HTMLElement>document.querySelector(".garden");
  const ls = new LocalStorage(GRID_LS.LS_WINS);
  const wins: boolean[] = JSON.parse(ls.get(GRID_LS.NUMBER_WINS));
  const amountWins = wins.filter((item) => item === true).length;

  body.innerHTML = `${drowResult()}`;

  const img = <HTMLElement>document.querySelector(".grid__result-body-img");

  img.style.background = "url(./assets/images/grid-garden/carrot-result.svg)";

  const result = <HTMLElement>(
    document.querySelector(".grid__result-body-text>span")
  );

  result.innerHTML = `${amountWins}`;
};

export default addResultGrid;
