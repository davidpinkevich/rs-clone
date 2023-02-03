const surgeonStore = {
  levels: [
    {
      level: 1,
      selector: "#rusty-nail",
      descr1:
        "Let's start by positioning this <strong>RUSTY NAIL</strong> 100 pixels to the right of its original location with the <code>transform</code> property with the <code>translateX</code> operation.",
      descr2:
        "For example, <code>transform: translateX(100px);</code> will get the job done here.",
    },
    {
      level: 2,
      selector: "#handlebar-mustache",
      descr1:
        "If you want to move an element up or down along the vertical axis, you can use <code>transform</code> with the <code>translateY</code> operation instead. Can you use this to restore CSS Sam's <storng>HANDLEBAR MUSTACHE</storng>?",
      descr2:
        "By the way, you can use a variety of units besides pixels, including <code>em</code>, <code>rem</code>, <code>pt</code>, and <code>%</code>. Percentage is calculated based on the element's own width or height.",
    },
    {
      level: 3,
      selector: "#ruby-lips",
      descr1:
        "When you use <code>translate</code> with negative values, it moves elements up or to the left. Once again using <code>transform</code>, move CSS Sam's <strong>RUBY LIPS</strong> back into place.",
      descr2:
        "Here's one more tip. When your text cursor is inside a number, you can press the up and down arrow keys to quickly increase and decrease the value. Hold shift while doing this to jump by 10 at a time. Your browser's web inspector works the same way!",
    },
    {
      level: 4,
      selector: "#pearly-white",
      descr1:
        "Next, replace one of CSS Sam's <strong>PEARLY WHITES</strong> by moving it in both the horizontal and vertical directions. You can give <code>transform</code> both <code>translateX</code> and <code>translateY</code> operations at once by separating them with a space like so: transform: <code>translateX(30px) translateY(60px);</code>",
      descr2:
        "Or you can use the shorthand <code>translate</code> to move in both directions at once. It takes the x and y values separated by a comma. Using <code>transform: translate(30px, 60px);</code> means less typing.",
    },
    {
      level: 5,
      selector: "#meatier-thigh",
      descr1:
        "As mentioned earlier, <code>transform</code> can also be used with the <code>rotate</code> operation to rotate elements, as in the example <code>transform: rotate(90deg);</code>",
      descr2:
        "Rotate CSS Sam's <strong>MEATIER THIGH</strong> to return it to its rightful place.",
    },
    {
      level: 6,
      selector: "#limp-node",
      descr1:
        "The <code>rotate</code> operation also accepts negative values. Besides degrees, you can also set the rotation in other units like turns (<code>turn</code>), radians (<code>rad</code>), and gradians (<code>grad</code>)",
      descr2:
        "Try transplanting CSS Sam's <strong>LIMP NODE</strong> using negative values and an alternative unit!",
    },
    {
      level: 7,
      selector: "#six-pack",
      descr1:
        "The third operation that <code>transform</code> can use is <code>scale</code>. This allows you to make an element bigger or smaller at will. <code>scale</code> accepts a unit-less value, where a number between 0 and 1 will shrink the element, and an element larger than 1 will enlarge it.",
      descr2:
        "Use <code>scale</code> to double the size of this <strong>SIX PACK</strong> so that it'll fit CSS Sam's body.",
    },
    {
      level: 8,
      selector: "#fused-backbone",
      descr1:
        "If you want to scale an element differently in the vertical and horizontal directions, you can give use two values separated by a comma, such as <code>transform: scale(3, 2);</code> Use this to stretch CSS Sam's <strong>FUSED BACKBONE</strong> back in place.",
      descr2:
        "If you prefer, you can also set <code>scaleX</code> and <code>scaleY</code> separately.",
    },
    {
      level: 9,
      selector: "#mighty-python",
      descr1:
        "The final operation that <code>transform</code> can use is <code>skew</code>, which distorts the element in one or both dimensions. This operation uses the same units as <code>rotate</code>, including degrees and radians, and accepts horizontal and vertical values separated by a comma.",
      descr2:
        "<code>skewX</code> and <code>skewY</code> can be used to skew in a single direction. Operate on CSS Sam's <strong>MIGHTY PYTHON</strong> using <code>skewX</code>.",
    },
  ],
  currentLevel: 1,
};

export default surgeonStore;
