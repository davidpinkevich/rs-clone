import checkRange from "./check-range";
import currLevel from "./current-level";
import showdownStore from "../data/showdown-store";
import lsShowdown from "../ls/ls-showdown";
import randomNumbers from "../utils/random-numbers";

const showLevel = (): void => {
  const instructionsEl = <HTMLElement>(
    document.querySelector(".showdown__instructions")
  );
  const panelTopEl = <HTMLElement>document.querySelector(".showdown__top");
  const selectorTopEl = <HTMLElement>(
    document.querySelector(".showdown__selector_top")
  );
  const specificityTopEl = <HTMLElement>(
    document.querySelector(".showdown__specificity_top")
  );
  const panelBottomEl = <HTMLElement>(
    document.querySelector(".showdown__bottom")
  );
  const selectorBottomEl = <HTMLElement>(
    document.querySelector(".showdown__selector_bottom")
  );
  const specificityBottomEl = <HTMLElement>(
    document.querySelector(".showdown__specificity_bottom")
  );

  const { currentLevel } = showdownStore;
  lsShowdown.set("curr", `${currentLevel}`);
  const { descr, info } = showdownStore.levels[currentLevel - 1];
  const [first, second] = randomNumbers(2);
  const selector1 = info[first].selector;
  const score1 = info[first].score;
  const selector2 = info[second].selector;
  const score2 = info[second].score;

  const score1Html = score1
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");
  const score2Html = score2
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  instructionsEl.innerHTML = descr;

  panelTopEl.setAttribute("data-score", score1);
  selectorTopEl.innerHTML = selector1;
  specificityTopEl.innerHTML = score1Html;

  panelBottomEl.setAttribute("data-score", score2);
  selectorBottomEl.innerHTML = selector2;
  specificityBottomEl.innerHTML = score2Html;

  currLevel();
  checkRange();
};

export default showLevel;
