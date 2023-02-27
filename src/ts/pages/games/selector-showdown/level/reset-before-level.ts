const resetBeforeLevel = (): void => {
  const topEl = <HTMLElement>document.querySelector(".showdown__top");
  const bottomEl = <HTMLElement>document.querySelector(".showdown__bottom");
  const correctBtn = <HTMLElement>(
    document.querySelector(".showdown__btn_correct")
  );
  const incorrectBtn = <HTMLElement>(
    document.querySelector(".showdown__btn_incorrect")
  );
  const specificityTopEl = <HTMLElement>(
    document.querySelector(".showdown__specificity_top")
  );
  const specificityBottomEl = <HTMLElement>(
    document.querySelector(".showdown__specificity_bottom")
  );

  topEl.style.pointerEvents = "auto";
  bottomEl.style.pointerEvents = "auto";
  correctBtn.style.opacity = "0";
  incorrectBtn.style.opacity = "0";
  specificityTopEl.style.opacity = "0";
  specificityBottomEl.style.opacity = "0";
};

export default resetBeforeLevel;
