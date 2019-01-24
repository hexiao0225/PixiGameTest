class Box {
  constructor() {
    this.sprite = PIXI.Sprite.fromImage('../bin/assets/box1.png');
    this.sprite.interactive = true;

    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
    this.sprite.scale.set(0.4, 0.4);
    this.type = 'container';
    //this.sprite.on('click', onButtonDown);
    //this.sprite.on('pointerdown', pointerDown);
    //this.sprite.addEventsListener('contextmenu', rightClick);
    this.sprite.on('contextmenu', function(e) {
      console.log('right click');
      e.preventDefault();
      alert('rightclick');
    });

    stage.addChild(this.sprite);
  }
}

function onButtonDown() {
  console.log('click detected');
}
function pointerDown() {
  console.log('pointer down detected');
}

function rightClick() {}
