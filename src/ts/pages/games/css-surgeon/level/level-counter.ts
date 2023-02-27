import surgeonStore from "../data/surgeon-store";

const levelCounter = (): void => {
  const currentEl = <HTMLElement>document.querySelector(".surgeon__current");
  const levelsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".surgeon__level");

  const { currentLevel } = surgeonStore;

  currentEl.textContent = `${currentLevel}`;

  for (let i = 0; i < levelsEl.length; i += 1) {
    levelsEl[i].classList.remove("surgeon__level_current");
  }

  levelsEl[currentLevel - 1].classList.add("surgeon__level_current");
};

export default levelCounter;
