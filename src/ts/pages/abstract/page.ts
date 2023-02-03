abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }

  exetuceAfterRender() {}

  render() {
    return this.container;
  }
}

export default Page;
