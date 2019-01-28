var showSprite = false;
var menu;
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
    //console.log('called');
  }
}

function leftClick() {
  console.log('opened box');
}

function rightClick() {
  // menu2.updatePositionY(
  //   menuList.getCurrPositionY + 2 * menuList.getMenuButtonHeight()
  // );
  //   menu2.updatePositionY(
  //     menuList.getCurrPositionY() + menuList.getMenuButtonHeight()
  //   );
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

    //menuList = this.updateMenuList();
    // console.log(menu.getCurrPositionX());
    // console.log(menu.getCurrPositionY());
    //console.log(menu.getMenuButtonHeight());
  } else {
    //menuList.hideSprite();
  }
  //console.log('right click x ' + mousePosition[0]);
}
