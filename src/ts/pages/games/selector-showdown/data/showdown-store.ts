import { TShowdownStore } from "../../../../types/types";

const showdownStore: TShowdownStore = {
  levels: [
    {
      level: 1,
      descr: `              
      <p>Welcome to Selector Showdown, where you must use keen judgment to decide which selector will overpower the other! You see, multiple CSS declarations can target the same HTML element. But there's always one winner.</p>
      <p>Take these styles for example:</p>
      <p></p>
      <pre>body span {
  color: red;
}
      
span {
  color: blue;
}</pre>
      <p></p>
      <p>Turns out browsers will color span elements red because the specificity, or weight, of the first selector is greater. Selecting span elements that are inside body is more specific than just span elements.</p>
      <p>Your turn. Assuming the two selectors on the right apply to the same element, pick the one with greater specificity.</p>
      `,
      info: [
        {
          selector: "div",
          score: "001",
        },
        {
          selector: "div span",
          score: "002",
        },
      ],
    },
    {
      level: 2,
      descr: `              
      <p>The set of rules that decide how multiple styles are applied to an element is known as the Cascade — as in Cascading Style Sheets (CSS).</p><p>Misunderstanding which CSS rules win out is often at the heart of our bugs. By learning to calculate specificity, you'll be able to read and write CSS better than ever.</p><p>Keeping in mind that each element added to a selector increases its specificity, pick the winner here.</p>`,
      info: [
        {
          selector: "body div span",
          score: "003",
        },
        {
          selector: "span",
          score: "001",
        },
      ],
    },
    {
      level: 3,
      descr: `              
      <p>This brings us to our first rule:</p><p><strong>When two selectors apply to the same element, the selector with higher specificity wins out.</strong></p><p>Choose the selector that has the greater specificity here.</p><p>Get it right and you can rank up to the next level. Get it wrong and you'll have to redo the previous level. Do you have what it takes to reach the end?</p>`,
      info: [
        {
          selector: "body div span",
          score: "003",
        },
        {
          selector: "body span",
          score: "002",
        },
      ],
    },
    {
      level: 4,
      descr: `              
      <p>You might be asking yourself, what happens when there's a tie? This leads to our second rule:</p><p><strong>When two selectors have equal specificity, the last one declared is the winner.</strong></p><p>Here, we can assume the bottom selector is declared after the top one.</p>`,
      info: [
        {
          selector: "span",
          score: "001",
        },
        {
          selector: "span",
          score: "001",
        },
      ],
    },
    {
      level: 5,
      descr: `              
      <p>Another one for you. Here, it doesn't matter that <code>body</code> is closer to <code>li</code> than <code>html</code> is in the HTML document — they both have the same specificity.</p>`,
      info: [
        {
          selector: "body li",
          score: "002",
        },
        {
          selector: "html li",
          score: "002",
        },
      ],
    },
    {
      level: 6,
      descr: `              
      <p>So far we've only dealt with selectors involving elements. What about classes?</p><p>Well, classes are a bit more specific than elements, and therefore have greater specificity.</p><p><strong>Head to head, a class selector beats out an element selector every time.</strong></p>`,
      info: [
        {
          selector: ".header",
          score: "010",
        },
        {
          selector: "nav",
          score: "001",
        },
      ],
    },
    {
      level: 7,
      descr: `              
      <p>Like I said, a class selector beats out an element selector every time.</p>`,
      info: [
        {
          selector: ".list",
          score: "010",
        },
        {
          selector: "ul",
          score: "001",
        },
      ],
    },
    {
      level: 8,
      descr: `              
      <p>In fact, a single class will beat out multiple elements in a selector!</p><p><strong>A class selector has greater specificity than any number of element selectors.</strong></p>`,
      info: [
        {
          selector: "div input",
          score: "002",
        },
        {
          selector: ".button",
          score: "010",
        },
      ],
    },
    {
      level: 9,
      descr: `              
      <p>Does a selector with a single class or multiple elements win?</p>`,
      info: [
        {
          selector: "table tr td input",
          score: "004",
        },
        {
          selector: ".field",
          score: "010",
        },
      ],
    },
    {
      level: 10,
      descr: `              
      <p>Do you remember what happens in the event of a tie?</p>`,
      info: [
        {
          selector: ".btn",
          score: "010",
        },
        {
          selector: ".btn",
          score: "010",
        },
      ],
    },
    {
      level: 11,
      descr: `              
      <p>Here, both selectors have two classes, and therefore the same specificity. In a tie, the last selector wins out, just the same as with element selectors.</p>`,
      info: [
        {
          selector: ".modal .primary",
          score: "020",
        },
        {
          selector: ".modal .btn",
          score: "020",
        },
      ],
    },
    {
      level: 12,
      descr: `              
      <p>As an aside, you can declare the same class multiple times to boost its specificity. But this is purely a hack and not recommended.</p>`,
      info: [
        {
          selector: ".btn.btn.btn.btn",
          score: "040",
        },
        {
          selector: ".btn",
          score: "010",
        },
      ],
    },
    {
      level: 13,
      descr: `              
      <p>Can you guess what happens with IDs, which are even more specific than elements and classes?</p>`,
      info: [
        {
          selector: ".student",
          score: "010",
        },
        {
          selector: "#alice",
          score: "100",
        },
      ],
    },
    {
      level: 14,
      descr: `              
      <p>As you might have figured out, this is our next rule:</p><p><strong>An ID selector beats out any number of element or class selectors.</strong></p>`,
      info: [
        {
          selector: "li",
          score: "001",
        },
        {
          selector: "#bobby",
          score: "100",
        },
      ],
    },
    {
      level: 15,
      descr: `              
      <p>It doesn't matter how many classes or elements you use, an ID always has greater specificity.</p>`,
      info: [
        {
          selector: ".student li",
          score: "011",
        },
        {
          selector: "#clara",
          score: "100",
        },
      ],
    },
    {
      level: 16,
      descr: `              
      <p>When multiple IDs are used in a selector, they have greater specificity than a single ID.</p>`,
      info: [
        {
          selector: "#students #daphne",
          score: "200",
        },
        {
          selector: "#students .student .name",
          score: "120",
        },
      ],
    },
    {
      level: 17,
      descr: `              
      <p>When you start combining elements, classes, and IDs in a selector, things can get complicated.</p><p>To help with this, developers often calculate specifity using a three-digit notation: <span class="specificity"><span>0</span><span>0</span><span>0</span></span>.</p><p>The left digit counts the number of IDs in the selector. The middle digit counts the number of classes. The right digit counts the number of element.</p><p>Here, <code>#elliott</code> has a specificity of <span class="specificity"><span>1</span><span>0</span><span>0</span></span>, while <code>.student li</code> has a specificity of <span class="specificity"><span>0</span><span>1</span><span>1</span></span>. Which one wins out?</p>`,
      info: [
        {
          selector: "#elliott",
          score: "100",
        },
        {
          selector: ".student li",
          score: "011",
        },
      ],
    },
    {
      level: 18,
      descr: `              
      <p>Can you calculate the specificity scores for these two selectors?</p>`,
      info: [
        {
          selector: ".navbar .nav a.active",
          score: "031",
        },
        {
          selector: "#main .nav-link",
          score: "110",
        },
      ],
    },
    {
      level: 19,
      descr: `              
      <p>Which selector has greater specificity here?</p>`,
      info: [
        {
          selector: ".main .slider",
          score: "020",
        },
        {
          selector: "nav ul li .active",
          score: "013",
        },
      ],
    },
    {
      level: 20,
      descr: `              
      <p>Selectors sometimes use combinators like <code>&gt;</code>, <code>+</code>, or <code>~</code> to indicate relationships.</p><p>For example, <code>ul &gt; li</code> indicates list item elements that are a direct child of unordered lists.</p><p><strong>Combinators don't have any effect when calculating specificity.</strong></p>`,
      info: [
        {
          selector: "table tr td",
          score: "003",
        },
        {
          selector: "tr > td",
          score: "002",
        },
      ],
    },
    {
      level: 21,
      descr: `              
      <p>Don't let combinators like <code>+</code> distract you when calculating specificity.</p>`,
      info: [
        {
          selector: "body div a",
          score: "003",
        },
        {
          selector: "span + a",
          score: "002",
        },
      ],
    },
    {
      level: 22,
      descr: `              
      <p>Which selector wins out here?</p>`,
      info: [
        {
          selector: "body section a",
          score: "003",
        },
        {
          selector: "body > h1 + a",
          score: "003",
        },
      ],
    },
    {
      level: 23,
      descr: `              
      <p>Much like combinators, the universal selector <code>*</code>, which matches any type, isn't counted in specificity and can be safely ignored.</p>`,
      info: [
        {
          selector: "body div",
          score: "002",
        },
        {
          selector: "body *",
          score: "001",
        },
      ],
    },
    {
      level: 24,
      descr: `              
      <p>The selector <code>* &gt; *</code> selects all elements that are direct children of other elements. But its specificity remains <span class="specificity"><span>0</span><span>0</span><span>0</span></span>.</p>`,
      info: [
        {
          selector: "span",
          score: "001",
        },
        {
          selector: "* > *",
          score: "000",
        },
      ],
    },
    {
      level: 25,
      descr: `              
      <p>Attributes can also be used in selectors. These do factor into specificity calculations.</p><p><strong>Attributes are weighted the same as classes when it comes to specificity.</strong></p><p>Here, <code>[type="checkbox"]</code> has a specificity of <span class="specificity"><span>0</span><span>1</span><span>0</span></span>.</p>`,
      info: [
        {
          selector: "input",
          score: "001",
        },
        {
          selector: '[type="checkbox"]',
          score: "010",
        },
      ],
    },
    {
      level: 26,
      descr: `              
      <p>This means attributes have greater specificity than elements, but less than IDs.</p>`,
      info: [
        {
          selector: "a",
          score: "001",
        },
        {
          selector: "[href]",
          score: "010",
        },
      ],
    },
    {
      level: 27,
      descr: `              
      <p>If both of these selectors applied to the same element, which style would override the other?</p>`,
      info: [
        {
          selector: "#phone",
          score: "100",
        },
        {
          selector: '[type="number"]',
          score: "010",
        },
      ],
    },
    {
      level: 28,
      descr: `              
      <p>Choose the selector that would win out here.</p>`,
      info: [
        {
          selector: ".number",
          score: "010",
        },
        {
          selector: '[type="number"]',
          score: "010",
        },
      ],
    },
    {
      level: 29,
      descr: `              
      <p>Here's another neat hack for you. You can lower the specificity of an ID by using the attribute syntax for it instead.</p>`,
      info: [
        {
          selector: "#foo",
          score: "100",
        },
        {
          selector: '[id="foo"]',
          score: "010",
        },
      ],
    },
    {
      level: 30,
      descr: `              
      <p>Which selector overpowers the other here?</p>`,
      info: [
        {
          selector: "input",
          score: "001",
        },
        {
          selector: '*[type="password"]',
          score: "010",
        },
      ],
    },
    {
      level: 31,
      descr: `              
      <p>Pseudoelements like <code>::before</code>, <code>::after</code>, <code>::first-letter</code>, and <code>::selection</code> have the same specificity as elements. That should be easy enough to remember.</p><p>Here <code>div::first-line</code> has a specificity of <span class="specificity"><span>0</span><span>0</span><span>2</span></span>, while span of course is <span class="specificity"><span>0</span><span>0</span><span>1</span></span>.</p>`,
      info: [
        {
          selector: "span",
          score: "001",
        },
        {
          selector: "div::first-line",
          score: "002",
        },
      ],
    },
    {
      level: 32,
      descr: `              
      <p>Does the element or the pseudoelement have greater specificity here?</p>`,
      info: [
        {
          selector: "div",
          score: "001",
        },
        {
          selector: "::before",
          score: "001",
        },
      ],
    },
    {
      level: 33,
      descr: `              
      <p>Choose the selector that overrides the other here.</p>`,
      info: [
        {
          selector: "section span",
          score: "002",
        },
        {
          selector: "section div::first-letter",
          score: "003",
        },
      ],
    },
    {
      level: 34,
      descr: `              
      <p>Pseudoclasses like <code>:hover</code>, <code>:active</code>, <code>:checked</code>, <code>:disabled</code>, and <code>:first-child</code> are weighted the same as classes.</p><p>Pseudoclasses are indicated with the single colons (<code>:</code>), while pseudoelements use double colons (<code>::</code>).</p>`,
      info: [
        {
          selector: "a:active",
          score: "011",
        },
        {
          selector: "a",
          score: "001",
        },
      ],
    },
    {
      level: 35,
      descr: `              
      <p>Keeping in mind that pseudoclasses are weighted the same as classes, which selector wins here?</p>`,
      info: [
        {
          selector: "div:empty",
          score: "011",
        },
        {
          selector: ".empty",
          score: "010",
        },
      ],
    },
    {
      level: 36,
      descr: `              
      <p>How do pseudoclasses stack up against IDs?</p>`,
      info: [
        {
          selector: "#hover",
          score: "100",
        },
        {
          selector: ":hover",
          score: "010",
        },
      ],
    },
    {
      level: 37,
      descr: `              
      <p>Make the calculations to figure out the winning selector here.</p>`,
      info: [
        {
          selector: "#main .link:focus",
          score: "120",
        },
        {
          selector: ":article #target:focus",
          score: "111",
        },
      ],
    },
    {
      level: 38,
      descr: `              
      <p>Do you remember which is a pseudoelement and which is a pseudoclass?</p>`,
      info: [
        {
          selector: "h1::first-line",
          score: "002",
        },
        {
          selector: "h1:first-child",
          score: "011",
        },
      ],
    },
    {
      level: 39,
      descr: `              
      <p>There are a few exceptions to note when it comes to pseudoclasses.</p><p></p><p>The pseudoclasses <code>:not()</code> and <code>:is()</code> don't have any weight themselves, but the values inside their parentheses are used to calculate specificity instead.</p><p>Here, the <code>:not(#outer)</code> is calculated based on <code>#outer</code>, giving a score of <span class="specificity"><span>1</span><span>0</span><span>0</span></span>.</p>`,
      info: [
        {
          selector: ":not(#blur)",
          score: "100",
        },
        {
          selector: ":focus",
          score: "010",
        },
      ],
    },
    {
      level: 40,
      descr: `              
      <p>Pick the more powerful selector here.</p>`,
      info: [
        {
          selector: ":not(span)",
          score: "001",
        },
        {
          selector: ".outer",
          score: "010",
        },
      ],
    },
    {
      level: 41,
      descr: `              
      <p>How do these two selectors compare?</p>`,
      info: [
        {
          selector: "div.outer p",
          score: "012",
        },
        {
          selector: "div:not(.outer) p",
          score: "012",
        },
      ],
    },
    {
      level: 42,
      descr: `              
      <p>Do you remember how to calculate the <code>:is(#top)</code> part of the selector here?</p>`,
      info: [
        {
          selector: "div:is(#top) p",
          score: "102",
        },
        {
          selector: "div.header p",
          score: "012",
        },
      ],
    },
    {
      level: 43,
      descr: `              
      <p>How about combining <code>:not()</code> with other pseudoclasses?</p>`,
      info: [
        {
          selector: "div:last-child",
          score: "011",
        },
        {
          selector: "div:not(:first-child)",
          score: "011",
        },
      ],
    },
    {
      level: 44,
      descr: `              
      <p>The pseudoclasses <code>:not()</code> and <code>:is()</code> can accept multiple selectors, such as <code>div:not(.menu, #navbar)</code>.</p><p>With multiple values, the value with the highest specificity is used for the calculation.</p><p>In the example above, <code>#navbar</code> is used to calculate the specificity of the <code>:not()</code> pseudoclass, giving it a value of <span class="specificity"><span>1</span><span>0</span><span>0</span></span>. Adding that with the specificity for <code>div</code> gives an overall specificity of <span class="specificity"><span>1</span><span>0</span><span>1</span></span>.</p>`,
      info: [
        {
          selector: "a:not(.disabled, #disabled)",
          score: "101",
        },
        {
          selector: "a.active",
          score: "011",
        },
      ],
    },
    {
      level: 45,
      descr: `              
      <p>Which of these selectors has greater specificity?</p>`,
      info: [
        {
          selector: 'input:is(.active, [data-status="active"])',
          score: "011",
        },
        {
          selector: "input#active",
          score: "101",
        },
      ],
    },
    {
      level: 46,
      descr: `              
      <p>Ok, time for another little hack. Again, you probably shouldn't use this, but it's good to know.</p><p>Due to the way browsers calculate specificity, you can nest two <code>:not()</code> selectors to use IDs and classes without adding to the specificity of the selector. Think of it as a double negative, with the two <code>:not()</code>s cancelling each other out.</p><p>These two selectors select the same element, but which one has greater specificity?</p>`,
      info: [
        {
          selector: "h1:not(:not(#title))",
          score: "001",
        },
        {
          selector: "h1#title",
          score: "101",
        },
      ],
    },
    {
      level: 47,
      descr: `              
      <p>Fortunately, we don't need to rely on the double <code>:not()</code> hack to avoid adding specificity. CSS has a new pseudoclass, <code>:where()</code>, to do just that.</p><p>The pseudoclass <code>:where()</code> works similarly to <code>:is()</code>, but always has a specificity of zero, regardless of the value inside the parentheses.</p><p>Which selector has the greater specificity here?</p>`,
      info: [
        {
          selector: "h1#title",
          score: "101",
        },
        {
          selector: "h1:where(#title)",
          score: "001",
        },
      ],
    },
    {
      level: 48,
      descr: `              
      <p>How does the selector using <code>:not()</code> stack up against the one using <code>:where()<code>?</code></code></p>`,
      info: [
        {
          selector: "div:where(.outer) p",
          score: "002",
        },
        {
          selector: "div:not(.inner) p",
          score: "012",
        },
      ],
    },
    {
      level: 49,
      descr: `              
      <p>These two selectors select the same <code>p</code> elements, but one has more specificity than the other.</p>`,
      info: [
        {
          selector: "div:where(.outer) p",
          score: "002",
        },
        {
          selector: "div:is(.outer) p",
          score: "012",
        },
      ],
    },
    {
      level: 50,
      descr: `              
      <p>Remember the difference between <code>:is()</code> and <code>:where()</code>?</p>`,
      info: [
        {
          selector: "div:where(#left)",
          score: "001",
        },
        {
          selector: "div:is(.right)",
          score: "011",
        },
      ],
    },
    {
      level: 51,
      descr: `              
      <p>Like <code>:is()</code> and <code>:not()</code>, <code>:where()</code> can also accept multiple values.</p>`,
      info: [
        {
          selector: "a:where(.primary, #submit)",
          score: "001",
        },
        {
          selector: "a:not(.secondary)",
          score: "011",
        },
      ],
    },
    {
      level: 52,
      descr: `              
      <p>You're nearing the final level. Let's see if you remember everything you've learned along the way.</p>`,
      info: [
        {
          selector: "nav a.navigation",
          score: "012",
        },
        {
          selector: ".nav a",
          score: "011",
        },
      ],
    },
    {
      level: 53,
      descr: `              
      <p>A longer selector doesn't necessarily mean a more specific one.</p>`,
      info: [
        {
          selector: ".container ul.top .list-item",
          score: "031",
        },
        {
          selector: "#content li",
          score: "101",
        },
      ],
    },
    {
      level: 54,
      descr: `              
      <p>How does the <code>+</code> combinator affect the specificity?</p>`,
      info: [
        {
          selector: ".blog h1 + p",
          score: "012",
        },
        {
          selector: ".blog .entry",
          score: "020",
        },
      ],
    },
    {
      level: 55,
      descr: `              
      <p>Calculate each selector's specificity and see if you get them right.</p>`,
      info: [
        {
          selector: ".footer a:first-child:not(.social)",
          score: "031",
        },
        {
          selector: ".footer > ul > li > a",
          score: "013",
        },
      ],
    },
    {
      level: 56,
      descr: `              
      <p>Don't let the order of the selectors distract you from the task at hand.</p>`,
      info: [
        {
          selector: "#main .table .link",
          score: "120",
        },
        {
          selector: ".table tr td #link",
          score: "112",
        },
      ],
    },
    {
      level: 57,
      descr: `              
      <p>If these selectors select the same elements, which one overrides the other?</p>`,
      info: [
        {
          selector: "article .part2",
          score: "011",
        },
        {
          selector: "section:nth-child(2)",
          score: "011",
        },
      ],
    },
    {
      level: 58,
      descr: `              
      <p>Is <code>:only-child</code> a pseudoelement or pseudoclass?</p>`,
      info: [
        {
          selector: "p",
          score: "001",
        },
        {
          selector: ":only-child",
          score: "010",
        },
      ],
    },
    {
      level: 59,
      descr: `              
      <p>Does <code>:not()</code> contribute to the selector's specificity? If so, how?</p>`,
      info: [
        {
          selector: ".main",
          score: "010",
        },
        {
          selector: "section :not(.footer)",
          score: "011",
        },
      ],
    },
    {
      level: 60,
      descr: `              
      <p>What's the difference between these two selectors?</p>`,
      info: [
        {
          selector: "div:is(#primary, .secondary)",
          score: "101",
        },
        {
          selector: "div:where(#primary, .secondary)",
          score: "001",
        },
      ],
    },
    {
      level: 61,
      descr: `              
      <p>Which of these has the greater specificity?</p>`,
      info: [
        {
          selector: 'form input[type="text"]',
          score: "012",
        },
        {
          selector: "form .text",
          score: "011",
        },
      ],
    },
    {
      level: 62,
      descr: `              
      <p>And which of these selectors has the greater specificity?</p>`,
      info: [
        {
          selector: "input.name",
          score: "011",
        },
        {
          selector: 'input[type="text"]',
          score: "011",
        },
      ],
    },
    {
      level: 63,
      descr: `              
      <p>A tricky one for you...</p>`,
      info: [
        {
          selector: '.page > * + [title^="link"]',
          score: "020",
        },
        {
          selector: ".page a.link",
          score: "021",
        },
      ],
    },
    {
      level: 64,
      descr: `              
      <p>At last, you've reached the end. This is your final challenge!</p>`,
      info: [
        {
          selector: "a:where(#submit, #cancel)",
          score: "001",
        },
        {
          selector: "a:not(.disabled)",
          score: "011",
        },
      ],
    },
  ],
  currentLevel: 1,
  volume: 1,
};

export default showdownStore;
