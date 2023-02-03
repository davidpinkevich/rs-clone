import RULES_GARDEN from "../data/rules";

const createField = () => {
  const body = <HTMLElement>document.querySelector(".garden__game");

  const fieldGround = document.createElement("div");
  fieldGround.classList.add("field__ground");

  const fieldWater = document.createElement("div");
  fieldWater.classList.add("field__water");

  const fieldCarrots = document.createElement("div");
  fieldCarrots.classList.add("field__carrots");

  body.append(fieldGround);
  body.append(fieldWater);
  body.append(fieldCarrots);

  for (let i = 0; i < RULES_GARDEN.FIELD; i += 1) {
    const item = document.createElement("div");
    item.classList.add("field__ground-item");
    fieldGround.append(item);
  }
};

export default createField;
