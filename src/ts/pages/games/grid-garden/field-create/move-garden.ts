import { GRID_LS } from "../../../../data/goods-data";
import RULES_GARDEN from "../data/rules";
import LocalStorage from "../../../../utils/LocalStorage";
import Coordinates from "../../../../utils/Coordinates";

const moveGarden = () => {
  const input = <HTMLInputElement>document.querySelector(".garden__input");
  const waterField = <HTMLElement>document.querySelector(".field__water");
  const groundField = <HTMLElement>document.querySelector(".field__ground");
  const carrotsField = <HTMLElement>document.querySelector(".field__carrots");

  const btnNext = <HTMLButtonElement>(
    document.querySelector(".code__garden-button")
  );

  const ls = new LocalStorage(GRID_LS.LS_LEVELS);
  const numberLvl = ls.get(GRID_LS.NUMBER_LEVEL);

  carrotsField.setAttribute(
    "style",
    `${RULES_GARDEN.CARROT_RULES[Number(numberLvl) - 1]}`
  );

  if (input) {
    input.addEventListener("input", () => {
      const text = `${input.value}`;
      groundField.setAttribute("style", text);
      waterField.setAttribute("style", text);
      const carr = <HTMLElement>document.querySelector(".field__carrots-item");
      const water = <HTMLElement>document.querySelector(".field__water-item");
      const test = new Coordinates(carr, water);
      if (test.comparisonСoordinates()) {
        btnNext.disabled = false;
        btnNext.classList.add("code__garden-button-active");
      } else {
        btnNext.disabled = true;
        btnNext.classList.remove("code__garden-button-active");
      }
    });
  }
};

export default moveGarden;
