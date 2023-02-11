// import { LINKS_SCOOPS } from "../../../../data/goods-data";
import RULES_SCOOPS from "../data/rules-scoops";
import DrawScoops from "./rules/ScoopsDraw";
// import Cup from "../patterns/Cup";
// import Cone from "./cone/Cone";
// import Scoop from "./scoop/Scoop";
import Portion from "./portion/Portion";

class VievScoops {
  public numberLevel: number;

  constructor(numberLevel: number) {
    this.numberLevel = numberLevel;
  }

  renderViev() {
    const rulesBody = <HTMLElement>(
      document.querySelector(".body__sidebar-rules")
    );
    const htmlBody = <HTMLElement>document.querySelector(".code__html-body");

    const rule = new DrawScoops(this.numberLevel, rulesBody, htmlBody);
    rule.innerTotalViev();
  }

  renderWindow() {
    // сюда надо вставить наши столбики с разными штуками
    const window = <HTMLElement>document.querySelector(".window__scoops");

    window.innerHTML = "";

    const portion = new Portion(RULES_SCOOPS.SCOOPS[this.numberLevel], window);
    portion.createPortion();
  }

  drawNewLevel() {
    this.renderViev();
    this.renderWindow();
  }
}

export default VievScoops;
