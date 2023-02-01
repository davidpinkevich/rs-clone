import Page from "../abstract/page";

class ErrorPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = `<a href="#">click to main from error</a>`;
    return this.container;
  }
}

export default ErrorPage;
