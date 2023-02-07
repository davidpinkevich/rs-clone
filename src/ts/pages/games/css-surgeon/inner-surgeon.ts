const innerSurgeon = () => `
<header class="header">
<div class="container">
    <a href="#">click to main from surgeon</a>
</div>
</header>
<main class="surgeon">
<div class="container">
    <div class="surgeon__wrapper">
        <section class="surgeon__sidebar">
            <div class="surgeon__header">
                <h1>CSS SURGEON</h1>
                <div class="surgeon__controls">
                    <div class="surgeon__counter">
                        <span class="surgeon__indicator">
                            <span>Level</span>
                            <span class="surgeon__current">1</span>
                            <span>of</span>
                            <span class="surgeon__total">14</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="surgeon__instructions">
                <p>Welcome to CSS Surgeon. An irresponsible doctor has removed a bunch of organs from our
                    patient, CSS Sam. It's up to you to transplant the missing organs back into their body.</p>
                <p>Use the powerful CSS <code>transform</code> property to get the job done.
                    <code>transform</code> modifies elements using up to four operations at once, including
                    <code>translate</code>, <code>rotate</code>, <code>scale</code>, and <code>skew</code>.</p>
                <p><button class="button button__start">Start operating!</button></p>
            </div>
            <div class="surgeon__editor">
                <div class="surgeon__css">
                    <div class="surgeon__numbers">
                        1
                        <br>
                        2
                        <br>
                        3
                        <br>
                        4
                        <br>
                        5
                        <br>
                        6
                        <br>
                        7
                        <br>
                        8
                        <br>
                    </div>
                    <div class="surgeon__before" id="before">{</div>
                    <textarea class="surgeon__code" id="code" autofocus autocapitalize="none"></textarea>
                    <div class="surgeon__after" id="after">}</div>
                </div>
                <button class="button button__next" disabled>Next</button>
            </div>
            <div class="surgeon__winner">
                <div class="surgeon__head">
                    <div class="surgeon__img">
                        <img src="https://codepip.com/wp-content/plugins/codepip/images/badges/css-surgeon.svg"/>
                    </div>
                </div>
                <h3 class="surgeon__subtitle">CSS Surgeon</h3>
                <div class=surgeon__descr>
                    You're a hero! Thanks to your mastery of CSS transform, you were able to replace all the missing organs and put CSS Sam on the road to recovery. Now to find CSS Sam some clothes...
                </div>
                <div class="surgeon__button">
                    <a class="button button__records" href="#">View All Badges</a>
                </div>
            </div>
        </section>
        <section class="surgeon__view">
            <div class="surgeon__board">
                <div class="surgeon__items-wrapper">
                    <img data-level="1" class="surgeon__items surgeon__items_0 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/rusty-nail-item.svg" />
                    <img data-level="2" class="surgeon__items surgeon__items_1 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/handlebar-mustache-item.svg" />
                    <img data-level="3" class="surgeon__items surgeon__items_2 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/ruby-lips-item.svg" />
                    <img data-level="4" class="surgeon__items surgeon__items_3 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pearly-white-item.svg" />
                    <img data-level="5" class="surgeon__items surgeon__items_4 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/meatier-thigh-item.svg" />
                    <img data-level="6" class="surgeon__items surgeon__items_5 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/limp-node-item.svg" />
                    <img data-level="7" class="surgeon__items surgeon__items_6 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pull-yourself-up-by-your-bootstrap-item.svg" />
                    <img data-level="8" class="surgeon__items surgeon__items_7 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/six-pack-item.svg" />
                    <img data-level="9" class="surgeon__items surgeon__items_8 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/fused-backbone-item.svg" />
                    <img data-level="10" class="surgeon__items surgeon__items_9 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/gulping-gullet-item.svg" />
                    <img data-level="11" class="surgeon__items surgeon__items_10 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/knee-jerk-reaction-item.svg" />
                    <img data-level="12" class="surgeon__items surgeon__items_11 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/mighty-python-item.svg" />
                    <img data-level="13" class="surgeon__items surgeon__items_12 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/droopy-lid-item.svg" />
                    <img data-level="14" class="surgeon__items surgeon__items_13 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/spring-in-your-step-item.svg" />
                </div>
                <div class="surgeon__holes-wrapper">
                    <img data-level="1" class="surgeon__holes surgeon__holes_0 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/rusty-nail-hole.svg"
                        style="transform: translateX(100px)" />
                    <img data-level="2" class="surgeon__holes surgeon__holes_1 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/handlebar-mustache-hole.svg"
                        style="transform: translateY(100px)" />
                    <img data-level="3" class="surgeon__holes surgeon__holes_2 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/ruby-lips-hole.svg"
                        style="transform: translateY(-190px)" />
                    <img data-level="4" class="surgeon__holes surgeon__holes_3 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pearly-white-hole.svg" 
                        style="transform: translateX(100px) translateY(150px)" />
                    <img data-level="5" class="surgeon__holes surgeon__holes_4 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/meatier-thigh-hole.svg"
                        style="transform: rotate(90deg)" />
                    <img data-level="6" class="surgeon__holes surgeon__holes_5 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/limp-node-hole.svg"
                        style="transform: rotate(270deg)" />
                    <img data-level="7" class="surgeon__holes surgeon__holes_6 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pull-yourself-up-by-your-bootstrap-hole.svg"
                        style="transform: translateX(50px) rotate(90deg);" />
                    <img data-level="8" class="surgeon__holes surgeon__holes_7 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/six-pack-hole.svg"
                        style="transform: scale(2)" />
                    <img data-level="9" class="surgeon__holes surgeon__holes_8 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/fused-backbone-hole.svg"
                        style="transform: scale(0.5, 2)" />
                    <img data-level="10" class="surgeon__holes surgeon__holes_9 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/gulping-gullet-hole.svg"
                        style="transform: scale(-1, -2)" />
                    <img data-level="11" class="surgeon__holes surgeon__holes_10 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/knee-jerk-reaction-hole.svg"
                        style="transform: translate(-100px, 50px) scaleY(2)" />
                    <img data-level="12" class="surgeon__holes surgeon__holes_11 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/mighty-python-hole.svg"
                        style="transform: skewX(50deg)" />
                    <img data-level="13" class="surgeon__holes surgeon__holes_12 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/droopy-lid-hole.svg"
                        style="transform: translateY(200px) skew(20deg, 20deg)" />
                    <img data-level="14" class="surgeon__holes surgeon__holes_13 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/spring-in-your-step-hole.svg"
                        style="transform: translate(100px, 50px) rotate(90deg) scale(2) skew(30deg)" />
                </div>
                <div class="surgeon__sam">
                    <div class="surgeon__body">
                        <div class="surgeon__overlay">
                            <img data-level="1" class="surgeon__item surgeon__item_0 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/rusty-nail-item.svg" />
                            <img data-level="2" class="surgeon__item surgeon__item_1 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/handlebar-mustache-item.svg" />
                            <img data-level="3" class="surgeon__item surgeon__item_2 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/ruby-lips-item.svg" />
                            <img data-level="4" class="surgeon__item surgeon__item_3 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pearly-white-item.svg" />
                            <img data-level="5" class="surgeon__item surgeon__item_4 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/meatier-thigh-item.svg" />
                            <img data-level="6" class="surgeon__item surgeon__item_5 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/limp-node-item.svg" />
                            <img data-level="7" class="surgeon__item surgeon__item_6 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pull-yourself-up-by-your-bootstrap-item.svg" />
                            <img data-level="8" class="surgeon__item surgeon__item_7 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/six-pack-item.svg" />
                            <img data-level="9" class="surgeon__item surgeon__item_8 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/fused-backbone-item.svg" />
                            <img data-level="10" class="surgeon__item surgeon__item_9 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/gulping-gullet-item.svg" />
                            <img data-level="11" class="surgeon__item surgeon__item_10 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/knee-jerk-reaction-item.svg" />
                            <img data-level="12" class="surgeon__item surgeon__item_11 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/mighty-python-item.svg" />
                            <img data-level="13" class="surgeon__item surgeon__item_12 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/droopy-lid-item.svg" />
                            <img data-level="14" class="surgeon__item surgeon__item_13 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/spring-in-your-step-item.svg" />

                            <img data-level="1" class="surgeon__hole surgeon__hole_0"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/rusty-nail-hole.svg" />
                            <img data-level="2" class="surgeon__hole surgeon__hole_1"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/handlebar-mustache-hole.svg" />
                            <img data-level="3" class="surgeon__hole surgeon__hole_2"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/ruby-lips-hole.svg" />
                            <img data-level="4" class="surgeon__hole surgeon__hole_3"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pearly-white-hole.svg" />
                            <img data-level="5" class="surgeon__hole surgeon__hole_4"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/meatier-thigh-hole.svg" />
                            <img data-level="6" class="surgeon__hole surgeon__hole_5"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/limp-node-hole.svg" />
                            <img data-level="7" class="surgeon__hole surgeon__hole_6"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pull-yourself-up-by-your-bootstrap-hole.svg" />
                            <img data-level="8" class="surgeon__hole surgeon__hole_7"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/six-pack-hole.svg" />
                            <img data-level="9" class="surgeon__hole surgeon__hole_8"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/fused-backbone-hole.svg" />
                            <img data-level=10" class="surgeon__hole surgeon__hole_9"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/gulping-gullet-hole.svg" />
                            <img data-level="11" class="surgeon__hole surgeon__hole_10"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/knee-jerk-reaction-hole.svg" />
                            <img data-level="12" class="surgeon__hole surgeon__hole_11"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/mighty-python-hole.svg" />
                            <img data-level="13" class="surgeon__hole surgeon__hole_12"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/droopy-lid-hole.svg" />
                            <img data-level="14" class="surgeon__hole surgeon__hole_13"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/spring-in-your-step-hole.svg" />
                        </div>
                        <img class="surgeon__sam-img"
                            src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/../css-sam.svg" />
                        <img class="surgeon__sam-win"
                            src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/../css-sam-win.svg" />
                    </div>
                </div>
        </section>
    </div>
</div>
</main>
`;

export default innerSurgeon;
