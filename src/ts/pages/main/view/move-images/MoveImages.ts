class MoveImages {
  public body: HTMLElement;

  constructor(body: HTMLElement) {
    this.body = body;
  }

  moveBack() {
    const back = <HTMLElement>document.querySelector(".main__body");
    this.body.addEventListener("mousemove", (event: MouseEvent) => {
      back.style.transform = `translateX(${event.clientX / 80}px)`;
    });
  }

  movePlanet() {
    const planet = <HTMLElement>document.querySelector(".main__body-planet");
    this.body.addEventListener("mousemove", (event: MouseEvent) => {
      planet.style.transform = `translateX(${
        event.clientX / 100
      }px) translateY(${event.clientY / 200}px)`;
    });
  }

  moveStars() {
    const stars = <HTMLElement>document.querySelector(".main__body-stars");
    this.body.addEventListener("mousemove", (event: MouseEvent) => {
      stars.style.transform = `translateX(${
        event.clientX / 100
      }px) translateY(${event.clientY / 200}px)`;
    });
  }

  moveGroundRight() {
    const ground = <HTMLElement>(
      document.querySelector(".main__body-ground-right")
    );
    this.body.addEventListener("mousemove", (event: MouseEvent) => {
      ground.style.transform = `translateX(${event.clientX / 30}px)`;
    });
  }

  moveGroundLeft() {
    const ground = <HTMLElement>(
      document.querySelector(".main__body-ground-left")
    );
    this.body.addEventListener("mousemove", (event: MouseEvent) => {
      ground.style.transform = `translateX(${event.clientX / 30}px)`;
    });
  }

  moveStar() {
    const stars: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".move__wrapper-star"
    );
    this.body.addEventListener("mousemove", (event: MouseEvent) => {
      for (let i = 0; i < stars.length; i += 1) {
        stars[i].style.transform = `translateX(${
          event.clientX / 40
        }px) translateY(${event.clientY / 100}px)`;
      }
    });
  }

  startMove() {
    this.moveBack();
    this.movePlanet();
    this.moveStars();
    this.moveGroundRight();
    this.moveGroundLeft();
    this.moveStar();
  }
}

export default MoveImages;
