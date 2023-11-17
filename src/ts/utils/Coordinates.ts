class Coordinates {
  public elemFirst: DOMRect;

  public elemSecond: DOMRect;

  constructor(elemFirst: HTMLElement, elemSecond: HTMLElement) {
    this.elemFirst = elemFirst.getBoundingClientRect();
    this.elemSecond = elemSecond.getBoundingClientRect();
  }

  getTop(element: DOMRect) {
    return element.top + window.pageYOffset;
  }

  getLeft(element: DOMRect) {
    return element.left + window.pageXOffset;
  }

  getRight(element: DOMRect) {
    return element.right + window.pageXOffset;
  }

  getBottom(element: DOMRect) {
    return element.bottom + window.pageYOffset;
  }

  comparisonСoordinates() {
    return (
      this.getTop(this.elemFirst) === this.getTop(this.elemSecond) &&
      this.getLeft(this.elemFirst) === this.getLeft(this.elemSecond) &&
      this.getRight(this.elemFirst) === this.getRight(this.elemSecond) &&
      this.getBottom(this.elemFirst) === this.getBottom(this.elemSecond)
    );
  }
}

export default Coordinates;
