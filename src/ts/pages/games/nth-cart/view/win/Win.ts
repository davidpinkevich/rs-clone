import getWinnersView from "./winUI";
import state from "../../data/state";
import ls from "../../data/ls";
import AppView from "../AppView";

class Win {
  public draw(pickedSelectors: NodeListOf<Element>) {
    const completedLevelsArray = state.completedLevels;
    completedLevelsArray.push(state.currentLevel);
    const uniqueLevels = Array.from(new Set(completedLevelsArray));
    ls.set("completedLevels", JSON.stringify(uniqueLevels));

    setTimeout(() => {
      pickedSelectors.forEach((picked) => {
        picked.classList.remove("target");
        picked.classList.add("win");

        const correct = document.querySelector(".correct") as HTMLAudioElement;
        correct.currentTime = 0;
        correct.play();
      });
    }, 1200);
    setTimeout(() => {
      pickedSelectors.forEach((picked) => {
        picked.classList.remove("picked");

        const drag = document.querySelector(".dragging") as HTMLAudioElement;
        drag.currentTime = 0;
        drag.play();
      });
    }, 2200);
    setTimeout(() => {
      pickedSelectors.forEach((picked) => {
        picked.classList.remove("win");
      });
    }, 2400);

    setTimeout(() => {
      const track = document.querySelector(".track") as HTMLElement;
      track.style.display = "none";

      const window = document.querySelector(".window") as HTMLElement;
      window.style.display = "none";

      const winNode = document.createElement("div");
      winNode.classList.add("winners-view");
      winNode.innerHTML = getWinnersView();

      const cave = document.querySelector(".cave") as HTMLElement;
      cave.append(winNode);

      this.backInGameListener();
    }, 3000);
  }

  private backInGameListener() {
    const back = document.querySelector(".back-in-game");
    back?.addEventListener("click", () => {
      state.currentLevel = 1;
      ls.set("currentLevel", String(state.currentLevel));

      const view = new AppView();
      view.drawLevel(state.currentLevel);

      const winnersView = document.querySelector(".winners-view");
      winnersView?.remove();
    });
  }
}

export default Win;
