const changeSoundGrid = () => {
  const soundBtn = <HTMLButtonElement>(
    document.querySelector(".settings__garden-sound")
  );

  const imgBtn = <HTMLImageElement>document.querySelector(".sound__img-grid");

  const soundOn = new Audio(
    "https://codepip.com/wp-content/plugins/codepip/games/grid-garden/audio/correct.wav"
  );

  const soundOff = new Audio(
    "https://codepip.com/wp-content/plugins/codepip/games/grid-garden/audio/incorrect.wav"
  );

  soundBtn.addEventListener("click", () => {
    soundBtn.classList.toggle("sound__grid-on");
    if (soundBtn.classList.contains("sound__grid-on")) {
      imgBtn.src = "./assets/images/froggy/sound-on.svg";
      soundOn.play();
    } else {
      imgBtn.src = "./assets/images/froggy/sound-off.svg";
      soundOff.play();
    }
  });
};

export default changeSoundGrid;
