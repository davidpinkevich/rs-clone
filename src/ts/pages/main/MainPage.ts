import Page from "../abstract/page";

class MainPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = `
      <a style="margin-right: 20px" href="#surgeon">click to surgeon page</a>
      <a style="margin-right: 20px" href="#froggy">click to froggy page</a>
      <a style="margin-right: 20px" href="#garden">click to garden page</a>
      <a style="margin-right: 20px" href="#scoops">click to scoops page</a>
      <a style="margin-right: 20px" href="#nth">click to nth page</a>
      <a style="margin-right: 20px" href="#showdown">click to showdown page</a>
      <a style="margin-right: 20px" href="#statistics">click to statistics page</a>
      <a href="#error-page">click to 404</a>
      `;
    return this.container;
  }
}

export default MainPage;
