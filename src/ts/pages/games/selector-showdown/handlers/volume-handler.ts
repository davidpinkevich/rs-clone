import showdownStore from "../data/showdown-store";
import lsShowdown from "../ls/ls-showdown";

const volumeHandler = (): void => {
  const volumeBtn = <HTMLElement>document.querySelector(".btn__volume");
  const volumeImg = <HTMLImageElement>volumeBtn.querySelector(".btn__img");
  const correctAudio = <HTMLAudioElement>(
    document.querySelector(".audio__correct")
  );
  const incorrectAudio = <HTMLAudioElement>(
    document.querySelector(".audio__incorrect")
  );
  const winAudio = <HTMLAudioElement>document.querySelector(".audio__win");

  const volume = lsShowdown.get("volume");
  if (volume === "off") {
    showdownStore.volume = 0;
    volumeImg.src = "./assets/images/froggy/sound-off.svg";
    correctAudio.volume = 0;
    incorrectAudio.volume = 0;
    winAudio.volume = 0;
  } else {
    showdownStore.volume = 1;
    volumeImg.src = "./assets/images/froggy/sound-on.svg";
    correctAudio.volume = 1;
    incorrectAudio.volume = 1;
    winAudio.volume = 1;
  }

  volumeBtn.addEventListener("click", (): void => {
    if (showdownStore.volume === 1) {
      showdownStore.volume = 0;
      volumeImg.src = "./assets/images/froggy/sound-off.svg";
      correctAudio.volume = 0;
      incorrectAudio.volume = 0;
      winAudio.volume = 0;
      lsShowdown.set("volume", "off");
    } else {
      showdownStore.volume = 1;
      volumeImg.src = "./assets/images/froggy/sound-on.svg";
      correctAudio.volume = 1;
      incorrectAudio.volume = 1;
      winAudio.volume = 1;
      lsShowdown.set("volume", "on");
    }
  });
};

export default volumeHandler;
