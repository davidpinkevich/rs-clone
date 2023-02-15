class MainPageView {
  drawElemBack() {
    const elemBackground = <HTMLElement>document.querySelector(".main__body");
    elemBackground.style.backgroundImage =
      "url(./assets/images/main-page/background.jpg)";
  }

  drawPlanet() {
    const planet = <HTMLElement>document.querySelector(".main__body-planet");
    planet.style.backgroundImage = "url(./assets/images/main-page/planet.svg)";
  }

  drawStars() {
    const stars = <HTMLElement>document.querySelector(".main__body-stars");
    stars.style.backgroundImage = "url(./assets/images/main-page/stars.svg)";
  }

  drawGroundRigth() {
    const ground = <HTMLElement>(
      document.querySelector(".main__body-ground-right")
    );
    ground.style.backgroundImage =
      "url(./assets/images/main-page/ground-right.svg)";
  }

  drawGroundLeft() {
    const ground = <HTMLElement>(
      document.querySelector(".main__body-ground-left")
    );
    ground.style.backgroundImage =
      "url(./assets/images/main-page/ground-left.svg)";
  }

  drawStar() {
    const star: NodeListOf<HTMLElement> =
      document.querySelectorAll(".main__body-star");
    for (let i = 0; i < star.length; i += 1) {
      star[i].style.backgroundImage = "url(./assets/images/main-page/star.svg)";
    }
  }

  drawArrow() {
    const last = <HTMLButtonElement>(
      document.querySelector(".games__body-last-img")
    );
    last.style.backgroundImage = "url(./assets/images/main-page/arrow.svg)";

    const next = <HTMLButtonElement>(
      document.querySelector(".games__body-next-img")
    );
    next.style.backgroundImage = "url(./assets/images/main-page/arrow.svg)";
  }

  drawFooter() {
    const gits: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".main__footer-git-person"
    );
    for (let i = 0; i < gits.length; i += 1) {
      gits[i].style.backgroundImage = "url(./assets/images/main-page/git.png)";
    }

    const rs = <HTMLElement>document.querySelector(".main__footer-rs-img");
    rs.style.backgroundImage = "url(./assets/images/main-page/rs.svg)";
  }

  drawPage() {
    this.drawElemBack();
    this.drawPlanet();
    this.drawStars();
    this.drawGroundRigth();
    this.drawGroundLeft();
    this.drawStar();
    this.drawArrow();
    this.drawFooter();
  }
}

export default MainPageView;
