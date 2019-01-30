class Collectable {
  constructor(_url) {
    this.sprite = PIXI.Sprite.fromImage(baseURL.nomalAssets + _url);
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(renderer.width * 0.3, renderer.height * 0.3);
    this.sprite.scale.set(0.4, 0.4);
    this.tagType = ['collectable']; //container -> open as left click default
    this.sprite.verbList = ['lookUp', 'burn', 'kick', 'etc']; //right click actions
    this.sprite.on('click', function() {
      alert('will be added to inventory.');
    });
    //this.sprite.on('rightclick', rightClick.bind(this));
    this.sprite.id = 'collectableId';
    stage.addChild(this.sprite);

    //console.log(stage.children); //debug use
  }
  getTagType() {
    return this.sprite.tagType;
  }
  getVerbList() {
    return this.sprite.verbList;
  }
}
