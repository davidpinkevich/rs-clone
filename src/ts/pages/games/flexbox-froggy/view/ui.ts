export const getLevelHTML = () => `<span class="level-marker"></span>`;

const getLevelsWrapperHTML = () => `
  <div class="levels-wrapper tooltip" style="display: none;">
    <div class="levels"></div>
    <div class="label-reset">Reset</div>
  </div>
`;

const getControlsHTML = () => `
  <div class="header__controls controls">
    <div class="controls-sound">
      <img class="sound-img" src="./assets/images/froggy/sound-on.svg" width="25px" height="25px" alt="sound">
    </div>
    <div class="controls-language">en</div>
    <div class="level-counter">
      <span class="arrow left">
        <span class="triangle"></span>
      </span>
      <div class="level-indicator">Level 1 of 24 ▾</div>
      <span class="arrow right">
        <span class="triangle"></span>
      </span>
      ${getLevelsWrapperHTML()}
    </div>
  </div>
`;

const getEditorHTML = () => `
  <div class="editor">
    <div class="line-numbers">
      1 <br> 2 <br> 3 <br> 4 <br> 5 <br> 6 <br> 7 <br> 8 <br> 9 <br> 10 <br>
    </div>
    <div class="code__wrapper">
      <pre id="before"></pre>
      <textarea id="code" autofocus rows="1"></textarea>
      <pre id="after"></pre>
    </div>
    <button class="next-btn">Next</button>
  </div>
`;

const getSidebarHTML = () => `
  <section id="sidebar">
    <div class="sidebar-header">
      <h1 class="header__title title">FLEXBOX FROGGY</h1>
      ${getControlsHTML()}
    </div>
    <div class="instructions">ЗДЕСЬ ГЕНЕРИРОВАТЬ ИНСТРУКЦИИ</div>
    ${getEditorHTML()}
  </section>
`;

export const getFrogHTML = () => `
  <div class="frog__wrapper">
    <img class="frog-img animate__animated animate__pulse animate__infinite" src="./assets/images/froggy/frog-green.svg" alt="frog">
  </div>
`;

export const getLilyHTML = () => `
  <div class="lily__wrapper">
    <img class="lily-img green" src="./assets/images/froggy/lilypad-green.svg" alt="lilypad">
  </div>
`;

const getViewHTML = () => `
  <section id="view">
    <div class="board">
      <div class="frogs">

      </div>
      <div class="lilies">

      </div>
    </div>
  </section>
`;

const getPageHTML = () => `
  <section class="froggy-page">
    <header class="header froggy-header">
      <div class="container"></div>
    </header>
    <div class="main froggy-main">
      <div class="container">
        ${getSidebarHTML()}
        ${getViewHTML()}
      </div>
    </div>
    <div id="audio">
      <audio class="correct" src="https://codepip.com/wp-content/plugins/codepip/games/flexbox-froggy/audio/correct.wav"></audio>
      <audio class="boing" src="https://codepip.com/wp-content/plugins/codepip/games/flexbox-froggy/audio/boing.wav"></audio>
      <audio class="win" src="https://codepip.com/wp-content/plugins/codepip/games/flexbox-froggy/audio/win.mp3"></audio>
    </div>
  </section>
`;

export default getPageHTML;
