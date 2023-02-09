import { INthLevel } from "../../../../types/types";

const levels: INthLevel[] = [
  {
    instructions:
      "<p>Welcome, worker. You'll be stationed deep in the mines, unloading precious frontendium minerals using the CSS selector <code>:nth-child()</code>.</p><p><code>:nth-child()</code> is a pseudo-class that selects elements based on their order among sibling elements. This can be handy for styling list items, table rows, or in this case, a train of mine carts.</p><p>For instance, <code>.cart:nth-child(5)</code> will select the 5th cart.</p>",
    carts: ["n", "n", "n", "n", "target", "n", "n", "n", "n", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>The <code>:nth-child()</code> pseudo-class is useful when you want to style a subset of HTML elements. Rather than adding more classes or IDs to the elements you want to style, you can use <code>:nth-child()</code> to select them.</p><p>For example, the 7th mine cart has the exact same markup as the others — that is, it doesn't have any unique classes or IDs.< /p><p>How can we use <code>:nth-child()</code > to set up a barrel beside just the 7th cart?</p>",
    carts: ["n", "n", "n", "n", "n", "n", "target", "n", "n", "n"],
    styles: [" :nth-child"],
  },
];

export default levels;
