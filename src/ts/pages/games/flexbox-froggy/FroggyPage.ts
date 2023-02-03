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
    const frogsContainer = this.container.querySelector(".frogs");
    const input = this.container.querySelector("#code") as HTMLTextAreaElement;
    input.addEventListener("input", () => {
      (frogsContainer as HTMLElement).style.cssText = input.value;
      console.log(this.isWin());
    });
  }

  isWin() {
    const frogContainers = Array.from(
      this.container.querySelectorAll(".frog__container")
    );
    console.log(frogContainers);
    const lilyContainers = Array.from(
      this.container.querySelectorAll(".lily__container")
    );
    console.log(lilyContainers);
    return true;
  }
}

export default FroggyPage;
