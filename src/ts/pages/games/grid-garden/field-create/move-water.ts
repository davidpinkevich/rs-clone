import RULES_GARDEN from "../data/rules";
import Coordinates from "../../../../utils/Coordinates";
import LocalStorage from "../../../../utils/LocalStorage";

const moveWater = () => {
  const input = <HTMLInputElement>document.querySelector(".water__input");
  const btnNext = <HTMLButtonElement>(
    document.querySelector(".code__garden-button")
  );
  const ls = new LocalStorage("gridGarden");
  const numberLvl = ls.get("numberLevel");

  if (input) {
    input.addEventListener("input", () => {
      const water = <HTMLElement>document.querySelector(".field__water-item");
      const carrots = <HTMLElement>(
        document.querySelector(".field__carrots-item")
      );
      const text = RULES_GARDEN.WATER_RULES[Number(numberLvl) - 1];
      const newStyles = `${text}${input.value}`;
      water.setAttribute("style", newStyles);
      const test = new Coordinates(carrots, water);
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

export default moveWater;
