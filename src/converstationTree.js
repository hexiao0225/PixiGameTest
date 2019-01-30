class ConversationButton {
  constructor(_url) {
    this.sprite = PIXI.Sprite.fromImage(baseURL.nomalAssets + _url);
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(renderer.width * 0.4, renderer.height * 0.6);
    this.sprite.scale.set(1, 1);
    this.sprite.on('click', function() {
      alert('create button');
    });
    this.sprite.id = 'conversationButton';
    this.sprite.addChild(
      new PIXI.Text('Create Conversation', {
        font: '10px Arial',
        fill: 0x666666,
        align: 'left'
      })
    );
    stage.addChild(this.sprite);

    console.log(stage.children); //debug use
  }
}
