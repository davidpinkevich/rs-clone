const changeLangItemsGrid = (arrBtns: HTMLElement[], arrayLang: string[]) => {
  const btns = arrBtns;
  const value = arrayLang;
  btns.forEach((item: HTMLElement, index) => {
    btns[index].innerHTML = `${value[index]}`;
  });
};

export default changeLangItemsGrid;
