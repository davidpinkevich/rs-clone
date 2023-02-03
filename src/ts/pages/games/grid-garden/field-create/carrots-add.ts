import RULES_GARDEN from "../data/rules";

const addCarrots = () => {
  const field = <HTMLElement>document.querySelector(".field__carrots");

  const carrot = document.createElement("div");
  carrot.classList.add("field__carrots-item");
  carrot.setAttribute("style", `${RULES_GARDEN.CARROT_RULES[2]}`);
  field.append(carrot);
};

export default addCarrots;
