const drowPageGarden = () => `<div class="garden __container">
<div class="garden__info">
  <div class="garden__info-header">
    <h1 class="garden__info-header-title">grid garden</h1>
    <div class="garden__info-header-settings settings__garden">
      <div class="settings__garden-sound">Sound</div>
      <div class="settings__garden-levels">
        <button class='settings__garden-levels-last'></button>
        <div class='settings__garden-levels-list'>Level: <span></span></div>
        <button class='settings__garden-levels-next'></button>
        <div class='state__levels'></div>
      </div>
    </div>
  </div>
  <div class="garden__info-rules"></div>
  <div class="garden__info-code code__garden">
    <div class="code__garden-task"></div>
    <button class="code__garden-button" disabled>Next</button>
  </div>
</div>
<div class="garden__game"></div>
</div>`;

export default drowPageGarden;
