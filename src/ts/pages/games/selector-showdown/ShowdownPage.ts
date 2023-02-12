import Page from "../../abstract/page";
import showLevel from "./show-level";

class ShowdownPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    showLevel();
  }

  render() {
    this.container.innerHTML = `
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
                  <div class="showdown__levels">
                    <button data-level="1" class="btn btn__level btn__level_current">1</button>
                    <button data-level="2" class="btn btn__level">2</button>
                    <button data-level="3" class="btn btn__level btn__level_locked" disabled>3</button>
                  </div>
                  <button class="btn btn__volume"><img src="./assets/images/froggy/sound-on.svg"/></button>
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
      </main>
    `;
    return this.container;
  }
}

export default ShowdownPage;
