var showSprite = false;
var menu;
class Box {
  constructor(_url) {
    this.sprite = PIXI.Sprite.fromImage(baseURL.nomalAssets + _url);
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
    this.sprite.scale.set(0.4, 0.4);
    this.tagType = ['container']; //container -> open as left click default
    this.sprite.verbList = ['lookUp', 'burn', 'kick', 'etc']; //right click actions
    this.sprite.on('click', leftClick.bind(this));
    this.sprite.on('rightclick', rightClick.bind(this));
    this.sprite.id = 'boxId';
    stage.addChild(this.sprite);
    this.sprite.menuList = null;

    console.log(stage.children); //debug use
  }
  getTagType() {
    return this.sprite.tagType;
  }
  getVerbList() {
    return this.sprite.verbList;
  }
}

//left click -> apply default action
function leftClick() {
  this.sprite.alpha = 0;
  box2 = new Box('box2.png');
  console.log('opened box');
}

//right click -> show a list of verbs
function rightClick() {
  if (!menu) {
    const vl = this.getVerbList();
    var i;
    var height;

    for (i = 0; i < vl.length; i++) {
      console.log('verbs ' + vl[i]);
      if (i == 0) {
        var firstButton = new dropdownMenu(
          mousePosition[0],
          mousePosition[1],
          vl[i]
        );
        //firstButton.updateVerb(vl[i]);
        height = firstButton.getMenuButtonHeight();
      } else {
        var menu = new dropdownMenu(
          mousePosition[0],
          mousePosition[1] + i * height,
          vl[i]
        );
        //menu.updateVerb(vl[i]);
      }
    }
  } else {
    menu.hideSprite();
  }
}
