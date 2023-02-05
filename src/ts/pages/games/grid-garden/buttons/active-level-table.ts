import LocalStorage from "../../../../utils/LocalStorage";

const addActiveLevelGarden = () => {
  const table = <HTMLElement>document.querySelector(".state__levels-wrapper");
  const items: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".state__levels-item"
  );

  const ls = new LocalStorage("gridGarden");
  const numberLevel = ls.get("numberLevel");

  items.forEach((item) => {
    if (item.dataset.levelGrid === numberLevel) {
      item.classList.add("table__level-active");
    } else {
      item.classList.remove("table__level-active");
    }
  });

  table.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.dataset.levelGrid) {
      items.forEach((item) => {
        if (item.dataset.levelGrid === target.dataset.levelGrid) {
          item.classList.add("table__level-active");
        } else {
          item.classList.remove("table__level-active");
        }
      });
    }
  });
};

export default addActiveLevelGarden;
