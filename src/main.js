/*****************************************************

                    Main.js

*****************************************************/

var stage = new PIXI.Container();
var box;
/*
document.addEventListener(
  'contextmenu',
  function(e) {
    alert("You've tried to open context menu");
    <ul></ul>
    //here you draw your own menu
    e.preventDefault();
  },
  false
);

PIXI.loader
  .add([
    'bin/assets/box1.png',
    'assets/box2.png',
    'assets/wordlock.png',
    'assets/M_cards.png'
  ])
  .load(init);
*/
function init() {
  console.log('init');
  box = new Box();
  renderer.backgroundColor = 0x22a7f0;
  renderer.render(stage);
  loop();
}

function loop() {
  requestAnimationFrame(loop);
  renderer.render(stage);
}
