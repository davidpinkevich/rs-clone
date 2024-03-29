const drowPageGarden = () => `
<header class="main__header">
  <a href="#" class="main__header-logo">SpaceCSS</a>
  <a href="#statistics" class="main__header-results">Results</a>
</header>
<div class="garden">
<div class="garden__info">
  <div class="garden__info-header">
    <h1 class="garden__info-header-title">grid garden</h1>
    <div class="garden__info-header-settings settings__garden">
      <div class="settings__garden-sound sound__grid-on"><img class="sound__img-grid" src="./assets/images/froggy/sound-on.svg"></div>
      <div class="settings__garden-lang">English</div>
      <div class="settings__garden-levels">
        <button class='settings__garden-levels-last'></button>
        <div class='settings__garden-levels-list'><p>Level:</p> <span></span></div>
        <button class='settings__garden-levels-next'></button>
        <div class='state__levels'></div>
      </div>
    </div>
  </div>
  <div class="garden__info-rules"></div>
  <div class="garden__info-code code__garden">
    <div class="code__garden-task"></div>
    <div class="code__garden-button-wrapper">
      <button class="code__garden-button" disabled>Next</button>
    </div>
  </div>
</div>
<div class="garden__game"></div>
</div>`;

export default drowPageGarden;
