import Page from "../abstract/page";
import getErrorPage from "./ui";

class ErrorPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = getErrorPage();
    return this.container;
  }
}

export default ErrorPage;
