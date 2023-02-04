import { LEVELS_GARDEN } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import drowLevels from "./drow-levels";

const addTableLevels = () => {
  const table = <HTMLElement>document.querySelector(".state__levels");

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("state__levels-wrapper");
  table.append(tableContainer);

  for (let i = 1; i <= LEVELS_GARDEN.END; i += 1) {
    const item = document.createElement("div");
    item.classList.add("state__levels-item");
    item.innerHTML = `${i}`;
    item.setAttribute("data-level-grid", `${i}`);
    tableContainer.append(item);
  }

  tableContainer.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.dataset.levelGrid) {
      const ls = new LocalStorage("gridGarden");
      ls.set("numberLevel", target.dataset.levelGrid);
      const numberLevel = Number(ls.get("numberLevel"));
      console.log("numberLevel", numberLevel);
      drowLevels();

      const last = <HTMLButtonElement>(
        document.querySelector(".settings__garden-levels-last")
      );
      const next = <HTMLButtonElement>(
        document.querySelector(".settings__garden-levels-next")
      );

      if (numberLevel === LEVELS_GARDEN.START) {
        last.disabled = true;
        next.disabled = false;
      } else if (numberLevel === LEVELS_GARDEN.END) {
        last.disabled = false;
        next.disabled = true;
      } else {
        last.disabled = false;
        next.disabled = false;
      }
    }
  });
};

export default addTableLevels;
