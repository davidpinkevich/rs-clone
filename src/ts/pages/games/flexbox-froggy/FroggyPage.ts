import Page from "../../abstract/page";

class FroggyPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = `<a href="#">click to main from froggy</a>`;
    return this.container;
  }
}

export default FroggyPage;
