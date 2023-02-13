import createWinner from "./create-winner";
import surgeonStore from "../data/surgeon-store";

const currentLevel = (): void => {
  const itemsEl: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".surgeon__item_hide"
  );

  if (itemsEl.length === 0) {
    createWinner();
    return;
  }

  const levels: number[] = [];

  itemsEl.forEach((itemEl): void => {
    const level = Number(itemEl.getAttribute("data-level"));
    levels.push(level);
  });

  let nextLevels = levels.filter((level) => level > surgeonStore.currentLevel);

  if (nextLevels.length <= 1) {
    surgeonStore.currentLevel = 0;
    nextLevels = levels.filter((level) => level > surgeonStore.currentLevel);
  }

  surgeonStore.currentLevel = Math.min(...nextLevels);
};

export default currentLevel;
