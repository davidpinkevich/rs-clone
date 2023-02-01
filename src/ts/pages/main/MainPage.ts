import Page from "../abstract/page";

class MainPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = `<a href="#error-page">click to 404</a>`;
    return this.container;
  }
}

export default MainPage;
