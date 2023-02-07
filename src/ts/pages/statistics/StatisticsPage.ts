import Page from "../abstract/page";

class StatisticsPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {}

  render() {
    this.container.innerHTML = `<a href="#">click to main from statistics</a>`;
    return this.container;
  }
}

export default StatisticsPage;
