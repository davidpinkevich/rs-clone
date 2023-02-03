import RULES_GARDEN from "../data/rules";

const addCode = () => {
  const task = <HTMLElement>document.querySelector(".code__garden-task");

  task.insertAdjacentHTML("beforeend", RULES_GARDEN.CODE[1]);
};

export default addCode;
