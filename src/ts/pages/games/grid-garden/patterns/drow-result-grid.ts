import { LEVELS_GARDEN } from "../../../../data/goods-data";

const drowResult = () =>
  `<div class="grid__result">
    <div class="grid__result-body">
      <div class="grid__result-body-img"></div>
      <div class="grid__result-body-text">Congratulations! You are lucky to collect carrots: <span></span><span>/${LEVELS_GARDEN.END}</span></div>
      <button class="grid__result-body-link"><a href="#statistics">Total result</a></button>
    </div>
  </div>`;

export default drowResult;
