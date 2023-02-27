const drawMainPage = () => `
  <div class="main__space">
    <header class="main__header">
      <a href="#" class="main__header-logo">SpaceCSS</a>
      <a href="#statistics" class="main__header-results">Results</a>
    </header>
    <div class="main__games">
      <div class="main__games-title">CSS PLanets Games</div>
      <div class="main__games-body games__body">
        <a href="#scoops" class="games__body-image"></a>
        <div class="games__body-name">CSS Scoops</div>
        <div class="games__body-info">A game for learning CSS selectors</div>
      </div>
      <button class="games__body-last"><div class="games__body-last-img"></div></button>
      <button class="games__body-next"><div class="games__body-next-img"></div></button>
    </div>
    <div class="main__body">
      <div class="move__wrapper-planet pulse__main"><div class="main__body-planet"></div></div>
      <div class="move__wrapper-stars pulse__main"><div class="main__body-stars"></div></div>
      <div class="move__wrapper-star move__wrapper-star-one"><div class="main__body-star main__body-star-one"></div></div>
      <div class="move__wrapper-star move__wrapper-star-two"><div class="main__body-star main__body-star-two"></div></div>
      <div class="move__wrapper-star move__wrapper-star-three"><div class="main__body-star main__body-star-three"></div></div>
    </div>
    <footer class="main__footer">
      <div class="main__footer-git">
        <a href="https://github.com/davidpinkevich" class="main__footer-git-person person__one" target='blank'></a>
        <a href="https://github.com/nkp1sss" class="main__footer-git-person person__two"target='blank'></a>
        <a href="https://github.com/1sak0v" class="main__footer-git-person person__three"target='blank'></a>
      </div>
      <div class="main__footer-rs">
      <a href="https://rs.school/" class="main__footer-rs-img" target='blank'></a>
      </div>
      <div class="main__body-ground-left"></div>
      <div class="main__body-ground-right"></div>
  </footer>
  </div>`;

export default drawMainPage;
