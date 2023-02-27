const modal = (): void => {
  const modalEl = <HTMLElement>document.querySelector(".modal");
  const modalDialogEl = <HTMLElement>document.querySelector(".modal__dialog");

  modalEl.style.display = "block";
  setTimeout((): void => {
    modalDialogEl.style.opacity = "1";
    modalDialogEl.style.transform = "none";
  });
};

export default modal;
