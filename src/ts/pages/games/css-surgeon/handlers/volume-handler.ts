const volumeHandler = (): void => {
  const audioEl = <HTMLAudioElement>(
    document.querySelector(".surgeon__audio-correct")
  );
  const volumeBtn = <HTMLElement>document.querySelector(".surgeon__volume");
  const volumeImg = <HTMLImageElement>volumeBtn.querySelector("img");

  let volume = 1;

  volumeBtn.addEventListener("click", (): void => {
    if (volume) {
      volumeImg.src =
        "https://cdn0.iconfinder.com/data/icons/zondicons/20/volume-off-256.png";
      audioEl.volume = 0;
      volume = 0;
    } else {
      volumeImg.src =
        "https://cdn4.iconfinder.com/data/icons/font-awesome-2/2048/f028-512.png";
      audioEl.volume = 1;
      volume = 1;
    }
  });
};

export default volumeHandler;
