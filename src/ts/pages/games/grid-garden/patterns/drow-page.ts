const drowPageGarden = () => `<div class="garden __container">
<div class="garden__info">
  <div class="garden__info-header">
    <h1 class="garden__info-header-title">grid garden</h1>
    <div class="garden__info-header-settings settings__garden">
      <div class="settings__garden-sound">Sound</div>
      <div class="settings__garden-levels">Levels</div>
    </div>
  </div>
  <div class="garden__info-rules"></div>
  <div class="garden__info-code code__garden">
    <div class="code__garden-task">
      <p class="code__garden-task-text"><span></span>garden {</p>
      <p class="code__garden-task-text"><span></span>display: grid;</p>
      <p class="code__garden-task-text"><span></span>grid-template-columns: 20% 20% 20% 20% 20%;</p>
      <p class="code__garden-task-text"><span></span>grid-template-rows: 20% 20% 20% 20% 20%;</p>
      <p class="code__garden-task-text"><span></span>}</p>
    </div>
    <button class="code__garden-button">Next</button>
  </div>
</div>
<div class="garden__game"></div>
</div>`;

export default drowPageGarden;
