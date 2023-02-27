import LocalStorage from "../../../../utils/LocalStorage";

export const setSound = () => {
  const ls = new LocalStorage("froggy");
  const sound = ls.get("sound") || "on";
  const soundImg = document.querySelector(".sound-img") as HTMLImageElement;
  soundImg.src = `./assets/images/froggy/sound-${sound}.svg`;
};

export const toggleSound = () => {
  const ls = new LocalStorage("froggy");
  let sound = ls.get("sound") || "on";
  sound = sound === "on" ? "off" : "on";
  ls.set("sound", sound);

  (document.querySelector(".win") as HTMLAudioElement).volume =
    sound === "on" ? 1 : 0;

  const soundImg = document.querySelector(".sound-img") as HTMLImageElement;
  soundImg.src = `./assets/images/froggy/sound-${sound}.svg`;
};
