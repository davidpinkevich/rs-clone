import RULES_SCOOPS from "../data/rules-scoops";
import LocalStorage from "../../../../utils/LocalStorage";
import SubmitButtonScoops from "./SubmitButton";

class InputScoops {
  public input: HTMLInputElement;

  public arrayAnswers: Array<string[]>;

  public btn;

  constructor() {
    this.input = this.getInput();
    this.arrayAnswers = RULES_SCOOPS.ANSWER;
    this.btn = new SubmitButtonScoops();
  }

  getInput() {
    const input = <HTMLInputElement>document.querySelector(".code__css-input");
    return input;
  }

  clearInput() {
    this.input.value = "";
  }

  checkOne(level: number, answerInput: string) {
    const rulseAnswer = this.arrayAnswers[level][0];
    const answer = answerInput.trim().toLocaleLowerCase();
    if (answer === rulseAnswer) {
      this.btn.addVisible();
    } else {
      this.btn.addDisabled();
    }
  }

  checkTwo(level: number, answerInput: string) {
    const rulseAnswer = this.arrayAnswers[level];
    const answer = answerInput.split(" ");
    const newAnswer: string[] = [];
    answer.forEach((str) => {
      if (str !== "") newAnswer.push(str.toLowerCase());
    });
    if (JSON.stringify(rulseAnswer) === JSON.stringify(newAnswer)) {
      this.btn.addVisible();
    } else {
      this.btn.addDisabled();
    }
  }

  checkComma(level: number, answerInput: string) {
    const rulseAnswer = this.arrayAnswers[level];
    const answer = answerInput.split(",");
    const newAnswer: string[] = [];
    answer.forEach((str) => {
      if (str !== "") newAnswer.push(str.toLowerCase().trim());
    });
    const arrayCheck: boolean[] = [];
    rulseAnswer.forEach((str) => {
      if (newAnswer.includes(str)) arrayCheck.push(true);
    });
    if (
      arrayCheck.length === rulseAnswer.length &&
      newAnswer.length === rulseAnswer.length
    ) {
      this.btn.addVisible();
    } else {
      this.btn.addDisabled();
    }
  }

  checkSymbol(level: number, answerInput: string) {
    const rulseAnswer = this.arrayAnswers[level].slice(1);
    const symbol = this.arrayAnswers[level][0];

    const answer = answerInput.split(`${symbol}`);
    const newAnswer: string[] = [];
    answer.forEach((str) => {
      if (str !== "") newAnswer.push(str.toLowerCase().trim());
    });
    if (JSON.stringify(rulseAnswer) === JSON.stringify(newAnswer)) {
      this.btn.addVisible();
    } else {
      this.btn.addDisabled();
    }
  }

  inputText() {
    this.input.addEventListener("input", () => {
      const ls = new LocalStorage("cssScoops");
      const numberLevel = Number(ls.get("numberLevel"));
      const answer = this.input.value;

      if (numberLevel <= 6 || numberLevel === 17) {
        this.checkOne(numberLevel - 1, answer);
      } else if (numberLevel >= 7 && numberLevel <= 10) {
        this.checkTwo(numberLevel - 1, answer);
      } else if (numberLevel === 11 || numberLevel === 12) {
        this.checkComma(numberLevel - 1, answer);
      } else if (numberLevel >= 13 && numberLevel <= 20 && numberLevel !== 17) {
        this.checkSymbol(numberLevel - 1, answer);
      }
    });
  }
}

export default InputScoops;
