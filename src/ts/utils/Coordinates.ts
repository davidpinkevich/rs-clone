class Coordinates {
  private firstElem: DOMRect;

  private secondElem: DOMRect;

  constructor(firstElem: HTMLElement, secondElem: HTMLElement) {
    this.firstElem = firstElem.getBoundingClientRect();
    this.secondElem = secondElem.getBoundingClientRect();
  }

  comparisonCoordinates() {
    return (
      this.firstElem.top === this.secondElem.top &&
      this.firstElem.left === this.secondElem.left
    );
  }
}

export default Coordinates;
