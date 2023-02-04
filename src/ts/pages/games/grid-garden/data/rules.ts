import { TRulesGarden } from "../../../../types/types";

const RULES_GARDEN: TRulesGarden = {
  FIELD: 25,
  RULES_ENG: [
    "<div class='garden__info-text'>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas that have carrots by using the <span class='column__start-info'>grid-column-start</span> property.</div><div class='garden__info-example'>For example, <span class='column__start-info'>grid-column-start: 3;</span> will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.</div>",

    "<div class='garden__info-text'>When <span class='column__start-info'>grid-column-start</span> is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the <span class='column__end-info'>grid-column-end</span> property.</div><div class='garden__info-example'>Using <span class='column__end-info'>grid-column-end</span>, water all of your carrots while avoiding the dirt. We don't want to waste any water! Note that the carrots start at the 1st vertical grid line and end at the 4th.</div>",

    "<div class='garden__info-text'>When pairing <span class='column__start-info'>grid-column-start</span> and <span class='column__end-info'>grid-column-end</span>, you might assume that the end value has to be greater than the start value. But this turns out not the case!</div><div class='garden__info-example'>Try setting <span class='column__end-info'>grid-column-end</span> to a value less than 5 to water your carrots.</div>",

    "<div class='garden__info-text'>Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the <span>span</span> keyword. Keep in mind that <span>span</span> only works with positive values.</div><div class='garden__info-example'>For example, water these carrots with the rule <span>grid-column-end: span 2;</span>.</div>",

    "<div class='garden__info-text'>Typing both <span class='column__start-info'>grid-column-start</span> and <span class='column__end-info'>grid-column-end</span> every time can get tiring. Fortunately, <span class='column__info'>grid-column</span> is a shorthand property that can accept both values at once, separated by a <span>slash</span>.</div><div class='garden__info-example'>For example, <span>grid-column: 2 / 4;</span> will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.</div>",

    "<div class='garden__info-text'>Try using <span class='column__info'>grid-column</span> to water these carrots. The <span>span</span> keyword also works with this shorthand property so give it a try!</div>",

    "<div class='garden__info-text'>One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. <span class='row__start-info'>grid-row-start</span> works much like <span class='column__start-info'>grid-column-start</span> except along the vertical axis.</div><div class='garden__info-example'>Use <span class='row__start-info'>grid-row-start</span> to water these carrots.</div>",

    "<div class='garden__info-text'>Now give the shorthand property <span class='row__info'>grid-row</span> a try.</div>",

    "<div class='garden__info-text'>You can also use <span class='column__info'>grid-column</span> and <span class='row__info'>grid-row</span> together to span larger areas within the grid. Give it a try!</div>",

    "<div class='garden__info-text'>If typing out both <span class='column__info'>grid-column</span> and <span class='row__info'>grid-row</span> is too much for you, there's yet another shorthand for that. <span class='area__info'>grid-area</span> accepts four values separated by slashes: <span class='row__start-info'>grid-row-start</span>class, <span class='column__start-info'>grid-column-start</span>, <span class='row__end-info'>grid-row-end</span>, followed by <span class='column__end-info'>grid-column-end</span>.</div><div class='garden__info-example'>One example of this would be <span>grid-area: 1 / 1 / 3 / 6;</span>.</div>",

    "<div class='garden__info-text'>Up to this point, you've had your garden set up as a grid with five columns, each 20% of the full width, and five rows, each 20% of the full height. This was done with the rules <span>grid-template-columns: 20% 20% 20% 20% 20%;</span> and <span>grid-template-rows: 20% 20% 20% 20% 20%;</span> Each rule has five values which create five columns, each set to 20% of the overall width of the garden.</div><div class='garden__info-example'>But you can set the grid up however you like. Give <span class='template__columns-info'>grid-template-columns</span> a new value to water your carrots. You'll want to set the width of the 1st column to be 50%.</div>",

    "<div class='garden__info-text'>Specifying a bunch of columns with identical widths can get tedious. Luckily there's a repeat function to help with that. For example, we previously defined five 20% columns with the rule <span>grid-template-columns: 20% 20% 20% 20% 20%;</span>. This can be simplified as <span>grid-template-columns: repeat(5, 20%);</span></div><div class='garden__info-example'>Using <span class='template__columns-info'>grid-template-columns</span> with the <span>repeat</span> function, create eight columns each with 12.5% width. This way you won't overwater your garden.</div>",

    "<div class='garden__info-text'><span class='template__rows-info'>grid-template-rows</span> works much the same as <span class='template__columns-info'>grid-template-columns</span>.</div><div class='garden__info-example'>Use <span class='template__rows-info'>grid-template-rows</span> to water all but the top 50 pixels of your garden. Note that the water is set to fill only your 5th row, so you'll need to create 5 rows in total.</div>",

    "<div class='garden__info-text'><span class='template__info'>grid-template</span> is a shorthand property that combines <span class='template__rows-info'>grid-template-rows</span> and <span class='template__columns-info'>grid-template-columns</span>. For example, <span>grid-template: 50% 50% / 200px;</span> will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.</div><div class='garden__info-example'>Try using <span class='template__info'>grid-template</span> to water an area that includes the top 60% and left 200 pixels of your garden.</div>",
  ],
  RULES_RU: [
    "<div class='garden__info-text'Добро пожаловать в Grid Garden — место, где вы напишете CSS-код, чтобы вырастить морковный сад. Поливайте только те зоны, на которых есть морковь, используя свойство <span class='column__start-info'>grid-column-start</span>.</span></div><div class='garden__info-example'>Например, <span class='column__start-info'>grid-column-start: 3</span> покроет водой зону, начинающуюся на третьей grid-линии по вертикали, это как сказать “третья вертикальная граница на grid-сетке слева”.</div>",

    "<div class='garden__info-text'>Когда вы используете только <span class='column__start-info'>grid-column-start</span>, grid-элемент по умолчанию “захватит” только один столбец. Однако вы можете увеличить элемент между несколькими столбцами, если добавите свойство <span class='column__end-info'>grid-column-end</span>.</div><div class='garden__info-example'>Используя <span class='column__end-info'>grid-column-end</span>, полейте всю морковь, избегая пустые участки. Ведь мы не хотим использовать воду напрасно! Помните, что морковь начинается на первой вертикальной grid-линии и заканчивается на четвёртой.</div>",

    "<div class='garden__info-text'>Когда вы соединяли <span class='column__start-info'>grid-column-start</span> и <span class='column__end-info'>grid-column-end</span>, вы могли подумать, что конечное значение обязательно должно быть больше начального. Но это не так!</div><div class='garden__info-example'>Попробуйте задать свойству <span class='column__end-info'>grid-column-end</span> значение меньше, чем 5, чтобы полить морковь.</div>",

    "<div class='garden__info-text'>Вместо определения grid-элемента на основе начальной и конечной позиции grid-строк вы можете задавать их с помощью необходимой вам ширины строк, используя <span>span</span>. Помните, что <span>span</span> работает только с положительными значениями.</div><div class='garden__info-example'>Для примера, полейте эту морковь, используя свойство <span>grid-column-end: span 2</span>.</div>",

    "<div class='garden__info-text'>Печатать каждый раз <span class='column__start-info'>grid-column-start</span> и <span class='column__end-info'>grid-column-end</span> может быть немного утомительно. К счастью, есть краткая форма <span class='column__info'>grid-column</span>, которая принимает оба значения сразу через косую черту: <span>/</span>.</div><div class='garden__info-example'>Например, <span>grid-column: 2 / 4</span> скажет grid-элементу начаться на второй вертикальной grid-линии и закончиться на четвёртой.</div>",

    "<div class='garden__info-text'>Попробуйте использовать <span class='column__info'>grid-column</span>, чтобы полить эту морковь. <span>span</span> также работает с этим сокращённым свойством, так что пробуйте!</div>",

    "<div class='garden__info-text'>Одна из вещей, которая отличает CSS Grid Layout от Flexbox'а, — это то, что вы можете легко позиционировать элементы в двух направлениях: в столбцах и в строках. <span class='row__start-info'>grid-row-start</span> работает почти как <span class='column__start-info'>grid-column-start</span>, но только по вертикальной оси.</div><div class='garden__info-example'>Используйте <span class='row__start-info'>grid-row-start</span>, чтобы полить эту морковь.</div>",

    "<div class='garden__info-text'>А теперь попробуйте использовать сокращённое свойство <span class='row__info'>grid-row</span>.</div>",

    "<div class='garden__info-text'>Вы также можете использовать <span class='column__info'>grid-column</ызфт> и <span class='row__info'>grid-row</span> вместе, чтобы охватить более крупные зоны внутри grid-сетки. Пробуйте!</div>",

    "<div class='garden__info-text'>Если вас также утомляет печатать <span class='column__info'>grid-column</span> и <span class='row__info'>grid-row</span>, есть сокращённое свойство и для этого. <span area__info>grid-area</span> принимает 4 значения, разделенные косой чертой <span>/</span>: <span class='row__start-info'>grid-row-start</span>, <span class='column__start-info'>grid-column-start</span>, <span class='row__end-info'>grid-row-end</span> и <span class='column__end-info'>grid-column-end</span>.</div><div class='garden__info-example'>Пример: <span>grid-area: 1 / 1 / 3 / 6;</span>.</div>",

    "<div class='garden__info-text'>До этого момента сад имел grid-сетку с пятью столбцами по 20% ширины и пятью строками, каждая по 20% высоты. Это было сделано свойствами <span>grid-template-columns: 20% 20% 20% 20% 20%;</span> и <span>grid-template-rows: 20% 20% 20% 20% 20%;</span> Каждое свойство имеет пять значений, которые создают пять столбцов, где ширина каждого равна 20% от общей ширины сада.</div><div class='garden__info-example'>Но вы можете изменить grid-сетку как вам вздумается. Присвойте <span class='template__columns-info'>grid-template-columns</span c> новое значение, чтобы полить морковь. Вам необходимо поставить значение ширины первого столбца равным 50%.</div>",

    "<div class='garden__info-text'>Определять несколько столбцов с одинаковой шириной может быть утомительно. К счастью, есть функция <span>repeat</span>, которая призвана помочь в этом. Например, раньше мы определяли пять столбцов по 20% ширины с помощью <span>grid-template-columns: 20% 20% 20% 20% 20%;</span> Это можно упростить до <span>grid-template-columns: repeat(5, 20%)</span>.</div><div class='garden__info-example'>Используя <span class='template__columns-info'>grid-template-columns</span> вместе с функцией <span>repeat</span>, создайте 8 столбцов по 12.5% ширины каждый. Таким образом, вы не будете использовать больше воды, чем нужно.</div>",

    "<div class='garden__info-text'><span class='template__rows-info'>grid-template-rows</span> работает точно так же, как и <span class='template__columns-info'>grid-template-columns</span>.</div><div class='garden__info-example'>Используйте <span class='template__rows-info'>grid-template-rows</span>, чтобы полить всё, кроме верхних 50 пикселей сада. Помните, что вода заполняет только пятую строку, так что вам нужно создать именно пять строк.</div>",

    "<div class='garden__info-text'><span class='template__info'>grid-template</span> — сокращённый вариант комбинации <span class='template__rows-info'>grid-template-rows</span> и <span class='template__columns-info'>grid-template-columns</span>. Например, <span>grid-template: 50% 50% / 200px</span> создаст grid-сетку с двумя строками по 50% каждая и одним столбцом шириной 200 пикселей.</div><div class='garden__info-example'>Попробуйте использовать <span class='template__info'>grid-template</span>, чтобы полить зону, включающую в себя верхние 60% и левые 200 пикселей сада.</div>",
  ],
  TEXT__GARDEN: [
    `<p class="code__garden-task-text"><span></span>garden {</p>
  <p class="code__garden-task-text"><span></span>display: grid;</p>
  <p class="code__garden-task-textz"><span></span>grid-template-columns: 20% 20% 20% 20% 20%;</p>
  <p class="code__garden-task-text"><span></span>grid-template-rows: 20% 20% 20% 20% 20%;</p>
  <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>garden {</p>
  <p class="code__garden-task-text"><span></span>display: grid;</p>
  <p class="code__garden-task-textz"><span></span><input class="garden__input" type="text"></p>
  <p class="code__garden-task-text"><span></span>grid-template-rows: 20% 20% 20% 20% 20%;</p>
  <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>garden {</p>
  <p class="code__garden-task-text"><span></span>display: grid;</p>
  <p class="code__garden-task-textz"><span></span><input class="garden__input" type="text"></p>
  <p class="code__garden-task-text"><span></span>grid-template-rows: 20% 20% 20% 20% 20%;</p>
  <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>garden {</p>
  <p class="code__garden-task-text"><span></span>display: grid;</p>
  <p class="code__garden-task-textz"><span></span>grid-template-columns: 20% 20% 20% 20% 20%;</p>
  <p class="code__garden-task-text"><span></span><input class="garden__input" type="text"></p>
  <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>garden {</p>
  <p class="code__garden-task-text"><span></span>display: grid;</p>
  <p class="code__garden-task-text"><span></span><input class="garden__input" type="text"></p>
  <p class="code__garden-task-text"><span></span>}</p>`,
  ],
  TEXT__WATER: [
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

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text">grid-column-start: 2;</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text"><textarea class="water__input water__input-area"></textarea></p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text"><input class="water__input" type="text"></p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text">grid-column: 1;</p>
    <p class="code__garden-task-text">grid-row: 1;</p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text">grid-column: 1;</p>
    <p class="code__garden-task-text">grid-row: 1;</p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text">grid-column: 1 / 6;</p>
    <p class="code__garden-task-text">grid-row: 5 / 6;</p>
    <p class="code__garden-task-text"><span></span>}</p>`,

    `<p class="code__garden-task-text"><span></span>#water {</p>
    <p class="code__garden-task-text">grid-column: 1;</p>
    <p class="code__garden-task-text">grid-row: 1;</p>
    <p class="code__garden-task-text"><span></span>}</p>`,
  ],
  CARROT_RULES: [
    "grid-column-start: 3;",
    "grid-column-start: 1; grid-column-end: 4;",
    "grid-column-end: 2; grid-column-start: 5;",
    "grid-column-start: 2; grid-column-end: 4;",
    "grid-column-start: 4; grid-column-end: 6;",
    "grid-column-start: 2; grid-column-end: 5;",
    "grid-row-start: 3; grid-row-end: 4;",
    "grid-row-start: 3; grid-row-end: 6;",
    "grid-row-start: 1; grid-row-end: 6; grid-column-start: 2; grid-column-end: 6;",
    "grid-area: 1 / 2 / 4 / 6;",
    "grid-template-columns: 50% 50%;",
    "grid-template-columns: repeat(8, 12.5%);",
    "grid-area: 5 / 1 / 6 / 6; grid-template-rows: 50px 0 0 0 1fr;",
    "grid-template: 60% 1fr / 200px 1fr;",
  ],
  WATER_RULES: [
    "grid-column-start: 1;",
    "grid-column-start: 1;",
    "grid-column-start: 5;",
    "grid-column-start: 2;",
    "grid-column-start: 1;",
    "grid-column-start: 1;",
    "grid-column-start: 1;",
    "grid-column-start: 1;",
    "grid-column-start: 1;",
    "grid-column-start: 1;",
    "grid-column: 1; grid-row: 1;",
    "grid-column: 1; grid-row: 1;",
    "grid-area: 5 / 1 / 6 / 6",
    "grid-column-start: 1;",
  ],
};

export default RULES_GARDEN;
