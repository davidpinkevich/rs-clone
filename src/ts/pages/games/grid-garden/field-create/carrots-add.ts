import RULES_GARDEN from "../data/rules";
import LocalStorage from "../../../../utils/LocalStorage";

const addCarrots = () => {
  const field = <HTMLElement>document.querySelector(".field__carrots");

  const carrot = document.createElement("div");
  carrot.classList.add("field__carrots-item");

  const svgImage = document.createElement("div");
  svgImage.classList.add("field__carrots-item-svg");
  carrot.append(svgImage);

  const ls = new LocalStorage("gridGarden");
  const numberLvl = ls.get("numberLevel");

  carrot.setAttribute(
    "style",
    `${RULES_GARDEN.CARROT_RULES[Number(numberLvl) - 1]}`
  );
  svgImage.style.background = "url(./assets/images/grid-garden/carrot-two.svg)";
  field.append(carrot);
};

export default addCarrots;
