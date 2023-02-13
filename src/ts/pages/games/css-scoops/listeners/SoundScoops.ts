import { LEVELS_SCOOPS } from "../../../../data/goods-data";
import LocalStorage from "../../../../utils/LocalStorage";
import RefreshScoop from "./RefreshScoop";

class SoundScoops extends RefreshScoop {
  public btnSound: HTMLElement;

  public btnSubmit: HTMLButtonElement;

  constructor() {
    super();
    this.btnSound = this.getBtnSound();
    this.btnSubmit = this.getBtnSubmit();
  }

  getBtnSound() {
    const sound = <HTMLElement>(
      document.querySelector(".table__scoop-buttons-sound")
    );
    return sound;
  }

  getBtnSubmit() {
    const submit = <HTMLButtonElement>(
      document.querySelector(".code__css-submit")
    );
    return submit;
  }

  winLevelSound() {
    const audio = new Audio(
      "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/audio/correct.wav"
    );
    audio.play();
  }

  finishGame() {
    const audio = new Audio(
      "https://codepip.com/wp-content/plugins/codepip/games/css-scoops/audio/the-entertainer.mp3"
    );
    audio.play();
  }

  soundListener() {
    const img = <HTMLImageElement>(
      document.querySelector(".table__scoop-buttons-sound>img")
    );
    img.src = "./assets/images/scoops/sound-on.svg";
    this.btnSound.classList.add("scoop__sound-on");

    this.btnSound.addEventListener("click", () => {
      this.btnSound.classList.toggle("scoop__sound-on");
      if (this.btnSound.classList.contains("scoop__sound-on")) {
        img.src = "./assets/images/scoops/sound-on.svg";
      } else {
        img.src = "./assets/images/scoops/sound-off.svg";
      }
    });
  }

  soundGame() {
    this.btnSubmit.addEventListener("click", () => {
      const ls = new LocalStorage("cssScoops");
      const numberLevel = Number(ls.get("numberLevel"));
      if (this.btnSound.classList.contains("scoop__sound-on")) {
        this.winLevelSound();
        if (numberLevel === LEVELS_SCOOPS.END) {
          setTimeout(() => this.finishGame(), 3000);
        }
      }
    });
  }

  startButtonsTable() {
    this.soundListener();
    this.soundGame();
  }
}

export default SoundScoops;
