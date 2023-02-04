import { IFroggyLevel } from "../../../types/types";

const levels: IFroggyLevel[] = [
  {
    instructions: {
      en: `<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>`,
    },
    beforeText: "#pond {\n  display: flex;",
    stringsCount: 1,
    items: ["green"],
    styles: { "justify-content": "flex-end", "align-items": "center" },
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
];

export default levels;