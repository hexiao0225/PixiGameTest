class dropdownMenu {
  constructor() {
    //this = '<div class="dropdown-content"><ul><li>happy</li><li>sad</li></ul></div>';
    this.sprite = PIXI.Sprite.fromImage('../bin/assets/button1.png');
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
    this.sprite.scale.set(0.3, 0.3);
    this.sprite.addChild(menu_verb);
    stage.addChild(this.sprite);
    this.sprite.on('click', function() {
      console.log('text is ' + menu_verb.text);
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

let menu_verb = new PIXI.Text('verbs', {
  font: '2em Arial',
  fill: 0x666666,
  align: 'center',
  cacheAsBitmap: true // for better performance
  //   height: 57,
  //   width: 82
});
