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
  {
    instructions:
      "<p>Every 3rd mine cart is full here. Can you figure out how to use n to empty them?</p>",
    carts: ["n", "n", "target", "n", "n", "target", "n", "n", "target", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions: "<p>Next, unload every 5th cart.</p>",
    carts: ["n", "n", "n", "n", "target", "n", "n", "n", "n", "target"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Now we want to unload every cart except the first. In order to do this, we can use the selector <code>:nth-child(n+2)</code>.</p><p>Think of it this way: <code>n</code> represents every non-negative integer from 0, 1, 2, 3... So if we plug those numbers into our expression <code>n+2</code>, we have 2, 3, 4, 5..., selecting from the 2nd cart onward.</p>",
    carts: [
      "n",
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
    instructions: "<p>Unload all of the mine carts starting with the 5th.</p>",
    carts: [
      "n",
      "n",
      "n",
      "n",
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
      "<p>Once again unload all the mine carts starting with the 5th, this time for a shorter train.</p>",
    carts: ["n", "n", "n", "n", "target", "target", "target", "target"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Hmmm... why does <code>:nth-child(n+1)</code> select every cart?</p>",
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
      "<p>Does it make sense that <code>:nth-child(n-2)</code> also selects every cart?</p>",
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
      "<p><code>:nth-child(1n+6)</code> gives the same result as <code>:nth-child(n+6)</code>. Give it a try.</p>",
    carts: [
      "n",
      "n",
      "n",
      "n",
      "n",
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
      "<p>Let's unload every other cart again.</p><p>Notice a problem if we enter <code>:nth-child(2n)</code> here? The 2nd, 4th, 6th, 8th, and 10th carts (the even ones) get selected.</p><p>In order to pick the 1st, 3rd, 5th, 7th, and 9th carts (the odd ones), we have to add an offset of 1 like so: <code>:nth-child(2n+1)</code></p>",
    carts: [
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
    ],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Just as with <code>2n</code> getting the keyword <code>even</code>, <code>2n+1</code> is equivalent to <code>odd</code>. Try using it here.</p>",
    carts: [
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
    ],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>The values that <code>:nth-child()</code> accepts follow the formula <code>An+B</code>.</p><p>The number chosen for <code>A</code> determines the step size, for example every 1 cart, every 2 carts, etc. The number chosen for <code>B</code> determines how far offset from 0 the selection starts.</p><p>Here, we need to select every 3rd cart, starting with the 1st cart.</p>",
    carts: [
      "target",
      "n",
      "n",
      "target",
      "n",
      "n",
      "target",
      "n",
      "n",
      "target",
    ],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Unload the full mine carts here. Your answer should follow the formula <code>An+B</code>.</p>",
    carts: ["target", "n", "n", "n", "target", "n", "n", "n", "target", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Your answer can also follow the formula <code>An-B</code>. See if you can make it work.</p>",
    carts: ["target", "n", "n", "n", "target", "n", "n", "n", "target", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Just like <code>B</code> can take a negative number in the formula <code>An+B</code>, so can <code>A</code>.</p><p>If you input <code>:nth-child(-n)</code> or <code>:nth-child(-1n)</code>, the selection moves backwards from -1, including the -1st, -2nd, -3rd,... elements. Not very useful.</p><p>But, if we pair that with a positive <code>B</code> value, such as <code>-n+3</code>, things gets interesting.</p>",
    carts: ["target", "target", "target", "n", "n", "n", "n", "n", "n", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>See if you can figure out how to unload the first 8 carts here.</p>",
    carts: [
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "n",
      "n",
    ],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Here we need to unload every other cart from the first 6 carts.</p>",
    carts: ["n", "target", "n", "target", "n", "target", "n", "n", "n", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Now we need to unload every other cart from the first 5 carts.</p>",
    carts: ["target", "n", "target", "n", "target", "n", "n", "n", "n", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions: "<p>Let's get this frontendium up to the surface!</p>",
    carts: ["target", "n", "n", "target", "n", "n", "target", "n", "n", "n"],
    styles: [" :nth-child"],
  },
  {
    instructions: "<p>Unload the first 9 carts here.</p>",
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
      "n",
    ],
    styles: [" :nth-child"],
  },
  {
    instructions:
      "<p>Suppose you needed to select the 2nd-to-last cart. You could use <code>:nth-child(9)</code>, but if the number of carts ever changed, it would stop working.</p><p>Well, <code>:nth-last-child()</code> to the rescue! This pseudo-class works similarly to <code>:nth-child()</code>, except it starts at the last element and counts backwards, instead of forwards from the first.</p><p>Pick the 3rd cart from the end here.</p>",
    carts: ["n", "n", "n", "n", "n", "n", "n", "target", "n", "n"],
    styles: [" :nth-last-child"],
  },
  {
    instructions:
      "<p>As you can see, this selector works the same no matter how many carts there are.</p>",
    carts: ["n", "n", "target", "n", "n"],
    styles: [" :nth-last-child"],
  },
  {
    instructions:
      "<p>Select every cart from the 2nd-to-last to the 1st using <code>:nth-last-child()</code>.</p><p>Note that this might look the same as <code>:nth-child(-n+9)</code> here, but we want it any number of carts, not just 10.</p>",
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
      "n",
    ],
    styles: [" :nth-last-child"],
  },
  {
    instructions:
      "<p>Unload every other cart, up to the 4th-to-last, using <code>:nth-last-child()</code>.</p>",
    carts: [
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "target",
      "n",
      "n",
      "n",
    ],
    styles: [" :nth-last-child"],
  },
  {
    instructions:
      "<p>Now we need to select a range of carts with a startpoint and endpoint. To do this, we can join two selectors like so:</p><p><code>.cart:nth-child(n+3):nth-child(-n+8)</code></p>The first part, <code>:nth-child(n+3)</code>, selects all carts from the 3rd position and higher. The second, <code>:nth-child(-n+8)</code>, selects all carts from the 8th position and lower. Combine them and only carts from the 3rd to 8th position are selected.<p></p>",
    carts: [
      "n",
      "n",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "n",
      "n",
    ],
    styles: [" :nth-child", ":nth-child"],
  },
  {
    instructions: "<p>Unload all the mine carts from the 2nd to the 6th.",
    carts: [
      "n",
      "target",
      "target",
      "target",
      "target",
      "target",
      "n",
      "n",
      "n",
      "n",
    ],
    styles: [" :nth-child", ":nth-child"],
  },
  {
    instructions:
      "<p>Now we need to unload every cart that matches the <code>:nth-child(3n+1)</code> pattern, but only if the cart happens to be even-numbered, such as 4 and 10.</p>",
    carts: ["n", "n", "n", "target", "n", "n", "n", "n", "n", "target"],
    styles: [" :nth-child", ":nth-child"],
  },
  {
    instructions:
      "<p>Unload every mine cart from the 2nd to the 2nd-to-last using a combination of <code>:nth-child()</code> and <code>:nth-last-child()</code>.</p>",
    carts: [
      "n",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "target",
      "n",
    ],
    styles: [" :nth-child", ":nth-last-child"],
  },
  {
    instructions:
      "<p>Nearly to the end! Can you figure out how to unload every mine cart from the 3rd-to-last to the 6th-to-last?</p>",
    carts: [
      "n",
      "n",
      "n",
      "n",
      "target",
      "target",
      "target",
      "target",
      "n",
      "n",
    ],
    styles: [" :nth-last-child", ":nth-last-child"],
  },
  {
    instructions:
      "<p>Combine three <code>:nth-child()</code> selectors to choose all odd-numbered carts from the 3rd to the 7th.</p>",
    carts: ["n", "n", "target", "n", "target", "n", "target", "n", "n", "n"],
    styles: [" :nth-child", ":nth-child", ":nth-child"],
  },
  {
    instructions:
      "<p>One last haul of frontendium! There are lots of different ways you can unload this cart.</p>",
    carts: ["target"],
    styles: [" :nth-child"],
  },
];

export default levels;
