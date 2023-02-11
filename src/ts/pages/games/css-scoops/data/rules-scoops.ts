import { TRulesScoops } from "../../../../types/types";

const RULES_SCOOPS: TRulesScoops = {
  RULE: [
    "<p>Here at CSS Scoops, you'll learn all about CSS selectors by way of ice cream sundaes. Selectors — you guessed it — select things. They select the HTML elements that you can apply a set of CSS styles to.</p><p>Let's start simple. Suppose you want to apply styles to every <span>div</span> element. You can do this with the selector <span>div</span>. This is called a <span class='scoops__underline'>type selector</span>.</p><p>What selector will select all <span>cone</span> elements?</p>",
    "<p>Now select all of the <span>cup</span> elements.</p>",
  ],
  ANSWER: ["cone", "cup"],
  HTML_CODE: [
    [
      "<cup>&lt;cup&gt;&lt;/cup&gt;</cup>",
      "<cone>&lt;cone&gt;&lt;/cone&gt;</cone>",
      "<cone>&lt;cone&gt;&lt;/cone&gt;</cone>",
      "<cup>&lt;cup&gt;&lt;/cup&gt;</cup>",
    ],
    ["<cup></cup>", "<cone></cone>", "<cone></cone>", "<cup></cup>"],
  ],
  HTML_CODE_NUMBERS: ["1<br>2<br>3<br>4<br>", "1<br>2<br>3<br>4<br>"],
  SCOOPS: [
    [
      ["cup-pulse", "scoop-pink-pulse"],
      ["cone", "scoop-pink-pulse"],
      ["choco-pulse", "scoop-pink-pulse"],
    ],
    [
      ["cup", "pink-pulse", "pink-pulse"],
      ["cone", "pink-pulse"],
      ["pink-pulse"],
    ],
    [
      ["cup", "scoop-pink-pulse", "scoop-pink-pulse"],
      ["cone", "pink-pulse"],
      ["pink-pulse"],
    ],
  ],
};

export default RULES_SCOOPS;
