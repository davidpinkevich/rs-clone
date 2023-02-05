import LocalStorage from "../../../../utils/LocalStorage";
import drowLevels from "./drow-levels";
import addWinsGridLS from "./wins-ls";

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
    const ls = new LocalStorage("gridGarden");
    const numberLevel = Number(ls.get("numberLevel"));
    btnsTable[numberLevel - 1].classList.add("table__level-win");
    btnsTable[numberLevel - 1].classList.remove("table__level-active");
    btnsTable[numberLevel].classList.add("table__level-active");
    addWinsGridLS(numberLevel - 1);
    ls.set("numberLevel", `${numberLevel + 1}`);
    drowLevels();
  });
};

export default nextButtonLevelGrid;
