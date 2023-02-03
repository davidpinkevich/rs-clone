import Page from "../../abstract/page";
import getPageHTML from "./view/ui";
import AppView from "./view/AppView";

class FroggyPage extends Page {
  private level: number;

  private view: AppView;

  constructor(id: string) {
    super(id);
    this.level = 1; // ... localstorage.getItem(...) || 1;
    this.view = new AppView(this.container);
  }

  executeAfterRender(): void {
    this.inputListener();
  }

  render() {
    this.container.innerHTML = getPageHTML();
    this.view.drawLevel(this.level);
    return this.container;
  }

  inputListener() {
    const frogsContainer = this.container.querySelector(
      ".frogs"
    ) as HTMLElement;
    const input = this.container.querySelector("#code") as HTMLTextAreaElement;
    input.addEventListener("input", () => {
      // this.setStylesFrogs(input.value);
      frogsContainer.style.cssText = input.value;
    });
  }

  // setStylesFrogs(inputValue: string) {
  //   const arrayStyles = inputValue.split(/\n/g).filter((style) => style !== "");
  //   arrayStyles.forEach((style) => {
  //     // массив свойств
  //     // const { styleKey, valueKey } = style.split(":");
  //     const entry = style.split(":");
  //   });
  // }
}

export default FroggyPage;
