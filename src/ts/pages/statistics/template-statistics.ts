const templateStatistics = (): string => `
<div class="main__space">
<header class="main__header">
  <a href="#" class="main__header-logo">SpaceCSS</a>
  <a href="#statistics" class="main__header-results">Results</a>
</header>
<section class="statistics">
  <h2>Results</h2>
  <div class="statistics__wrapper">
    <div class="statistics__achievements">
      <div class="statistics__achievement statistics__achievement_1">
        <div class="statistics__icon">
          <span class="modal__badge"></span>
        </div>
        <div class="statistics__details">
          <h4><a href="#scoops">CSS Scoops</a></h4>
          <div class="statistics__meter">
            <div class="statistics__bar"></div>
          </div>
          <div class="statistics__progress">
            <span class="statistics__current">1</span>
            of 20 levels
          </div>
        </div>
      </div>
      <div class="statistics__achievement statistics__achievement_2">
        <div class="statistics__icon">
          <span class="modal__badge"></span>
        </div>
        <div class="statistics__details">
          <h4><a href="#surgeon">CSS Surgeon</a></h4>
          <div class="statistics__meter">
            <div class="statistics__bar"></div>
          </div>
          <div class="statistics__progress">
            <span class="statistics__current">1</span>
            of 14 levels
          </div>
        </div>
      </div>
      <div class="statistics__achievement statistics__achievement_3">
        <div class="statistics__icon">
          <span class="modal__badge"></span>
        </div>
        <div class="statistics__details">
          <h4><a href="#froggy">Flexbox Froggy</a></h4>
          <div class="statistics__meter">
            <div class="statistics__bar"></div>
          </div>
          <div class="statistics__progress">
            <span class="statistics__current">1</span>
            of 24 levels
          </div>
        </div>
      </div>
      <div class="statistics__achievement statistics__achievement_4">
        <div class="statistics__icon">
          <span class="modal__badge"></span>
        </div>
        <div class="statistics__details">
          <h4><a href="#garden">Grid Garden</a></h4>
          <div class="statistics__meter">
            <div class="statistics__bar"></div>
          </div>
          <div class="statistics__progress">
            <span class="statistics__current">1</span>
            of 14 levels
          </div>
        </div>
      </div>
      <div class="statistics__achievement statistics__achievement_5">
        <div class="statistics__icon">
          <span class="modal__badge"></span>
        </div>
        <div class="statistics__details">
          <h4><a href="#nth">Nth Cart</a></h4>
          <div class="statistics__meter">
            <div class="statistics__bar"></div>
          </div>
          <div class="statistics__progress">
            <span class="statistics__current">1</span>
            of 40 levels
          </div>
        </div>
      </div>
      <div class="statistics__achievement statistics__achievement_6">
        <div class="statistics__icon">
          <span class="modal__badge"></span>
        </div>
        <div class="statistics__details">
          <h4><a href="#showdown">Selector Showdown</a></h4>
          <div class="statistics__meter">
            <div class="statistics__bar"></div>
          </div>
          <div class="statistics__progress">
            <span class="statistics__current">1</span>
            of 64 levels
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="main__body">
  <div class="move__wrapper-planet pulse__main">
    <div class="main__body-planet"></div>
  </div>
  <div class="move__wrapper-stars pulse__main">
    <div class="main__body-stars"></div>
  </div>
  <div class="move__wrapper-star move__wrapper-star-one">
    <div class="main__body-star main__body-star-one"></div>
  </div>
  <div class="move__wrapper-star move__wrapper-star-two">
    <div class="main__body-star main__body-star-two"></div>
  </div>
  <div class="move__wrapper-star move__wrapper-star-three">
    <div class="main__body-star main__body-star-three"></div>
  </div>
</div>
<footer class="main__footer">
  <div class="main__footer-git">
    <a href="https://github.com/davidpinkevich" class="main__footer-git-person person__one" target='blank'></a>
    <a href="https://github.com/nkp1sss" class="main__footer-git-person person__two" target='blank'></a>
    <a href="https://github.com/1sak0v" class="main__footer-git-person person__three" target='blank'></a>
  </div>
  <div class="main__footer-rs">
    <a href="https://rs.school/" class="main__footer-rs-img" target='blank'></a>
  </div>
  <div class="main__body-ground-left"></div>
  <div class="main__body-ground-right"></div>
</footer>
</div>
`;

export default templateStatistics;
