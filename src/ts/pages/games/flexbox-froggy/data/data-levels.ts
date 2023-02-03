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
];

export default levels;
