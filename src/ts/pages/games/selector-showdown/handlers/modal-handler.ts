const modalHandler = (): void => {
  const modalEl = <HTMLElement>document.querySelector(".modal");
  const modalDialogEl = <HTMLElement>document.querySelector(".modal__dialog");

  modalEl.addEventListener("click", (e): void => {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains("modal") ||
      target.classList.contains("modal__close")
    ) {
      modalDialogEl.style.transform = "translate(0, -50px)";
      modalDialogEl.style.opacity = "0";
      setTimeout((): void => {
        modalEl.style.display = "none";
      }, 200);
    }
  });
};

export default modalHandler;
