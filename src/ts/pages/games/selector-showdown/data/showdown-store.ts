const showdownStore = {
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
  ],
  currentLevel: 1,
};

export default showdownStore;
