import { TRulesGarden } from "../../../../data/goods-data";

const RULES_GARDEN: TRulesGarden = {
  FIELD: 25,
  RULES: [
    "<div class='garden__info-text'>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas that have carrots by using the <span>grid-column-start</span> property.</div><div class='garden__info-example'>For example, <span>grid-column-start: 3;</span> will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.</div>",
    "<div class='garden__info-text'>When <span class='column__start-info'>grid-column-start</span> is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the <span class='column__end-info'>grid-column-end</span> property.</div><div class='garden__info-example'>Using <span class='column__end-info'>grid-column-end</span>, water all of your carrots while avoiding the dirt. We don't want to waste any water! Note that the carrots start at the 1st vertical grid line and end at the 4th.</div>",
    "<div class='garden__info-text'>When pairing <span class='column__start-info'>grid-column-start</span> and <span class='column__end-info'>grid-column-end</span>, you might assume that the end value has to be greater than the start value. But this turns out not the case!</div><div class='garden__info-example'>Try setting <span class='column__end-info'>grid-column-end</span> to a value less than 5 to water your carrots.</div>",
  ],
  CODE: [
    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,
    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text">grid-column-start: 1;</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,
    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text">grid-column-start: 5;</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,
  ],
  CARROT_RULES: [
    "grid-column-start: 3;",
    "grid-column-start: 1; grid-column-end: 4;",
    "grid-column-end: 2; grid-column-start: 5;",
  ],
  WATER_RULES: [
    "grid-column-start: 1;",
    "grid-column-start: 1;",
    "grid-column-start: 5;",
  ],
};

export default RULES_GARDEN;
