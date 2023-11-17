class PortionListeners {
  mouseListenersOver(target: HTMLElement) {
    target.addEventListener("mouseover", (event: Event) => {
      const targetElement = <HTMLElement>event.target;
      const elementID = <HTMLElement>targetElement.parentElement;
      const parentElement = <HTMLElement>event.currentTarget;
      if (
        targetElement.classList.contains("cup__scoop-img") ||
        targetElement.classList.contains("cone__scoop-img")
      )
        parentElement.classList.add("translate-scoops");
      const getID = elementID.getAttribute("id");
      if (getID) {
        const getHTML = <HTMLElement>(
          document.querySelector(`[data-number='${getID}']`)
        );
        getHTML.classList.add("html__hover");
      }
    });
  }

  mouseListenersOut(target: HTMLElement) {
    target.addEventListener("mouseout", (event: Event) => {
      const targetElement = <HTMLElement>event.target;
      const elementID = <HTMLElement>targetElement.parentElement;
      const parentElement = <HTMLElement>event.currentTarget;
      parentElement.classList.remove("translate-scoops");
      const getID = elementID.getAttribute("id");
      if (getID) {
        const getHTML = <HTMLElement>(
          document.querySelector(`[data-number='${getID}']`)
        );
        getHTML.classList.remove("html__hover");
      }
    });
  }

  addListenerPortion(target: HTMLElement) {
    this.mouseListenersOver(target);
    this.mouseListenersOut(target);
  }
}

export default PortionListeners;
