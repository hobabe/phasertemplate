EPT._sprite = {
  addSprites: function(_this, arrSprites) {
    // console.log('\n EPT.ArraysM:', arrSprites);
    var arrSpritesAdd = []
    for(var i=0;i<arrSprites.length;i++){
      var s = arrSprites[i];
      var sAdd = _this.add.sprite(s.x, s.y, s.key).setScale(s.scale);
      arrSpritesAdd.push(sAdd);
    }
    return arrSpritesAdd;
  },
  addSpriteOption(_this, config){
    var sAdd = null;
    switch (config.type) {
      case 'text':
        sAdd = _this.add.text(config.x, config.y, config.text, EPT._const.fontStory(config.size)); 
        break;
      case 'button':
        var keyImg = config.keyImg?'button-mainmenu': 'button-continue';
        sAdd = new Button(config.x, config.y, keyImg, function()
          {
            if(config.function){
              if(config.param){
                config.function(config.param);
              } else {
                config.function();
              }
            }
          }, _this);
        break;
      default:
        break;
    }

    //check set origin
    var cfOrigin = config.setOrigin;
    if(cfOrigin){
      sAdd.setOrigin(cfOrigin[0],cfOrigin[1])
    }

    //check animation
    var animation = config.animation;
    if(animation){
      animation['targets'] = sAdd;
      _this.tweens.add(animation);
    }
    return sAdd;
  },
  
  destroySprite(arr, nameObChild){
    for(var k=0;k<arr.length;k++){
      if(arr[k]){
        try {
          if(!nameObChild){
            arr[k].destroy();
          } else {
            arr[k][nameObChild].destroy();
          }
        } catch (error){
          console.log(arr[k]);
        }
        
      }
    }
  },
  d_updateTextFollowSprites(spritesLevel, textLevel){
      // EPT._scene.story.buttonAnswers = [];
    // EPT._scene.story.textLevel = [];
    for(var i=0;i<spritesLevel.length;i++){
      var btn = spritesLevel[i],
          textbtn = textLevel[i].textOb;
      var xText = btn.x -20 - btn.width/2,
          yText = btn.y -20 - btn.height/2;
    
      textbtn.x = xText;
      textbtn.y = yText;
    }
  }
};