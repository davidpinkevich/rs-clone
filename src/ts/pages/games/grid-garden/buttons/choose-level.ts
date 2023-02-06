import { GRID_LS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import drowLevels from "./drow-levels";

const chooseLevel = () => {
  const btns = <HTMLElement>document.querySelector(".settings__garden-levels");
  const btn = <HTMLButtonElement>document.querySelector(".code__garden-button");
  const btnsTable: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".state__levels-item"
  );
  const last = <HTMLButtonElement>(
    document.querySelector(".settings__garden-levels-last")
  );
  last.style.background = "url(./assets/images/grid-garden/arrow-left.svg)";

  const next = <HTMLButtonElement>(
    document.querySelector(".settings__garden-levels-next")
  );
  next.style.background = "url(./assets/images/grid-garden/arrow-right.svg)";

  btns.addEventListener("click", (event: Event) => {
    const ls = new LocalStorage(GRID_LS.LS_LEVELS);
    const numberLevel = Number(ls.get("numberLevel"));
    if (event.target === last) {
      btnsTable.forEach((item) => {
        if (Number(item.getAttribute("data-level-grid")) === numberLevel - 1) {
          item.classList.add("table__level-active");
        } else {
          item.classList.remove("table__level-active");
        }
      });
      btn.disabled = true;
      btn.classList.remove("code__garden-button-active");
      ls.set(GRID_LS.NUMBER_LEVEL, `${numberLevel - 1}`);
      next.disabled = false;
      drowLevels();
    } else if (event.target === next) {
      btnsTable.forEach((item) => {
        if (Number(item.getAttribute("data-level-grid")) === numberLevel + 1) {
          item.classList.add("table__level-active");
        } else {
          item.classList.remove("table__level-active");
        }
      });
      btnsTable[numberLevel].classList.add("table__level-active");
      btn.disabled = true;
      btn.classList.remove("code__garden-button-active");
      ls.set(GRID_LS.NUMBER_LEVEL, `${numberLevel + 1}`);
      last.disabled = false;
      drowLevels();
    }
  });
};

export default chooseLevel;
