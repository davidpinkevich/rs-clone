import Coordinates from "../../../../utils/Coordinates";
import LocalStorage from "../../../../utils/LocalStorage";
import levels from "../data/data-levels";
import { setSound } from "./froggy-sound";

const setLevelsWrapperStyle = () => {
  const ls = new LocalStorage("froggy");
  const allLevels = Array.from(document.querySelectorAll(".level-marker"));
  const solvedLevels = JSON.parse(ls.get("completedLevels") || "[]");
  solvedLevels.forEach((level: number) => {
    allLevels[level - 1].classList.add("solved");
  });
};

export const updateStatePage = (level: number) => {
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  if (level === 1) {
    leftArrow?.classList.add("disabledButton");
  } else if (level === levels.length) {
    rightArrow?.classList.add("disabledButton");
  } else {
    leftArrow?.classList.remove("disabledButton");
    rightArrow?.classList.remove("disabledButton");
  }

  const levelLabel = document.querySelector(".level-indicator") as HTMLElement;
  levelLabel.textContent = `Level ${level} of 24 ▾`;

  const nextBtn = document.querySelector(".next-btn") as HTMLButtonElement;
  nextBtn.classList.add("disabledButton");

  const input = document.querySelector("#code") as HTMLTextAreaElement;
  input.value = "";

  setLevelsWrapperStyle();

  setSound();
};

export const isWin = () => {
  const frogContainers = Array.from(
    document.querySelectorAll(".frog__wrapper")
  );
  const lilyContainers = Array.from(
    document.querySelectorAll(".lily__wrapper")
  );

  for (let i = 0; i < frogContainers.length; i += 1) {
    const coordinates = new Coordinates(
      frogContainers[i] as HTMLElement,
      lilyContainers[i] as HTMLElement
    );
    if (!coordinates.comparisonСoordinates()) {
      return false;
    }
  }

  return true;
};

export const animateFrogs = () => {
  const frogWrappers = Array.from(document.querySelectorAll(".frog__wrapper"));

  frogWrappers.forEach((wrap) => {
    wrap.classList.add("animate__animated", "animate__bounceOutUp");
  });

  const sound = new LocalStorage("froggy").get("sound") || "on";
  setTimeout(() => {
    if (sound === "on") {
      (document.querySelector(".boing") as HTMLAudioElement).play();
    }
  }, 200);
};
