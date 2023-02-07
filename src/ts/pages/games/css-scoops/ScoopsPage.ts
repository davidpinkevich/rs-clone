import Page from "../../abstract/page";

class ScoopsPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {}

  render() {
    this.container.innerHTML = `<a href="#">click to main from scoops</a>`;
    return this.container;
  }
}

export default ScoopsPage;
