function CScoreBoard(iLevel,pContainerPos,oParentContainer) {
    var _pStartPos;
    var _oFlagOpponent;
    var _oCpuText;
    var _oScoreText;
    var _oContainerText;
    var _oContainer;
    var _oParentContainer = oParentContainer;
    

    this._init = function (iLevel,pContainerPos) {
        _pStartPos = pContainerPos;
        _oContainer = new createjs.Container();
        _oContainer.x = pContainerPos.x;
        _oContainer.y = pContainerPos.y;
        _oParentContainer.addChild(_oContainer);

        var oSpriteBg = s_oSpriteLibrary.getSprite("score_side_bg");
        var oBg = createBitmap(oSpriteBg);
        _oContainer.addChild(oBg);
        
        _oContainerText = new createjs.Container();
        _oContainerText.x = oSpriteBg.width/2;
        _oContainer.addChild(_oContainerText);
        
        
        //var iX = Math.max(oFlagPlayer.x, _oFlagOpponent.x);
        _oScoreText = new createjs.Text("0\n0",  "44px " + PRIMARY_FONT, TEXT_COLOR);
        //_oScoreText.x = oSpriteBg.width - 10;
        _oScoreText.y = 44;
        _oScoreText.textAlign = "right";
        _oScoreText.textBaseline = "alphabetic";
        _oContainerText.addChild(_oScoreText);
        
        var oFlagPlayer = createBitmap(s_oSpriteLibrary.getSprite("flag_"+TEAM_LABEL[s_iTeamSelected]));
        oFlagPlayer.scaleX = oFlagPlayer.scaleY = 0.4;
        oFlagPlayer.x = _oScoreText.x - _oScoreText.getBounds().width - 50;
        oFlagPlayer.y = 18;
        _oContainerText.addChild(oFlagPlayer);
        
        _oFlagOpponent = createBitmap(s_oSpriteLibrary.getSprite("flag_"+TEAM_LABEL[s_aMatches[iLevel-1]]));
        _oFlagOpponent.scaleX = _oFlagOpponent.scaleY = 0.4;
        _oFlagOpponent.x = oFlagPlayer.x;
        _oFlagOpponent.y = oFlagPlayer.y + 42;
        _oContainerText.addChild(_oFlagOpponent);
        
        
        var oNicknameText = new createjs.Text(TEXT_TEAM[s_iTeamSelected], "32px " + PRIMARY_FONT, TEXT_COLOR);
        oNicknameText.x = oFlagPlayer.x - 15;
        oNicknameText.y = 40;
        oNicknameText.textAlign = "right";
        oNicknameText.textBaseline = "alphabetic";
        _oContainerText.addChild(oNicknameText);

        _oCpuText = new createjs.Text(TEXT_TEAM[s_aMatches[iLevel-1]], "32px " + PRIMARY_FONT, TEXT_COLOR);
        _oCpuText.x = oFlagPlayer.x - 15;
        _oCpuText.y = oNicknameText.y + 42;
        _oCpuText.textAlign = "right";
        _oCpuText.textBaseline = "alphabetic";
        _oContainerText.addChild(_oCpuText);

        _oContainerText.regX = -_oContainerText.getBounds().width/2;  
    };
    
    this.reset = function(iOpponent){
        _oCpuText.text = TEXT_TEAM[iOpponent];
        _oFlagOpponent.image = s_oSpriteLibrary.getSprite("flag_"+TEAM_LABEL[iOpponent])
        _oScoreText.text = "0\n0";
        
        _oContainerText.regX = -_oContainerText.getBounds().width/2;  
    };
    
    this.refreshButtonPos = function () {
        _oContainer.x = _pStartPos.x + s_iOffsetX;
        _oContainer.y = _pStartPos.y + s_iOffsetY;
    };
    
    this.setScore = function(iPlayerScore,iCpuScore){
        _oScoreText.text = iPlayerScore + "\n" + iCpuScore;
    };
    
    this.darken = function(){
        _oContainer.alpha = 0.7;
    };
    
    this.show = function(){
        _oContainer.visible = true;
    };
    
    this.hide = function(){
        _oContainer.visible = false;
    };
    
    this._init(iLevel,pContainerPos);

    return this;
}