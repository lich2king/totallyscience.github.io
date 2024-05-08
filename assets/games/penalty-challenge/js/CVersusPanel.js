function CVersusPanel(oParentContainer){
    var _oListener;
    
    var _oFade;
    var _oFlagPlayer;
    var _oFlagOpponent;
    var _oVsText;
    var _oMatchText;
    var _oContainer;
    var _oParentContainer = oParentContainer;
    
    var _oThis = this;
    
    this._init = function(){
        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        _oParentContainer.addChild(_oContainer);
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function () {});
        _oContainer.addChild(_oFade);
        
        var oSpriteBg = s_oSpriteLibrary.getSprite("msg_box_small");
        var oBg = createBitmap(oSpriteBg);
        oBg.x = CANVAS_WIDTH_HALF;
        oBg.y = CANVAS_HEIGHT_HALF;
        oBg.regX = oSpriteBg.width/2;
        oBg.regY = oSpriteBg.height/2;
        _oContainer.addChild(oBg);
        
        
        var oSprite = s_oSpriteLibrary.getSprite("flag_"+s_iTeamSelected);
        _oFlagPlayer = createBitmap(oSprite);
        _oFlagPlayer.y = CANVAS_HEIGHT_HALF-6;
        _oContainer.addChild(_oFlagPlayer);
        
        oSprite = s_oSpriteLibrary.getSprite("flag_0");
        _oFlagOpponent = createBitmap(oSprite);
        _oFlagOpponent.y = CANVAS_HEIGHT_HALF-6;
        _oContainer.addChild(_oFlagOpponent);
        
        _oVsText = new createjs.Text(TEXT_VS, "82px " + PRIMARY_FONT, "#fff");
        _oVsText.x = CANVAS_WIDTH_HALF;
        _oVsText.y = CANVAS_HEIGHT_HALF+44;
        _oVsText.textAlign = "center";
        _oVsText.textBaseline = "middle";
        _oContainer.addChild(_oVsText);
        
        _oMatchText = new createjs.Text(TEXT_MATCH, "82px " + PRIMARY_FONT, "#fff");
        _oMatchText.x = CANVAS_WIDTH_HALF;
        _oMatchText.y = 230;
        _oMatchText.textAlign = "center";
        _oMatchText.textBaseline = "alphabetic";
        _oContainer.addChild(_oMatchText);
    };
    
    this.unload = function(){
        _oFade.off("click",_oListener);
    };
    
    this.show = function(iOpponent,iLevel){
        _oMatchText.text = TEXT_MATCH + " " + iLevel;
        _oFlagOpponent.image = s_oSpriteLibrary.getSprite("flag_"+iOpponent);
        
        _oFlagPlayer.x = -200;
        _oFlagOpponent.x = CANVAS_WIDTH+200;
        
        _oVsText.scaleX = _oVsText.scaleY = 3;
        _oVsText.alpha = 0;
        
        _oContainer.alpha = 0;
        _oContainer.visible = true;
        createjs.Tween.get(_oContainer).to({alpha: 1}, 500, createjs.Ease.cubicOut).call(function(){
            _oThis.playAnims();
        });
    };
    
    this.hide = function(){
        createjs.Tween.get(_oContainer).to({alpha: 0}, 500, createjs.Ease.quartOut).call(function(){
                                                                                _oContainer.visible = false;
                                                                            });
    };
    
    this.playAnims = function(){
        var iTime = 300;
        createjs.Tween.get(_oFlagPlayer).to({x: CANVAS_WIDTH_HALF - 176}, iTime, createjs.Ease.cubicOut);
        createjs.Tween.get(_oFlagOpponent).to({x: CANVAS_WIDTH_HALF + 80}, iTime, createjs.Ease.cubicOut);
        createjs.Tween.get(_oVsText).wait(iTime).to({scaleX:1,scaleY:1,alpha:1}, 200, createjs.Ease.cubicOut).call(function(){
                                                                                                                setTimeout(function(){
                                                                                                                    _oThis.hide();
                                                                                                                },2500);
                                                                        });
    };
    
    this._init();
}