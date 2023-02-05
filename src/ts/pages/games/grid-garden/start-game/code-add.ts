import RULES_GARDEN from "../data/rules";
import LocalStorage from "../../../../utils/LocalStorage";

const addCode = () => {
  const task = <HTMLElement>document.querySelector(".code__garden-task");
  task.innerHTML = "";
  const ls = new LocalStorage("gridGarden");
  const numberLvl = ls.get("numberLevel");

  if (Number(numberLvl) <= 10) {
    task.insertAdjacentHTML("afterbegin", RULES_GARDEN.TEXT__GARDEN[0]);
  } else {
    task.insertAdjacentHTML(
      "afterbegin",
      RULES_GARDEN.TEXT__GARDEN[Number(numberLvl) - 10]
    );
  }
  task.insertAdjacentHTML(
    "beforeend",
    RULES_GARDEN.TEXT__WATER[Number(numberLvl) - 1]
  );

  const lel: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".code__garden-task-text>span"
  );
  for (let i = 0; i < lel.length; i += 1) {
    lel[i].innerHTML = `${`${i + 1}.`}`;
  }
};

export default addCode;
