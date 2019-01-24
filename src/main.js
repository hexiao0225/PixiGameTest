/*****************************************************

                    Main.js

*****************************************************/

var stage = new PIXI.Container();
var box;
var mousePosition = [0, 0];

/*
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

function getMousePos(event) {
  mousePosition[0] = event.clientX;
  mousePosition[1] = event.clientY;
  // document.body.textContent =
  //   'clientX: ' + event.clientX + ' - clientY: ' + event.clientY;
}

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('click', getMousePos);
