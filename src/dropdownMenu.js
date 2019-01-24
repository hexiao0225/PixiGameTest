class dropdownMenu {
  constructor() {
    //this = '<div class="dropdown-content"><ul><li>happy</li><li>sad</li></ul></div>';
    this.sprite = PIXI.Sprite.fromImage('../bin/assets/post-it.png');
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
    this.sprite.scale.set(0.4, 0.4);
    this.sprite.addChild(text);
    stage.addChild(this.sprite);
  }
}

var text = new PIXI.Text('menu', {
  font: '20px Arial',
  fill: 0x666666,
  align: 'center',
  cacheAsBitmap: true, // for better performance
  height: 57,
  width: 82
});
