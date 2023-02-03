import RULES_GARDEN from "../data/rules";

const addRules = () => {
  const header = <HTMLElement>document.querySelector(".garden__info-rules");

  header.innerHTML = `${RULES_GARDEN.RULES[1]}`;
  console.log(header);
};

export default addRules;
