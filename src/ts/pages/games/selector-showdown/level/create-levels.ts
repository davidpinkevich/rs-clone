import showdownStore from "../data/showdown-store";

const createLevels = (): void => {
  const levelsEl = <HTMLElement>document.querySelector(".showdown__levels");

  const { levels } = showdownStore;

  levels.forEach(({ level }): void => {
    const button = document.createElement("button");
    button.textContent = `${level}`;
    button.setAttribute("data-level", `${level}`);
    button.setAttribute("class", "btn btn__level btn__level_locked");
    levelsEl.append(button);
  });
};

export default createLevels;
