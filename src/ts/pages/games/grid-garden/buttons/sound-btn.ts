const changeSoundGrid = () => {
  const soundBtn = <HTMLButtonElement>(
    document.querySelector(".settings__garden-sound")
  );

  const soundInfo = <HTMLElement>(
    document.querySelector(".settings__garden-sound>p")
  );

  const soundOn = new Audio(
    "https://codepip.com/wp-content/plugins/codepip/games/grid-garden/audio/correct.wav"
  );

  const soundOff = new Audio(
    "https://codepip.com/wp-content/plugins/codepip/games/grid-garden/audio/incorrect.wav"
  );

  soundBtn.addEventListener("click", () => {
    soundBtn.classList.toggle("sound__grid-on");
    if (soundBtn.classList.contains("sound__grid-on")) {
      soundInfo.innerHTML = ":ON";
      soundOn.play();
    } else {
      soundInfo.innerHTML = ":OFF";
      soundOff.play();
    }
  });
};

export default changeSoundGrid;
