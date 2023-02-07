import Page from "../../abstract/page";

class NthPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {}

  render() {
    this.container.innerHTML = `<a href="#">click to main from nth</a>`;
    return this.container;
  }
}

export default NthPage;
