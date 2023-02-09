import levels from "../../data/data-levels";
import { getElementHTML } from "../ui";

class Carts {
  draw(level: number) {
    const elements = document.querySelector(".elements") as HTMLElement;
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

    setTimeout(() => {
      elements.classList.add("animate__fadeOutLeftBig");
    }, 1000);
    setTimeout(() => {
      elements.classList.remove("animate__fadeOutLeftBig");
    }, 1600);

    setTimeout(() => {
      elements.classList.add("animate__fadeInRightBig");
    }, 1600);
    setTimeout(() => {
      elements.classList.remove("animate__fadeInRightBig");
    }, 3000);

    // console.log(
    //   document.querySelectorAll(
    //     ".elements :nth-last-child(n + 3):nth-last-child(-n + 6)"
    //   )
    // );
  }
}

export default Carts;
