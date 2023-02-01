import Page from "../../abstract/page";

class GardenPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = `<a href="#">click to main from garden</a>`;
    return this.container;
  }
}

export default GardenPage;
