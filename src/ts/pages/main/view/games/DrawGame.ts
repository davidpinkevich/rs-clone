import { GAMES_INFO } from "../../../../data/goods-data";

class DrawLevelGame {
  public numberLevel: number;

  constructor(numberLevel: number) {
    this.numberLevel = numberLevel;
  }

  drawLevel() {
    const img = <HTMLLinkElement>document.querySelector(".games__body-image");
    img.style.backgroundImage = `url("./assets/images/main-page/preview/${this.numberLevel}.png")`;
    img.href = `${GAMES_INFO.LINKS[this.numberLevel - 1]}`;

    const name = <HTMLElement>document.querySelector(".games__body-name");
    name.innerHTML = `${GAMES_INFO.NAME[this.numberLevel - 1]}`;

    const info = <HTMLElement>document.querySelector(".games__body-info");
    info.innerHTML = `${GAMES_INFO.INFO[this.numberLevel - 1]}`;
  }
}

export default DrawLevelGame;
