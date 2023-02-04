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
                <button class="button button__next">Next</button>
            </div>
        </section>
        <section class="surgeon__view">
            <div class="surgeon__board">
                <div class="surgeon__items-wrapper">
                    <img data-level="0" class="surgeon__items surgeon__items_0 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/rusty-nail-item.svg" />
                    <img data-level="1" class="surgeon__items surgeon__items_1 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/handlebar-mustache-item.svg" />
                    <img data-level="2" class="surgeon__items surgeon__items_2 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/ruby-lips-item.svg" />
                    <img data-level="3" class="surgeon__items surgeon__items_3 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pearly-white-item.svg" />
                    <img data-level="4" class="surgeon__items surgeon__items_4 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/meatier-thigh-item.svg" />
                    <img data-level="5" class="surgeon__items surgeon__items_5 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/limp-node-item.svg" />
                    <img data-level="6" class="surgeon__items surgeon__items_6 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/six-pack-item.svg" />
                    <img data-level="7" class="surgeon__items surgeon__items_7 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/fused-backbone-item.svg" />
                    <img data-level="8" class="surgeon__items surgeon__items_8 surgeon__items_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/mighty-python-item.svg" />
                </div>
                <div class="surgeon__holes-wrapper">
                    <img data-level="0" class="surgeon__holes surgeon__holes_0 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/rusty-nail-hole.svg"
                        style="transform: translateX(100px)" />
                    <img data-level="1" class="surgeon__holes surgeon__holes_1 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/handlebar-mustache-hole.svg"
                        style="transform: translateY(100px)" />
                    <img data-level="2" class="surgeon__holes surgeon__holes_2 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/ruby-lips-hole.svg"
                        style="transform: translateY(-190px)" />
                    <img data-level="3" class="surgeon__holes surgeon__holes_3 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pearly-white-hole.svg" 
                        style="transform: translateX(100px) translateY(150px)" />
                    <img data-level="4" class="surgeon__holes surgeon__holes_4 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/meatier-thigh-hole.svg"
                        style="transform: rotate(180deg)" />
                    <img data-level="5" class="surgeon__holes surgeon__holes_5 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/limp-node-hole.svg"
                        style="transform: rotate(270deg)" />
                    <img data-level="6" class="surgeon__holes surgeon__holes_6 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/six-pack-hole.svg"
                        style="transform: scale(2)" />
                    <img data-level="7" class="surgeon__holes surgeon__holes_7 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/fused-backbone-hole.svg"
                        style="transform: scale(0.5, 2)" />
                    <img data-level="8" class="surgeon__holes surgeon__holes_8 surgeon__holes_hide"
                        src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/mighty-python-hole.svg"
                        style="transform: skewX(50deg)" />
                </div>
                <div class="surgeon__sam">
                    <div class="surgeon__body">
                        <div class="surgeon__overlay">
                            <img data-level="0" class="surgeon__item surgeon__item_0 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/rusty-nail-item.svg" />
                            <img data-level="1" class="surgeon__item surgeon__item_1 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/handlebar-mustache-item.svg" />
                            <img data-level="2" class="surgeon__item surgeon__item_2 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/ruby-lips-item.svg" />
                            <img data-level="3" class="surgeon__item surgeon__item_3 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pearly-white-item.svg" />
                            <img data-level="4" class="surgeon__item surgeon__item_4 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/meatier-thigh-item.svg" />
                            <img data-level="5" class="surgeon__item surgeon__item_5 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/limp-node-item.svg" />
                            <img data-level="6" class="surgeon__item surgeon__item_6 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/six-pack-item.svg" />
                            <img data-level="7" class="surgeon__item surgeon__item_7 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/fused-backbone-item.svg" />
                            <img data-level="8" class="surgeon__item surgeon__item_8 surgeon__item_hide"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/mighty-python-item.svg" />

                            <img data-level="0" class="surgeon__hole surgeon__hole_0"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/rusty-nail-hole.svg" />
                            <img data-level="1" class="surgeon__hole surgeon__hole_1"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/handlebar-mustache-hole.svg" />
                            <img data-level="2" class="surgeon__hole surgeon__hole_2"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/ruby-lips-hole.svg" />
                            <img data-level="3" class="surgeon__hole surgeon__hole_3"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/pearly-white-hole.svg" />
                            <img data-level="4" class="surgeon__hole surgeon__hole_4"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/meatier-thigh-hole.svg" />
                            <img data-level="5" class="surgeon__hole surgeon__hole_5"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/limp-node-hole.svg" />
                            <img data-level="6" class="surgeon__hole surgeon__hole_6"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/six-pack-hole.svg" />
                            <img data-level="7" class="surgeon__hole surgeon__hole_7"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/fused-backbone-hole.svg" />
                            <img data-level="8" class="surgeon__hole surgeon__hole_8"
                                src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/mighty-python-hole.svg" />
                        </div>
                        <img class="surgeon__sam-img"
                            src="https://codepip.com/wp-content/plugins/codepip/games/css-surgeon/images/items/../css-sam.svg" />
                    </div>
                </div>
        </section>
    </div>
</div>
</main>
`;

export default innerSurgeon;
