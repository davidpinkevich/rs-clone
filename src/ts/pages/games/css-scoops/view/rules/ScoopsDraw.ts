import RULES_SCOOPS from "../../data/rules-scoops";
import HtmlListeners from "../../listeners/HtmlListener";

class DrawScoops extends HtmlListeners {
  public numberLevel: number;

  public bodyRule: HTMLElement;

  public codeHTML: HTMLElement;

  constructor(
    numberLevel: number,
    bodyRule: HTMLElement,
    codeHTML: HTMLElement
  ) {
    super();
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

    const htmlBody = <HTMLElement>document.querySelector(".code__html-body");
    if (htmlBody) htmlBody.remove();
    const newHTMLBody = document.createElement("div");
    newHTMLBody.classList.add("code__html-body");

    this.codeHTML.append(newHTMLBody);
    numbers.innerHTML = "";
    itemsCode.forEach((item) => {
      newHTMLBody.insertAdjacentHTML("beforeend", item);
    });
    let numberString = "";
    for (
      let i = 0;
      i < RULES_SCOOPS.HTML_CODE_NUMBERS[this.numberLevel];
      i += 1
    ) {
      numberString += `${i + 1}<br>`;
    }
    numbers.innerHTML = `${numberString}`;

    this.addListener(newHTMLBody);
  }

  innerTotalViev() {
    this.innerRule();
    this.innerHTML();
  }
}

export default DrawScoops;
