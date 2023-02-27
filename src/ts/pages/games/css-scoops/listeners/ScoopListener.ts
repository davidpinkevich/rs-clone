class ScoopListeners {
  mouseListenersOver(target: HTMLElement) {
    target.addEventListener("mouseover", (event: Event) => {
      const targetElement = <HTMLElement>event.target;
      targetElement.classList.add("scoop__hover");
      const idElement = targetElement.getAttribute("id");
      const hmtlElement = <HTMLElement>(
        document.querySelector(`[data-number='${idElement}']`)
      );
      hmtlElement.classList.add("html__hover");
    });
  }

  mouseListenersOut(target: HTMLElement) {
    target.addEventListener("mouseout", (event: Event) => {
      const targetElement = <HTMLElement>event.target;
      targetElement.classList.remove("scoop__hover");
      const idElement = targetElement.getAttribute("id");
      const hmtlElement = <HTMLElement>(
        document.querySelector(`[data-number='${idElement}']`)
      );
      hmtlElement.classList.remove("html__hover");
    });
  }

  addListenerScoop(target: HTMLElement) {
    this.mouseListenersOver(target);
    this.mouseListenersOut(target);
  }
}

export default ScoopListeners;
