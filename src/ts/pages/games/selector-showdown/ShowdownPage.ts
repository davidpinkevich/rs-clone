import Page from "../../abstract/page";

class ShowdownPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {}

  render() {
    this.container.innerHTML = `<a href="#">click to main from showdown</a>`;
    return this.container;
  }
}

export default ShowdownPage;
