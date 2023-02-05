import LocalStorage from "../../../../utils/LocalStorage";

const addActiveLevelGarden = () => {
  const table = <HTMLElement>document.querySelector(".state__levels-wrapper");
  const items: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".state__levels-item"
  );

  const lsItems = new LocalStorage("gridGarden");
  const lsWins = new LocalStorage("gridGardenWins");
  const numberLevel = lsItems.get("numberLevel");
  const numberWins = JSON.parse(lsWins.get("numberWins"));

  items.forEach((item) => {
    if (item.dataset.levelGrid === numberLevel) {
      item.classList.add("table__level-active");
    } else {
      item.classList.remove("table__level-active");
    }
  });

  numberWins.forEach((item: boolean, index: number) => {
    if (item) {
      items[index].classList.add("table__level-win");
    } else {
      items[index].classList.remove("table__level-win");
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
