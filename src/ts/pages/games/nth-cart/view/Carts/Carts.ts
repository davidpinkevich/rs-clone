import levels from "../../data/data-levels";
import { getElementHTML } from "../ui";

class Carts {
  draw(level: number) {
    const elementsWrapper = document.querySelector(".elements__wrapper");

    const elements = document.createElement("div");
    elements.classList.add("elements");
    elements.innerHTML = "";

    const levelInfo = levels[level - 1];
    levelInfo.carts.forEach((cart) => {
      const elementNode = document.createElement("div");
      elementNode.innerHTML = getElementHTML();

      if (cart === "target") {
        elementNode.querySelector(".element")?.classList.add(cart);
      }

      elements.innerHTML += elementNode.innerHTML;
    });
    (elementsWrapper as HTMLElement).innerHTML = "";
    elementsWrapper?.append(elements);

    setTimeout(() => {
      elements.classList.add("enter");
    }, 200);
  }
}

export default Carts;
