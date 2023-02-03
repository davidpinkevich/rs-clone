import RULES_GARDEN from "../data/rules";
import Coordinates from "../../../../utils/Coordinates";

const moveWater = () => {
  const input = <HTMLInputElement>document.querySelector("input");

  input.addEventListener("input", () => {
    const water = <HTMLElement>document.querySelector(".field__water-item");
    const carrots = <HTMLElement>document.querySelector(".field__carrots-item");
    const text = RULES_GARDEN.WATER_RULES[2];
    const newStyles = `${text}${input.value}`;
    water.setAttribute("style", newStyles);
    const test = new Coordinates(carrots, water);
    test.comparisonСoordinates();
  });
};

export default moveWater;
