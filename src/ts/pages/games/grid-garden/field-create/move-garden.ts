import RULES_GARDEN from "../data/rules";
import LocalStorage from "../../../../utils/LocalStorage";
import Coordinates from "../../../../utils/Coordinates";

const moveGarden = () => {
  const input = <HTMLInputElement>document.querySelector(".garden__input");
  const waterField = <HTMLElement>document.querySelector(".field__water");
  const groundField = <HTMLElement>document.querySelector(".field__ground");
  const carrotsField = <HTMLElement>document.querySelector(".field__carrots");

  const ls = new LocalStorage("gridGarden");
  const numberLvl = ls.get("numberLevel");

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
      console.log(test.comparisonСoordinates());
    });
  }
};

export default moveGarden;
