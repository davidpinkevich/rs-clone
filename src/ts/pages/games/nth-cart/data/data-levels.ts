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
  {
    instructions:
      "<p>Notice that <code>:nth-child()</code> uses 1-based indexing, meaning we start counting at 1. This is in contrast to most programming languages that use 0-based indexing.</p><p>1, 2, 3...</p>",
    carts: ["n", "n", "target", "n", "n", "n", "n", "n", "n", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Now place a barrel beside the 9th cart and nowhere else — we want to conserve our labor as much as possible.</p>",
    carts: ["n", "n", "n", "n", "n", "n", "n", "n", "target", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>You could select the 1st mine cart here using the selector <code>.cart:first-child</code>.</p><p>How can you use <code>:nth-child()</code> instead to select the cart?</p>",
    carts: ["target", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Likewise, you could use <code>.cart:last-child</code> here.</p><p>How can you use <code>:nth-child()</code> to select the 10th mine cart instead?</p>",
    carts: ["n", "n", "n", "n", "n", "n", "n", "n", "n", "target"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Of course while <code>:last-child</code> always selects that last cart, <code>:nth-child(10)</code> only does when there are exactly 10 carts.</p><p>Select the last cart here.</p>",
    carts: ["n", "n", "n", "n", "n", "target"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      '<p>As the term "pseudo- class" suggests, <code>:nth-child()</code> isn\'t limited to selecting one element at a time. It can select any number of elements that fit a pattern.</p><p>To select all the carts, for instance, we can use <code>.cart:nth-child(n)</code>. Here, <code>n</code> represents all non-negative integers, meaning all numbers from 0, 1, 2, 3, 4, to infinity.</p><p>In other words, the carts from the 1st to 10th position here all get selected. If there were more than 10 carts, all of those would get selected too.</p>',
    carts: [
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
    ],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Now we need to select every other cart. We can use <code>.cart:nth-child(2n)</code> for this.</p><p>Remember, <code>n</code> represents all non-negative integers: 0, 1, 2, 3... If we plug those into <code>2n</code>, we get 0, 2, 4, 6, 8, and so on.</p><p>This can be useful in many situations, such as when giving table rows some zebra stripes.</p>",
    carts: [
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
    ],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>You'll notice that <code>:nth-child(2n)</code> selects all even-numbered carts. Because this is such a common use case, CSS has a memorable keyword that can be used instead: <code>even</code>.</p><p>Enter <code>:nth-child(even)</code> to empty the full mine carts above.</p>",
    carts: [
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
    ],
    styles: [" :nth-child"],
  },
];

export default levels;
