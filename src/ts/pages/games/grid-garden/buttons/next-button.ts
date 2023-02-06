import { GRID_LS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import drowLevels from "./drow-levels";
import addWinsGridLS from "./wins-ls-btn";
import addResultGrid from "./result";

const nextButtonLevelGrid = () => {
  const btn = <HTMLButtonElement>document.querySelector(".code__garden-button");
  const last = <HTMLButtonElement>(
    document.querySelector(".settings__garden-levels-last")
  );

  const btnsTable: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".state__levels-item"
  );

  btn.addEventListener("click", () => {
    btn.disabled = true;
    last.disabled = false;
    btn.classList.remove("code__garden-button-active");
    const ls = new LocalStorage(GRID_LS.LS_LEVELS);
    const numberLevel = Number(ls.get(GRID_LS.NUMBER_LEVEL));
    if (numberLevel !== 14) {
      btnsTable[numberLevel - 1].classList.add("table__level-win");
      btnsTable[numberLevel - 1].classList.remove("table__level-active");
      btnsTable[numberLevel].classList.add("table__level-active");
      addWinsGridLS();
      ls.set(GRID_LS.NUMBER_LEVEL, `${numberLevel + 1}`);
      drowLevels();
    } else {
      ls.set(GRID_LS.NUMBER_LEVEL, `${numberLevel}`);
      btnsTable[numberLevel - 1].classList.add("table__level-win");
      addWinsGridLS();
      addResultGrid();
    }
  });
};

export default nextButtonLevelGrid;

// import { GRID_LS } from "../../../../data/goods-data";
// import LocalStorage from "../../../../utils/LocalStorage";
// import drowLevels from "./drow-levels";
// import addWinsGridLS from "./wins-ls-btn";

// const nextButtonLevelGrid = () => {
//   const btn = <HTMLButtonElement>document.querySelector(".code__garden-button");
//   const last = <HTMLButtonElement>(
//     document.querySelector(".settings__garden-levels-last")
//   );

//   const btnsTable: NodeListOf<HTMLElement> = document.querySelectorAll(
//     ".state__levels-item"
//   );

//   btn.addEventListener("click", () => {
//     btn.disabled = true;
//     last.disabled = false;
//     btn.classList.remove("code__garden-button-active");
//     const ls = new LocalStorage(GRID_LS.LS_LEVELS);
//     const numberLevel = Number(ls.get(GRID_LS.NUMBER_LEVEL));
//     btnsTable[numberLevel - 1].classList.add("table__level-win");
//     btnsTable[numberLevel - 1].classList.remove("table__level-active");
//     btnsTable[numberLevel].classList.add("table__level-active");
//     addWinsGridLS();
//     ls.set(GRID_LS.NUMBER_LEVEL, `${numberLevel + 1}`);
//     drowLevels();
//   });
// };

// export default nextButtonLevelGrid;
