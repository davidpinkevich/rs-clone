import Coordinates from "../../../../utils/Coordinates";
import LocalStorage from "../../../../utils/LocalStorage";

export const setLevelsWrapperStyle = () => {
  const ls = new LocalStorage("froggy");
  const allLevels = Array.from(document.querySelectorAll(".level-marker"));
  const solvedLevels = JSON.parse(ls.get("completedLevels") || "[]");
  solvedLevels.forEach((level: number) => {
    allLevels[level - 1].classList.add("solved");
  });
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
