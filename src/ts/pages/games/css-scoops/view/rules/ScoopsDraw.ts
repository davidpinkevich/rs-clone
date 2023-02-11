import RULES_SCOOPS from "../../data/rules-scoops";

class DrawScoops {
  public numberLevel: number;

  public bodyRule: HTMLElement;

  public codeHTML: HTMLElement;

  constructor(
    numberLevel: number,
    bodyRule: HTMLElement,
    codeHTML: HTMLElement
  ) {
    this.numberLevel = numberLevel;
    this.bodyRule = bodyRule;
    this.codeHTML = codeHTML;
  }

  innerRule() {
    this.bodyRule.innerHTML = "";
    this.bodyRule.innerHTML = `${RULES_SCOOPS.RULE[this.numberLevel]}`;
  }

  innerHTML() {
    const itemsCode = RULES_SCOOPS.HTML_CODE[this.numberLevel];
    const numbers = <HTMLElement>(
      document.querySelector(".code__html-bottom-numbers")
    );

    numbers.innerHTML = "";
    this.codeHTML.innerHTML = "";
    itemsCode.forEach((item) => {
      this.codeHTML.insertAdjacentHTML("beforeend", item);
    });
    numbers.innerHTML = `${RULES_SCOOPS.HTML_CODE_NUMBERS[this.numberLevel]}`;
  }

  innerTotalViev() {
    this.innerRule();
    this.innerHTML();
  }
}

export default DrawScoops;
