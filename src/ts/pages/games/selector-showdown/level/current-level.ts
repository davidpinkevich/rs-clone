import showdownStore from "../data/showdown-store";

const currLevel = (): void => {
  const levelsEl: NodeListOf<HTMLElement> =
    document.querySelectorAll(".btn__level");
  const currentEl = <HTMLElement>document.querySelector(".showdown__current");
  const totalEl = <HTMLElement>document.querySelector(".showdown__total");

  const { currentLevel, levels } = showdownStore;
  const total = levels.length;

  currentEl.textContent = `${currentLevel}`;
  totalEl.textContent = `${total}`;

  levelsEl.forEach((levelEl): void => {
    levelEl.classList.remove("btn__level_current");
  });
  levelsEl[currentLevel - 1].classList.add("btn__level_current");
};

export default currLevel;
