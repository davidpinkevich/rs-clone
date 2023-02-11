const drawPageScoops = () =>
  `<div class="scoops">
    <div class="scoops__sidebar">
      <div class="scoops__sidebar-header header__sidebar">
        <div class="header__sidebar-title">CSS SCOOPS</div>
        <div class="header__sidebar-levels animate__pulse">levels</div>
      </div>
      <div class="scoops__sidebar-body body__sidebar">
        <div class="body__sidebar-rules"></div>
        <div class="body__sidebar-code code__css">
          <div class="code__css-top">CSS</div>
          <div class="code__css-bottom">
            <div class="code__css-bottom-numbers">1<br>2<br>3<br>4<br></div>
            <div class="code__css-body">
              <div><input class="code__css-input" type="text"> {</div>
              <div>&nbsp;&nbsp;your-styles: here;</div>
              <div>&nbsp;&nbsp;your-styles: here;</div>
              <div>}</div>
              <button class="code__css-submit">submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scoops__game">
      <div class="scoops__game-header">
        <div class="scoops__game-header-window window__scoops"></div>
        <div class="scoops__game-header-table"></div>
        <div class="scoops__game-header-shadow"></div>
      </div>
      <div class="scoops__game-bottom game__html">
        <div class="game__html-body">
          <div class="game__html-code">
            <div class="code__html">
              <div class="code__html-top">HTML</div>
              <div class="code__html-bottom-wrapper">
                <div class="code__html-bottom">
                  <div class="code__html-bottom-numbers">1<br>2<br>3<br>4<br></div>
                  <div class="code__html-body"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="game__html-items">
            <div class="game__html-item">
              <img src="https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/stool.svg">
            </div>
            <div class="game__html-item">
              <img src="https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/stool.svg">
            </div>
            <div class="game__html-item">
            <img src="https://codepip.com/wp-content/plugins/codepip/games/css-scoops/images/stool.svg">
          </div>
          </div>
        </div>
      </div>
    </div>
    <div>
  </div>`;

export default drawPageScoops;
