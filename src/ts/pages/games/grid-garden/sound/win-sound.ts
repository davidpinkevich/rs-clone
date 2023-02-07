const addWinSoundGrid = () => {
  const soundBtn = <HTMLButtonElement>(
    document.querySelector(".settings__garden-sound")
  );

  const audio = new Audio(
    "https://codepip.com/wp-content/plugins/codepip/games/grid-garden/audio/correct.wav"
  );

  if (soundBtn.classList.contains("sound__grid-on")) audio.play();
};

export default addWinSoundGrid;
