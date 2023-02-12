class Environment {
  public draw() {
    (document.querySelector(".cave") as HTMLElement).style.backgroundImage =
      "url('./assets/images/nth-cart/background.png')";

    (document.querySelector(".left") as HTMLElement).style.backgroundImage =
      "url('./assets/images/nth-cart/wall.png')";
    (document.querySelector(".right") as HTMLElement).style.backgroundImage =
      "url('./assets/images/nth-cart/wall.png')";

    (document.querySelector(".ladder") as HTMLElement).style.backgroundImage =
      "url('./assets/images/nth-cart/ladder.png')";

    (document.querySelector(".table") as HTMLElement).style.backgroundImage =
      "url('./assets/images/nth-cart/table.png')";

    // console.log(document.querySelectorAll(".elements :nth-child(n + 5)"));
  }
}

export default Environment;
