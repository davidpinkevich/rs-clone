import ls from "../data/ls";
import state from "../data/state";

class Sound {
  private setVolume() {
    const allAudio = document.querySelectorAll("audio");
    allAudio.forEach((audio) => {
      const currAudio = audio;
      (currAudio as HTMLAudioElement).volume = state.audio === "on" ? 1 : 0;
    });
  }

  public setSound() {
    const sound = state.audio;
    const soundImg = document.querySelector(".sound-img") as HTMLImageElement;
    soundImg.src = `./assets/images/froggy/sound-${sound}.svg`;

    this.setVolume();
  }

  public toggleSound() {
    let sound = state.audio;
    sound = sound === "on" ? "off" : "on";
    state.audio = sound;
    ls.set("sound", sound);

    const soundImg = document.querySelector(".sound-img") as HTMLImageElement;
    soundImg.src = `./assets/images/froggy/sound-${sound}.svg`;

    this.setVolume();
  }
}

export default Sound;
