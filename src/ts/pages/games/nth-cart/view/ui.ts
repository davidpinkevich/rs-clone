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

export const getElementHTML = () => `<div class="element"></div>`;

const getTrackHTML = () => `
  <div class="track">
    <div class="doors">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="elements__wrapper">
      
    </div>
  </div>
`;

export const getLevelHTML = () => `<span class="level-marker">1</span>`;

const getDropdownMenuHTML = () => `
  <div class="dropdown-menu">
    <div class="levels-menu">

    </div>
    <div class="settings">
      <div class="reset">Reset</div>
      <div class="sound">
        <img class="sound-img" src="./assets/images/froggy/sound-on.svg" width="25px" height="25px" alt="sound">
      </div>
    </div>
  </div>
`;

export const getSelectorHTML = () => `
  <div class="selector">
    <div class="prefix"></div>
    <input class="input" type="text" autofocus autocomplete = "off" autocorrect = "off" autocapitalize = "off" spellcheck = "false" >
  </div>
`;

const getWindowHTML = () => `
  <div class="window">
    <div class="toolbar">
      <div class="toolbar__title">Nth Cart</div>
      <div class="toolbar__levels">
        <button class="button prev-btn">
          <div class="arrow"></div>
        </button>
        <div class="level-indicator">
          1 0f 40 ▾
        </div>
        <button class="button next-btn">
          <div class="arrow"></div>
        </button>
        ${getDropdownMenuHTML()}
      </div>
    </div>
    <div class="instructions"></div>
    <div class="editor">
      <div class="selectors">

      </div>
      <button class="button submit-btn">Submit ↵</button>
    </div>
  </div>
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
    <header class="main__header">
      <a href="#" class="main__header-logo">SpaceCSS</a>
      <a href="#statistics" class="main__header-results">Results</a>
    </header>
    ${getEnvironmentHTML()}
    ${getTrackHTML()}
    ${getMusicHTML()}
    ${getWindowHTML()}
  </section>
`;
