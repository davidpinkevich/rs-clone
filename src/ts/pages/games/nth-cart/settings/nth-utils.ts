import { INthLevel } from "../../../../types/types";

export const checkInput = (inputValue: string) => {
  if (/(^[ ]*(even|odd)[ ]*$)/.test(inputValue)) return true;

  const trimValue = inputValue.replace(/ /g, "");

  if (/n[\d]+/.test(trimValue) || trimValue === "") return false;

  const regexp = /^(([-+])?(\d+)?n)?\+?(\d+)?$/gm;
  return regexp.test(trimValue);
};

export const createSelectorString = (levelInfo: INthLevel) => {
  const inputs = document.querySelectorAll(".input");
  let selectorString = ".elements";
  levelInfo.styles.forEach((style, index) => {
    selectorString += index === 0 ? `${style}(` : `)${style}(`;
    selectorString += (inputs[index] as HTMLInputElement).value;
  });
  selectorString += ")";

  return selectorString;
};
