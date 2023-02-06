const hiddenTable = () => {
  const btn = <HTMLElement>(
    document.querySelector(".settings__garden-levels-list")
  );
  const level = <HTMLElement>(
    document.querySelector(".settings__garden-levels-list>p")
  );
  const levelNumber = <HTMLElement>(
    document.querySelector(".settings__garden-levels-list>span")
  );

  const { body } = document;

  const reset = <HTMLElement>document.querySelector(".state__levels-reset");
  const table = <HTMLElement>document.querySelector(".state__levels");
  table.style.display = "none";

  body.addEventListener("click", (event: Event) => {
    const target = <HTMLElement>event.target;
    const wrap = <HTMLElement>document.querySelector(".state__levels-wrapper");
    if (
      btn.classList.contains("table__grid") &&
      target !== table &&
      target !== wrap &&
      !target.classList.contains("state__levels-item") &&
      target !== reset &&
      target !== btn &&
      target !== level &&
      target !== levelNumber
    ) {
      table.style.display = "none";
      btn.classList.remove("table__grid");
    }
  });

  btn.addEventListener("click", () => {
    btn.classList.toggle("table__grid");

    if (!btn.classList.contains("table__grid")) {
      table.style.display = "none";
    } else {
      table.style.display = "";
    }
  });
};

export default hiddenTable;
