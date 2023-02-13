import Sound from "./nth-sound";
import levels from "../data/data-levels";
import state from "../data/state";

class StatePage {
  private sound: Sound;

  constructor() {
    this.sound = new Sound();
  }

  updateState() {
    const track = document.querySelector(".track") as HTMLElement;
    track.style.display = "block";

    const window = document.querySelector(".window") as HTMLElement;
    window.style.display = "block";

    const prevBtn = document.querySelector(".prev-btn") as HTMLButtonElement;
    const nextBtn = document.querySelector(".next-btn") as HTMLButtonElement;
    if (state.currentLevel === 1) {
      prevBtn.classList.add("disabledButton");
    } else {
      prevBtn.classList.remove("disabledButton");
    }
    if (state.currentLevel === levels.length) {
      nextBtn.classList.add("disabledButton");
    } else {
      nextBtn.classList.remove("disabledButton");
    }

    (
      document.querySelector(".level-indicator") as HTMLElement
    ).textContent = `${state.currentLevel} 0f 40 ▾`;

    this.sound.setSound();
  }
}

export default StatePage;
