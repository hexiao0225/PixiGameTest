class dropdownMenu {
  constructor(x, y, verb) {
    //this = '<div class="dropdown-content"><ul><li>happy</li><li>sad</li></ul></div>';
    this.sprite = PIXI.Sprite.fromImage('../bin/assets/button1.png');
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.anchor.set(0.5, 0.5);
    //this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
    this.sprite.position.x = x;
    this.sprite.position.y = y;
    this.sprite.scale.set(0.6, 0.6);
    this.sprite.addChild(
      new PIXI.Text(verb, {
        font: '20px Arial',
        fill: 0x666666,
        align: 'center',
        cacheAsBitmap: true // for better performance
      })
    );
    stage.addChild(this.sprite);
    this.sprite.on('click', function() {
      alert('text is ' + verb);
    });
  }

  hideSprite() {
    if (this.sprite.visible) {
      this.sprite.visible = false;
    } else {
      this.sprite.visible = true;
    }
  }

  updateVerb(s) {
    menu_verb.text = s;
  }

  updatePositionX(x) {
    this.sprite.position.x = x;
  }

  updatePositionY(y) {
    this.sprite.position.y = y;
  }

  getCurrPositionX() {
    return this.sprite.position.x;
  }

  getCurrPositionY() {
    return this.sprite.position.y;
  }

  getMenuButtonHeight() {
    return this.sprite.height;
  }
}
