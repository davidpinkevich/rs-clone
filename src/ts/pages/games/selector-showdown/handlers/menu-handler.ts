const menuHandler = (): void => {
  const indicatorEl = <HTMLElement>(
    document.querySelector(".showdown__indicator")
  );
  const menuEl = <HTMLElement>(
    document.querySelector(".showdown__levels-wrapper")
  );

  indicatorEl.addEventListener("click", (): void => {
    menuEl.style.display = "block";
  });

  document.body.addEventListener("click", (e): void => {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains("showdown__indicator") ||
      target.classList.contains("showdown__current") ||
      target.classList.contains("showdown__slash") ||
      target.classList.contains("showdown__total") ||
      target.classList.contains("showdown__caret") ||
      target.classList.contains("showdown__levels-wrapper") ||
      target.classList.contains("showdown__levels") ||
      target.classList.contains("btn__img") ||
      target.classList.contains("btn__volume")
    ) {
      return;
    }
    menuEl.style.display = "";
  });
};

export default menuHandler;
