const getSidebarHTML = () => `
  <section id="sidebar">
    <div class="sidebar-header">
      <h1 class="header__title title">FLEXBOX FROGGY</h1>
      <div class="header__controls controls">
        TODO: controls
      </div>
    </div>
    <div class="instructions">ЗДЕСЬ ГЕНЕРИРОВАТЬ ИНСТРУКЦИИ</div>
    <div class="editor">
      <div class="line-numbers">
        1 <br> 2 <br> 3 <br> 4 <br> 5 <br> 6 <br> 7 <br> 8 <br> 9 <br> 10 <br>
      </div>
      <div class="code__wrapper">
        <pre id="before"></pre>
        <textarea id="code" autofocus rows="1"></textarea>
        <pre id="after"></pre>
      </div>
      <button class="button next-btn" disabled>Next</button>
    </div>
  </section>
`;

export const getFrogHTML = () => `
  <div class="frog__container">
    <img class="frog-img" src="./assets/images/froggy/frog-green.svg" alt="frog">
  </div>
`;

export const getLilyHTML = () => `
  <div class="lily__container">
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
  <div class="container">
    <header class="header froggy-header"></header>
    <div class="main froggy-main">
      ${getSidebarHTML()}
      ${getViewHTML()}
    </div>
    <a href="#">click to main from froggy 111</a>
  </div>
`;

export default getPageHTML;
