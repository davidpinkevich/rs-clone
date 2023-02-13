const volumeHandler = () => {
  const audioEl = <HTMLAudioElement>(
    document.querySelector(".surgeon__audio-correct")
  );
  const volumeBtn = <HTMLElement>document.querySelector(".surgeon__volume");

  let volume = 1;

  volumeBtn.addEventListener("click", () => {
    if (volume) {
      audioEl.volume = 0;
      volume = 0;
    } else {
      audioEl.volume = 1;
      volume = 1;
    }
  });
};

export default volumeHandler;
