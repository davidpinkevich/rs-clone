const showdownUi = () => `
<header class="header" style="background-color: #000">
  <div class="__container">
    <a href="#">click to main from showdown</a>
  </div>
</header>
<main class="showdown">
  <div class="showdown__wrapper">
    <section class="showdown__sidebar">
      <h1>SELECTOR SHOWDOWN</h1>
      <div class="showdown__nav">
        <button class="btn btn__prev" disabled><img src="./assets/images/showdown/arrow-left.svg"/></button>
        <div class="showdown__counter">
          <div class="showdown__indicator">
            <span class="showdown__current">1</span>
            <span class="showdown__slash">/</span>
            <span class="showdown__total">64</span>
            <span class="showdown__caret">▾</span>
          </div>
          <div class="showdown__levels-wrapper">
            <div class="showdown__levels"></div>
            <button class="btn btn__volume"><img class="btn__img" src="./assets/images/froggy/sound-on.svg"/></button>
          </div>
        </div>
        <button class="btn btn__next"><img src="./assets/images/showdown/arrow-right.svg"/></button>
      </div>
      <div class="showdown__instructions"></div>
    </section>
    <section class="showdown__main">
      <div class="showdown__panel showdown__top">
        <span class="showdown__selector showdown__selector_top"></span>
        <span class="showdown__specificity showdown__specificity_top"></span>
        <div class="showdown__versus">VS</div>
        <div class="showdown__background showdown__background_top"></div>
      </div>
      <div class="showdown__panel showdown__bottom">
        <div class="showdown__selector showdown__selector_bottom"></div>
        <span class="showdown__specificity showdown__specificity_bottom"></span>
        <div class="showdown__background showdown__background_bottom"></div>
      </div>
      <div class="showdown__btn showdown__btn_incorrect">
        <h2>Incorrect!</h2>
        <span>Level Down</span>
      </div>
      <div class="showdown__btn showdown__btn_correct">
        <h2>Correct!</h2>
        <span>Level Up</span>
      </div>
    </section>
  </div>
  <div class="modal" style="display: none;">
  <div class="modal__dialog">
      <div class="modal__content">
          <div class="modal__header">
          <span class="modal__close">×</span>
          </div>
          <div class="modal__body">
              <div>
                  <span class="modal__badge"></span>
              </div>
              <h3>Selector Showdown</h3>
              <div class="modal__descr">
                  <p>At last, you've reached the final level of the showdown. When it comes to CSS specificity, you really know your stuff.</p>
                  <p>Well, nearly everything... There is this ancient, forbidden command, called <code>!important</code>. But nevermind about that...</p>
              </div>
              <div class="modal__btn">
                <button class="btn btn__new">New Game</button>
                <a href="#statistics"><button class="btn btn__view"> View All Badges</button></a>
              </div>
          </div>
      </div>
  </div>
</div>
<div class="audio">
<audio class="audio__correct" src="https://codepip.com/wp-content/plugins/codepip/games/selector-showdown/audio/correct.wav"></audio>
<audio class="audio__incorrect" src="https://codepip.com/wp-content/plugins/codepip/games/selector-showdown/audio/incorrect.wav"></audio>
<audio class="audio__win" src="https://codepip.com/wp-content/plugins/codepip/games/selector-showdown/audio/win.wav"></audio>
</div>
</main>
`;

export default showdownUi;
