class Result {
  public resultPage: HTMLElement;

  constructor() {
    this.resultPage = this.getResultPage();
  }

  getResultPage() {
    const page = <HTMLElement>document.querySelector(".result__scoops");
    return page;
  }

  viewResult() {
    const img = <HTMLElement>document.querySelector(".result__scoops-img");
    img.style.background = "url('./assets/images/scoops/ice.png') 50% 50%";
  }

  openResult() {
    this.resultPage.style.display = "flex";
  }
}

export default Result;
