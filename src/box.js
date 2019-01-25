var showSprite = true;
class Box {
  constructor() {
    this.sprite = PIXI.Sprite.fromImage('../bin/assets/box1.png');
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
    this.sprite.scale.set(0.4, 0.4);
    //tags ["container","moveable","collectable"]
    this.type = 'container';
    //left and right click
    this.sprite.on('click', leftClick.bind(this));

    this.sprite.on('rightclick', rightClick);
    this.sprite.id = 'boxId';
    stage.addChild(this.sprite);

    //will show an array of children
    console.log(stage.children);
  }
}

function leftClick() {
  console.log('opened box');
}

function rightClick() {
  //this.addChild(list);
  var newMenu = new dropdownMenu();
  if (!showSprite) showSprite = true;
  if (showSprite) {
    //newMenu.hideSprite();
    stage.removeChild(newMenu);
    showSprite = false;
  }

  console.log('right click x ' + mousePosition[0]);
  //e.preventDefault();
  //alert('rightclick');
}
