import { INthLevel } from "../../../../types/types";
import ls from "../data/ls";
import state from "../data/state";
import AppView from "../view/AppView";

export const checkInput = (inputValue: string) => {
  if (/(^[ ]*(even|odd)[ ]*$)/.test(inputValue)) return true;

  const trimValue = inputValue.replace(/ /g, "");

  if (/n[\d]+/.test(trimValue)) return false;

  const regexp = /^(([-+])?(\d+)?n)?\+?(\d+)?$/gm;
  return regexp.test(trimValue);
};

export const createSelectorString = (levelInfo: INthLevel) => {
  const inputs = document.querySelectorAll(".input");
  let selectorString = ".elements";
  levelInfo.styles.forEach((style, index) => {
    if ((inputs[index] as HTMLInputElement).value !== "") {
      selectorString += index === 0 ? `${style}(` : `)${style}(`;
      selectorString += (inputs[index] as HTMLInputElement).value;
    }
  });
  selectorString += ")";

  return selectorString;
};

export const isWin = () => {
  const pickedElements = document.querySelectorAll(".picked");
  const targetElements = document.querySelectorAll(".target");

  return (
    Array.from(pickedElements).every((pickedElement) =>
      pickedElement.classList.contains("target")
    ) && targetElements.length === pickedElements.length
  );
};

export const executeAfterWin = (pickedSelectors: NodeListOf<Element>) => {
  setTimeout(() => {
    pickedSelectors.forEach((picked) => {
      picked.classList.remove("target");
      picked.classList.add("win");
    });
  }, 1200);
  setTimeout(() => {
    pickedSelectors.forEach((picked) => {
      picked.classList.remove("picked");
    });
  }, 2200);
  setTimeout(() => {
    pickedSelectors.forEach((picked) => {
      picked.classList.remove("win");
    });
  }, 2400);

  setTimeout(() => {
    document.querySelector(".elements")?.classList.add("exit");
    document.querySelector(".instructions")?.classList.add("hidden");
    document.querySelector(".selectors")?.classList.add("hidden");
  }, 3400);

  setTimeout(() => {
    state.currentLevel += 1;
    ls.set("currentLevel", String(state.currentLevel));
    const view = new AppView();
    view.drawLevel(state.currentLevel);
  }, 4100);
};

export const changeLevel = () => {
  setTimeout(() => {
    document.querySelector(".elements")?.classList.add("exit");
    document.querySelector(".instructions")?.classList.add("hidden");
    document.querySelector(".selectors")?.classList.add("hidden");
  }, 300);

  setTimeout(() => {
    const view = new AppView();
    view.drawLevel(state.currentLevel);
  }, 800);
};
