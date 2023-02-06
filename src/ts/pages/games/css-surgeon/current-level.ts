import surgeonStore from "./data/surgeon-store";

const currentLevel = () => {
  const itemsEl: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".surgeon__item_hide"
  );
  const nextBtn = <HTMLButtonElement>document.querySelector(".button__next");

  if (itemsEl.length === 0) {
    nextBtn.disabled = true;
    return;
  }

  const levels: number[] = [];

  itemsEl.forEach((itemEl) => {
    const level = Number(itemEl.getAttribute("data-level"));
    levels.push(level);
  });

  let nextLevels = levels.filter((level) => level > surgeonStore.currentLevel);

  if (nextLevels.length <= 1) {
    surgeonStore.currentLevel = 0;
    nextLevels = levels.filter((level) => level > surgeonStore.currentLevel);
  }

  console.log("Во время", levels, nextLevels);

  surgeonStore.currentLevel = Math.min(...nextLevels);
};

export default currentLevel;
