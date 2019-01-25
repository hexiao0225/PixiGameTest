var showSprite = false;
let menu;
class Box {
  constructor() {
    this.sprite = PIXI.Sprite.fromImage('../bin/assets/box1.png');
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
    this.sprite.scale.set(0.4, 0.4);
    //tags ["container","moveable","collectable"]
    this.tagType = ['container'];
    this.sprite.verbList = ['lookUp', 'burn'];
    //left and right click
    this.sprite.on('click', leftClick.bind(this));

    this.sprite.on('rightclick', rightClick.bind(this));
    this.sprite.id = 'boxId';
    stage.addChild(this.sprite);
    this.sprite.menuList = null;

    //will show an array of children
    console.log(stage.children);
  }
  getTagType() {
    return this.sprite.tagType;
  }
  getVerbList() {
    return this.sprite.verbList;
  }

  updateMenuList() {
    const vl = this.sprite.verbList;
    let i;
    for (i = 0; i < vl.lengh; i++) {
      console.log('verbs ' + vl[i]);
    }
    if (!menu) {
      menu = new dropdownMenu();
      const menuButtonHeight = menu.getMenuButtonHeight();
      // console.log(menu.getCurrPositionX());
      // console.log(menu.getCurrPositionY());
      //console.log(menu.getMenuButtonHeight());
      menu.updateVerb('haha');
    } else {
      menu.hideSprite();
    }
  }
}

function leftClick() {
  console.log('opened box');
}

function rightClick() {
  this.updateMenuList();
  console.log('right click x ' + mousePosition[0]);
}
