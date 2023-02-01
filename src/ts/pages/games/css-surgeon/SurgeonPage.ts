import Page from "../../abstract/page";

class SurgeonPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = `<a href="#">click to main from surgeon</a>`;
    return this.container;
  }
}

export default SurgeonPage;
