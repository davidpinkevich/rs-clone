import LocalStorage from "../../../../utils/LocalStorage";

const resetLevels = () => {
  const allWins: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".state__levels-item"
  );

  const ls = new LocalStorage("gridGardenWins");
  if (ls) {
    const numberWins = JSON.parse(ls.get("numberWins"));

    const resetResult = numberWins.map(() => false);
    ls.set("numberWins", JSON.stringify(resetResult));
  }
  allWins.forEach((item) => {
    item.classList.remove("table__level-win");
  });
};

export default resetLevels;
