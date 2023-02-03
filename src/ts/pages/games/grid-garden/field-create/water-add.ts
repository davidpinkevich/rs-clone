import RULES_GARDEN from "../data/rules";

const addWater = () => {
  const field = <HTMLElement>document.querySelector(".field__water");

  const water = document.createElement("div");
  water.classList.add("field__water-item");
  water.setAttribute("style", `${RULES_GARDEN.WATER_RULES[1]}`);
  field.append(water);
  console.log(water);
};

export default addWater;
