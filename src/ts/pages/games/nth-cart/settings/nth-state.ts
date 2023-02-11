import levels from "../data/data-levels";
import state from "../data/state";

const updateState = () => {
  const prevBtn = document.querySelector(".prev-btn") as HTMLButtonElement;
  const nextBtn = document.querySelector(".next-btn") as HTMLButtonElement;
  if (state.currentLevel === 1) {
    prevBtn.classList.add("disabledButton");
  } else {
    prevBtn.classList.remove("disabledButton");
  }
  if (state.currentLevel === levels.length) {
    nextBtn.classList.add("disabledButton");
  } else {
    nextBtn.classList.remove("disabledButton");
  }

  (
    document.querySelector(".level-indicator") as HTMLElement
  ).textContent = `${state.currentLevel} 0f 40 ▾`;
};

export default updateState;
