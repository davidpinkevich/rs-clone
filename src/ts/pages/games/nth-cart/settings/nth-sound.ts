import ls from "../data/ls";
import state from "../data/state";

const setVolume = () => {
  const allAudio = document.querySelectorAll("audio");
  allAudio.forEach((audio) => {
    const currAudio = audio;
    (currAudio as HTMLAudioElement).volume = state.audio === "on" ? 1 : 0;
  });
};

export const setSound = () => {
  const sound = state.audio;
  const soundImg = document.querySelector(".sound-img") as HTMLImageElement;
  soundImg.src = `./assets/images/froggy/sound-${sound}.svg`;

  setVolume();
};

export const toggleSound = () => {
  let sound = state.audio;
  sound = sound === "on" ? "off" : "on";
  state.audio = sound;
  ls.set("sound", sound);

  const soundImg = document.querySelector(".sound-img") as HTMLImageElement;
  soundImg.src = `./assets/images/froggy/sound-${sound}.svg`;

  setVolume();
};
