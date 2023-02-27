import LocalStorage from "../../../../../utils/LocalStorage";
import getWinHTML from "./winUI";

class Win {
  private static winMessage: { [key: string]: string } = {
    en: `You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are! We hope you found this adventure ribbeting.`,
    ru: `Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до своих лилий. Просто взгляни, как они счастливы!`,
  };

  draw() {
    const view = document.querySelector("#view") as HTMLElement;
    view.style.display = "none";

    const editor = document.querySelector(".editor") as HTMLElement;
    editor.style.display = "none";

    const controlsLanguage = document.querySelector(".controls-language");
    (controlsLanguage as HTMLElement).style.display = "none";

    const winNode = document.createElement("div");
    winNode.innerHTML = getWinHTML();

    const ls = new LocalStorage("froggy");
    const language = ls.get("language") || "en";
    const winMessage = winNode.querySelector(".win-message") as HTMLElement;
    winMessage.textContent = Win.winMessage[language];

    const instructions = document.querySelector(".instructions") as HTMLElement;
    instructions.innerHTML = winNode.innerHTML;

    const sound = new LocalStorage("froggy").get("sound") || "on";
    if (sound === "on") {
      (document.querySelector(".win") as HTMLAudioElement).play();
    }
  }
}

export default Win;
