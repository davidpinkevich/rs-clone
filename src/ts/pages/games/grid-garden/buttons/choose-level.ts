import { LEVELS_GARDEN } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import drowLevels from "./drow-levels";

const chooseLevel = () => {
  const btns = <HTMLElement>document.querySelector(".settings__garden-levels");

  const last = <HTMLButtonElement>(
    document.querySelector(".settings__garden-levels-last")
  );
  last.style.background = "url(./assets/images/grid-garden/arrow-left.svg)";

  const next = <HTMLButtonElement>(
    document.querySelector(".settings__garden-levels-next")
  );
  next.style.background = "url(./assets/images/grid-garden/arrow-right.svg)";

  btns.addEventListener("click", (event: Event) => {
    const ls = new LocalStorage("gridGarden");
    if (Number(ls.get("numberLevel")) === LEVELS_GARDEN.START + 1) {
      last.disabled = true;
    } else if (Number(ls.get("numberLevel")) === LEVELS_GARDEN.END - 1) {
      next.disabled = true;
    }
    console.log(ls.getAll());
    if (event.target === last) {
      ls.set("numberLevel", `${Number(ls.get("numberLevel")) - 1}`);
      next.disabled = false;
      drowLevels();
    } else if (event.target === next) {
      ls.set("numberLevel", `${Number(ls.get("numberLevel")) + 1}`);
      last.disabled = false;
      drowLevels();
    }
  });
};

export default chooseLevel;
