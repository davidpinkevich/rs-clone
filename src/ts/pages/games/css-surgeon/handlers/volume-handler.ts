const volumeHandler = (): void => {
  const audioEl = <HTMLAudioElement>(
    document.querySelector(".surgeon__audio-correct")
  );
  const volumeBtn = <HTMLElement>document.querySelector(".surgeon__volume");
  const volumeImg = <HTMLImageElement>volumeBtn.querySelector("img");

  let volume = 1;

  volumeBtn.addEventListener("click", (): void => {
    if (volume) {
      volumeImg.src = "./assets/images/froggy/sound-off.svg";
      audioEl.volume = 0;
      volume = 0;
    } else {
      volumeImg.src = "./assets/images/froggy/sound-on.svg";
      audioEl.volume = 1;
      volume = 1;
    }
  });
};

export default volumeHandler;
