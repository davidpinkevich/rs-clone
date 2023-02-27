const disableElement = (selector: string, boolean: boolean): void => {
  const elements: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    `${selector}`
  );

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].disabled = boolean;
  }
};

export default disableElement;
