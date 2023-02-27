import lsShowdown from "../ls/ls-showdown";

const newHandler = (): void => {
  const newBtn = <HTMLElement>document.querySelector(".btn__new");

  newBtn.addEventListener("click", (): void => {
    lsShowdown.removeAll();
    window.location.reload();
  });
};

export default newHandler;
