class HtmlListeners {
  addListener(body: HTMLElement) {
    body.addEventListener("mouseover", (event: Event) => {
      const target = <HTMLElement>event.target;
      const idItem = target.getAttribute("data-number");
      target.classList.add("html__hover");
      if (idItem) {
        const item = <HTMLElement>document.getElementById(`${idItem}`);
        if (
          item.classList.contains("cup__body") ||
          item.classList.contains("cone__body")
        ) {
          const parent = <HTMLElement>item.parentElement;
          parent.classList.add("translate-scoops");
        } else if (item.classList.contains("scoop__body")) {
          item.classList.add("scoop__hover");
        }
      }
    });

    body.addEventListener("mouseout", (event: Event) => {
      const target = <HTMLElement>event.target;
      target.classList.remove("html__hover");
      const idItem = target.getAttribute("data-number");
      if (idItem) {
        const item = <HTMLElement>document.getElementById(`${idItem}`);
        if (
          item.classList.contains("cup__body") ||
          item.classList.contains("cone__body")
        ) {
          const parent = <HTMLElement>item.parentElement;
          parent.classList.remove("translate-scoops");
        } else if (item.classList.contains("scoop__body")) {
          item.classList.remove("scoop__hover");
        }
      }
    });
  }
}

export default HtmlListeners;
