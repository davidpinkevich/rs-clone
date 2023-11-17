import { INthLevel } from "../../../../types/types";
import ls from "../data/ls";
import state from "../data/state";
import AppView from "../view/AppView";

class Utils {
  private view: AppView;

  constructor() {
    this.view = new AppView();
  }

  public checkInput(inputValue: string) {
    if (/(^[ ]*(even|odd)[ ]*$)/.test(inputValue)) return true;

    const trimValue = inputValue.replace(/ /g, "");

    if (/n[\d]+/.test(trimValue)) return false;

    const regexp = /^(([-+])?(\d+)?n)?\+?(\d+)?$/gm;
    return regexp.test(trimValue);
  }

  public createSelectorString(levelInfo: INthLevel) {
    const inputs = document.querySelectorAll(".input");
    let selectorString = ".elements";
    levelInfo.styles.forEach((style, index) => {
      if ((inputs[index] as HTMLInputElement).value !== "") {
        selectorString += index === 0 ? `${style}(` : `)${style}(`;
        selectorString += (inputs[index] as HTMLInputElement).value;
      }
    });
    selectorString += ")";

    return selectorString;
  }

  public isWin() {
    const pickedElements = document.querySelectorAll(".picked");
    const targetElements = document.querySelectorAll(".target");

    return (
      Array.from(pickedElements).every((pickedElement) =>
        pickedElement.classList.contains("target")
      ) && targetElements.length === pickedElements.length
    );
  }

  public executeAfterWin(pickedSelectors: NodeListOf<Element>) {
    setTimeout(() => {
      pickedSelectors.forEach((picked) => {
        picked.classList.remove("target");
        picked.classList.add("win");

        const correctAud = document.querySelector(
          ".correct"
        ) as HTMLAudioElement;
        correctAud.currentTime = 0;
        correctAud.play();
      });
    }, 1200);
    setTimeout(() => {
      pickedSelectors.forEach((picked) => {
        picked.classList.remove("picked");

        const dragAudio = document.querySelector(
          ".dragging"
        ) as HTMLAudioElement;
        dragAudio.currentTime = 0;
        dragAudio.play();
      });
    }, 2200);
    setTimeout(() => {
      pickedSelectors.forEach((picked) => {
        picked.classList.remove("win");
      });
    }, 2400);

    setTimeout(() => {
      const trolleyAudio = document.querySelector(
        ".trolley"
      ) as HTMLAudioElement;
      trolleyAudio.currentTime = 0;
      trolleyAudio.play();

      document.querySelector(".elements")?.classList.add("exit");
      document.querySelector(".instructions")?.classList.add("hidden");
      document.querySelector(".selectors")?.classList.add("hidden");
    }, 3400);

    setTimeout(() => {
      state.currentLevel += 1;
      ls.set("currentLevel", String(state.currentLevel));
      this.view.drawLevel(state.currentLevel);
    }, 4100);

    const completedLevelsArray = state.completedLevels;
    completedLevelsArray.push(state.currentLevel);
    const uniqueLevels = Array.from(new Set(completedLevelsArray));
    ls.set("completedLevels", JSON.stringify(uniqueLevels));
  }

  public changeLevel() {
    setTimeout(() => {
      const trolleyAudio = document.querySelector(
        ".trolley"
      ) as HTMLAudioElement;
      trolleyAudio.currentTime = 0;
      trolleyAudio.play();

      document.querySelector(".elements")?.classList.add("exit");
      document.querySelector(".instructions")?.classList.add("hidden");
      document.querySelector(".selectors")?.classList.add("hidden");
    }, 300);

    setTimeout(() => {
      this.view.drawLevel(state.currentLevel);
    }, 800);
  }
}

export default Utils;
