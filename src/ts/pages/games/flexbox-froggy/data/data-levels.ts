import { IFroggyLevel } from "../../../../types/types";

const levels: IFroggyLevel[] = [
  {
    instructions: {
      en: `<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>`,
    },
    beforeText: "#pond {\n  display: flex;",
    stringsCount: 1,
    items: ["green"],
    styles: { "justify-content": "flex-end" },
    // stylesForInit: ["wrap"], для тех уровней, где жабки на новую строку переносятся
  },
  {
    instructions: {
      en: `<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 1,
    items: ["green", "yellow"],
    styles: { "justify-content": "center" },
  },
  {
    instructions: {
      en: `<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 1,
    items: ["green", "yellow", "red"],
    styles: { "justify-content": "space-around" },
  },
  {
    instructions: {
      en: `<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 1,
    items: ["green", "yellow", "red"],
    styles: { "justify-content": "space-between" },
  },
  {
    instructions: {
      en: `<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 1,
    items: ["green", "yellow", "red"],
    styles: { "align-items": "flex-end" },
  },
  {
    instructions: {
      en: `<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 2,
    items: ["green"],
    styles: { "align-items": "center", "justify-content": "center" },
  },
  {
    instructions: {
      en: `<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Use a combination of <code>justify-content</code> and <code>align-items</code>.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 2,
    items: ["green", "yellow", "red"],
    styles: { "align-items": "flex-end", "justify-content": "space-around" },
  },
  {
    instructions: {
      en: `<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 1,
    items: ["green", "yellow", "red"],
    styles: { "flex-direction": "row-reverse" },
  },
  {
    instructions: {
      en: `<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 1,
    items: ["green", "yellow", "red"],
    styles: { "flex-direction": "column" },
  },
  {
    instructions: {
      en: `<p><p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 2,
    items: ["green", "yellow", "red"],
    styles: { "flex-direction": "row-reverse", "justify-content": "flex-end" },
  },
  {
    instructions: {
      en: `<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 2,
    items: ["green", "yellow", "red"],
    styles: { "flex-direction": "column", "justify-content": "flex-end" },
  },
  {
    instructions: {
      en: `<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 2,
    items: ["green", "yellow", "red"],
    styles: {
      "flex-direction": "column-reverse",
      "justify-content": "space-between",
    },
  },
  {
    instructions: {
      en: `<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 3,
    items: ["green", "yellow", "red"],
    styles: {
      "flex-direction": "row-reverse",
      "justify-content": "center",
      "align-items": "flex-end",
    },
  },
  {
    instructions: {
      en: `<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    stringsCount: 1,
    items: ["green", "yellow", "red"],
    styles: { order: "2" },
    order: "yellow",
  },
  {
    instructions: {
      en: `<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n}\n\n.red {\n",
    stringsCount: 1,
    items: ["green", "green", "green", "red", "green"],
    styles: { order: "-1" },
    order: "red",
  },
  {
    instructions: {
      en: `<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>`,
    },
    beforeText:
      "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    stringsCount: 1,
    items: ["green", "green", "yellow", "green", "green"],
    styles: {
      "align-self": "flex-end",
    },
    order: "yellow",
  },
  {
    instructions: {
      en: `<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>`,
    },
    beforeText:
      "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    stringsCount: 2,
    items: ["yellow", "green", "yellow", "green", "green"],
    styles: {
      "align-self": "flex-end",
      order: "2",
    },
    order: "yellow",
  },
  {
    instructions: {
      en: `<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 1,
    items: ["yellow", "green", "green", "green", "green", "green", "red"],
    styles: { "flex-wrap": "wrap" },
  },
  {
    instructions: {
      en: `<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 2,
    items: [
      "green",
      "green",
      "green",
      "green",
      "green",
      "red",
      "red",
      "red",
      "red",
      "red",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
    ],
    styles: { "flex-direction": "column", "flex-wrap": "wrap" },
  },
  {
    instructions: {
      en: `<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n",
    stringsCount: 1,
    items: [
      "green",
      "green",
      "green",
      "green",
      "green",
      "red",
      "red",
      "red",
      "red",
      "red",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
    ],
    styles: { "flex-flow": "column wrap" },
  },
  {
    instructions: {
      en: `<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    stringsCount: 1,
    items: [
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
    ],
    styles: { "align-content": "flex-start", "flex-wrap": "wrap" },
    stylesForInit: ["wrap"],
  },
  {
    instructions: {
      en: `<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    stringsCount: 1,
    items: [
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
    ],
    styles: { "align-content": "flex-end", "flex-wrap": "wrap" },
    stylesForInit: ["wrap"],
  },
  {
    instructions: {
      en: `<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>`,
    },
    beforeText: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    stringsCount: 2,
    items: [
      "red",
      "green",
      "green",
      "green",
      "yellow",
      "red",
      "green",
      "green",
      "green",
      "yellow",
      "red",
      "green",
      "green",
      "green",
      "yellow",
    ],
    styles: {
      "flex-direction": "column-reverse",
      "align-content": "center",
      "flex-wrap": "wrap",
    },
    stylesForInit: ["wrap"],
  },
  {
    instructions: {
      en: `<p>Bring the frogs home one last time by using the CSS properties you\\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>`,
    },
    beforeText: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    stringsCount: 4,
    items: ["red", "green", "green", "green", "green", "yellow", "yellow"],
    styles: {
      "flex-direction": "column-reverse",
      "align-content": "space-between",
      "flex-wrap": "wrap-reverse",
      "justify-content": "center",
    },
  },
];

export default levels;
