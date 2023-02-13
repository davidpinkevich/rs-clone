import LocalStorage from "../../../../utils/LocalStorage";
import levels from "../data/data-levels";
import { setLevelsWrapperStyle } from "./froggy-utils";
import { setSound } from "./froggy-sound";
import { setLanguage } from "./froggy-language";

const updateStatePage = (level: number) => {
  const view = document.querySelector("#view") as HTMLElement;
  view.style.display = "block";
  const editor = document.querySelector(".editor") as HTMLElement;
  editor.style.display = "block";
  const controlsLanguage = document.querySelector(".controls-language");
  (controlsLanguage as HTMLElement).style.display = "block";

  (document.querySelector(".win") as HTMLAudioElement).pause();

  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  if (level === 1) {
    leftArrow?.classList.add("disabledButton");
  } else {
    leftArrow?.classList.remove("disabledButton");
  }
  if (level === levels.length) {
    rightArrow?.classList.add("disabledButton");
  } else {
    rightArrow?.classList.remove("disabledButton");
  }

  const language = new LocalStorage("froggy").get("language") || "en";
  const levelLabel = document.querySelector(".level-indicator") as HTMLElement;
  levelLabel.textContent =
    language === "en" ? `Level ${level} of 24 ▾` : `Уровень ${level} из 24 ▾`;
  const resetLabel = document.querySelector(".label-reset") as HTMLElement;
  resetLabel.textContent = language === "en" ? "Reset" : "Сбросить";

  const nextBtn = document.querySelector(".next-btn") as HTMLButtonElement;
  nextBtn.textContent = language === "en" ? "Next" : "Следующий";
  nextBtn.classList.add("disabledButton");

  const input = document.querySelector("#code") as HTMLTextAreaElement;
  input.value = "";

  setLevelsWrapperStyle();

  setSound();
  setLanguage();
};

export default updateStatePage;
