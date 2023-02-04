import RULES_GARDEN from "../data/rules";
import LocalStorage from "../../../../utils/LocalStorage";

const addWater = () => {
  const field = <HTMLElement>document.querySelector(".field__water");

  const water = document.createElement("div");
  water.classList.add("field__water-item");
  const ls = new LocalStorage("gridGarden");
  const numberLvl = ls.get("numberLevel");
  // field.setAttribute("style", `${RULES_GARDEN.WATER_RULES[11]}`);  когда для garden по идее
  water.setAttribute(
    "style",
    `${RULES_GARDEN.WATER_RULES[Number(numberLvl) - 1]}`
  );
  field.append(water);
  console.log(water);
};

export default addWater;
