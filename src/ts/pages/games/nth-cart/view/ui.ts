const getEnvironmentHTML = () => `
  <div class="environment">
    <div class="wall">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="ladder"></div>
    <div class="table"></div>
  </div>
`;

export const getElementHTML = () => `<div class="element cart"></div>`;

const getTrackHTML = () => `
  <div class="track">
    <div class="doors">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="elements">
      ${getElementHTML()}
      ${getElementHTML()}
      ${getElementHTML()}
      ${getElementHTML()}
      ${getElementHTML()}
      ${getElementHTML()}
      <div class="element cart target"></div>
      ${getElementHTML()}
    </div>
  </div>
`;

const getWindowHTML = () => `
  <div class="window"></div>
`;

const getMusicHTML = () => `
  <div id="audio">
    <audio class="trolley" src="https://codepip.com/wp-content/plugins/codepip/games/nth-cart/audio/trolley.mp3"></audio>
    <audio class="dragging" src="https://codepip.com/wp-content/plugins/codepip/games/nth-cart/audio/dragging.mp3"></audio>
    <audio class="correct" src="https://codepip.com/wp-content/plugins/codepip/games/nth-cart/audio/correct.wav"></audio>
    <audio class="outside" src="https://codepip.com/wp-content/plugins/codepip/games/nth-cart/audio/outside.mp3"></audio>
  </div>
`;

export const getPageHTML = () => `
  <section class="cave">
    <header class="header nth-header"></header>
    ${getEnvironmentHTML()}
    ${getTrackHTML()}
    ${getMusicHTML()}
    ${getWindowHTML()}
  </section>
`;

export const test = () => ``;
