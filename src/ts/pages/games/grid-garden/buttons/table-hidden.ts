const hiddenTable = () => {
  const btn = <HTMLElement>(
    document.querySelector(".settings__garden-levels-list")
  );
  const table = <HTMLElement>document.querySelector(".state__levels");
  table.style.display = "none";

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
