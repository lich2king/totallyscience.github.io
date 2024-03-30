function CResultPanel(iLevel,oParentContainer){
    var _oListener;
    
    var _oFade;
    var _oResultText;
    var _oScoreBoard;
    var _oContainer;
    var _oParentContainer = oParentContainer;
    
    this._init = function(iLevel){
        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        _oContainer.x = CANVAS_WIDTH_HALF;
        _oContainer.y = CANVAS_HEIGHT_HALF;
        _oContainer.regX = CANVAS_WIDTH_HALF;
        _oContainer.regY = CANVAS_HEIGHT_HALF;
        _oParentContainer.addChild(_oContainer);
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.01;
        _oListener = _oFade.on("click", function(){});
        _oContainer.addChild(_oFade);
        
        var oSpriteBg = s_oSpriteLibrary.getSprite("msg_box_small");
        var oMsgBox = createBitmap(oSpriteBg);
        oMsgBox.x = CANVAS_WIDTH_HALF+6;
        oMsgBox.y = CANVAS_HEIGHT_HALF;
        oMsgBox.regX = oSpriteBg.width/2;
        oMsgBox.regY = oSpriteBg.height/2;
        _oContainer.addChild(oMsgBox);
        
        _oResultText = new createjs.Text("GOAL!", "85px " + PRIMARY_FONT, "#fff");
        _oResultText.x = CANVAS_WIDTH_HALF;
        _oResultText.y = CANVAS_HEIGHT_HALF - 50;
        _oResultText.textAlign = "center";
        _oResultText.textBaseline = "alphabetic";
        _oContainer.addChild(_oResultText);
        
        _oScoreBoard = new CScoreBoard(iLevel,{x: CANVAS_WIDTH_HALF- 140, y: CANVAS_HEIGHT_HALF},_oContainer);
    };
    
    this.show = function(szResult,iPlayerGoals,iCpuGoals){
        _oResultText.text = szResult;
        _oScoreBoard.setScore(iPlayerGoals,iCpuGoals);
        
        _oContainer.alpha = 0;
        _oContainer.visible = true;
        createjs.Tween.get(_oContainer).to({alpha: 1}, 500, createjs.Ease.quartOut);
        
        var oParent = this;
        setTimeout(function () {
            oParent.hide();
        }, 2500);
    };
    
    this.hide = function(){
        createjs.Tween.get(_oContainer).to({alpha: 0}, 500, createjs.Ease.quartOut).call(function(){_oContainer.visible = false;s_oGame.changeScenario();});
    };
    
    this.reset = function(iOpponent){
        _oScoreBoard.reset(iOpponent);
    };
    
    this._init(iLevel);
}