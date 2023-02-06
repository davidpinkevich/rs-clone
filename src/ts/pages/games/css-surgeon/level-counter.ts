import surgeonStore from "./data/surgeon-store";

const levelCounter = () => {
  const currentEl = <HTMLElement>document.querySelector(".surgeon__current");

  currentEl.textContent = `${surgeonStore.currentLevel}`;
};

export default levelCounter;
