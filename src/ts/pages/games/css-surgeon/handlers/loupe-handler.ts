import loupe from "./loupe";

const loupeHandler = (): void => {
  const loupeEl = <HTMLElement>document.querySelector(".surgeon__see");

  loupeEl.addEventListener("click", loupe);
};

export default loupeHandler;
