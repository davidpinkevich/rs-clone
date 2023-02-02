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
      <div style="position: absolute; left: 40px; top: 10px">
        Рендерить beforeText в теге pre <br>
        Рендерить textarea с columns = stringsCount <br>
        Рендерить afterText в теге pre
      </div>
      <button class="button next-btn" disabled>Next</button>
    </div>
  </section>
`;

const getViewHTML = () => `
  <section id="view">
    <div class="board">
      <div class="frogs"></div>
      <div class="lilies"></div>
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