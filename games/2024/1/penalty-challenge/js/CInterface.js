function CInterface(iLevel,_iTotScore,oParentContainer) {
    var _aKickIcons;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    var _pStartPosScore;
    var _pStartPosExit;
    var _pStartPosKicks;

    var _oScoreText;
    var _oTextMult;
    var _oTextMultStroke;
    var _oButExit;
    var _oButFullscreen;
    var _oAudioToggle;
    var _oScoreBoard;
    var _oResultPanel;
    var _oContainerKicks;
    var _oHelpText;
    var _oFinalPanel;
    var _oVsPanel;
    var _oAreYouSurePanel;
    var _oContainerMult;
    var _oParentContainer = oParentContainer;

    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    this._init = function (iLevel) {
        _pStartPosScore = {x:CANVAS_WIDTH - 20,y:CANVAS_HEIGHT - 20};
        _oScoreText = new createjs.Text(TEXT_SCORE + " "+_iTotScore, "42px " + PRIMARY_FONT, "#fff");
        _oScoreText.x = _pStartPosScore.x;
        _oScoreText.y = _pStartPosScore.y;
        _oScoreText.textAlign = "right";
        _oScoreText.textBaseline = "alphabetic";
        _oScoreText.shadow = new createjs.Shadow("#000000", 2, 2, 4);
        _oParentContainer.addChild(_oScoreText);
        
        _oContainerMult = new createjs.Container();
        _oContainerMult.x = CANVAS_WIDTH + 100;
        _oContainerMult.y = _oScoreText.y - 50;
        _oParentContainer.addChild(_oContainerMult);
        
        _oTextMultStroke = new createjs.Text("x2", "42px " + PRIMARY_FONT, "#000");
        _oTextMultStroke.textAlign = "right";
        _oTextMultStroke.outline = 2;
        _oTextMultStroke.textBaseline = "alphabetic";
        _oContainerMult.addChild(_oTextMultStroke);

        _oTextMult = new createjs.Text("x2", "42px " + PRIMARY_FONT, "#fff");
        _oTextMult.textAlign = "right";
        _oTextMult.textBaseline = "alphabetic";
        _oContainerMult.addChild(_oTextMult);

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.height / 2) - 10, y: (oSprite.height / 2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, _oParentContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: _pStartPosExit.x - oSprite.width/2 - 10, y:_pStartPosExit.y};
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive,_oParentContainer);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen");
            _pStartPosFullscreen = {x:  _pStartPosAudio.x - oSprite.width / 2 - 10, y: _pStartPosAudio.y};
        }else{
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen");
            _pStartPosFullscreen = {x: _pStartPosExit.x - oSprite.width/2 - 10, y:_pStartPosExit.y};
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.enabled) {
           
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, false, _oParentContainer);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        _oScoreBoard = new CScoreBoard(iLevel,{x: 10, y: 4},_oParentContainer);
        
        
        
        _aKickIcons = new Array();
        var iX = 0;
        var oSpriteKick = s_oSpriteLibrary.getSprite("ball_kick");
        
        _pStartPosKicks = {x:(oSpriteKick.width/3)/2 + 10,y:CANVAS_HEIGHT - oSpriteKick.height/2 - 10};
        _oContainerKicks = new createjs.Container();
        _oContainerKicks.x = _pStartPosKicks.x;
        _oContainerKicks.y = _pStartPosKicks.y;
        _oParentContainer.addChild(_oContainerKicks);
        
        
        var oData = {
            images: [oSpriteKick],
            // width, height & registration point of each sprite
            frames: {width: oSpriteKick.width / 3, height: oSpriteKick.height, regX: (oSpriteKick.width / 3) / 2, regY: oSpriteKick.height / 2},
            animations: {empty: 0, state_0: 1,state_1:2}
        };


        var oSpriteSheet = new createjs.SpriteSheet(oData);
        
        for(var i=0;i<5;i++){
            var oKick = new CKickIcon(iX,0,oSpriteSheet,_oContainerKicks);
            _aKickIcons.push(oKick);
            
            iX += oSpriteKick.width/3 + 5;
        }
        
        _oResultPanel = new CResultPanel(iLevel,_oParentContainer);
        
        _oHelpText = new CHelpText(_oParentContainer);
        
        _oVsPanel = new CVersusPanel(_oParentContainer);
        
        _oFinalPanel = new CFinalPanel(iLevel,_oParentContainer);
        
        _oAreYouSurePanel = new CAreYouSurePanel(s_oStage);
        _oAreYouSurePanel.addEventListener(ON_BUT_YES_DOWN,s_oGame.onExit,s_oGame);
      
        this.refreshButtonPos();
    };

    this.refreshButtonPos = function () {
         _oButExit.setPosition(_pStartPosExit.x - s_iOffsetX, _pStartPosExit.y + s_iOffsetY);
         
        _oScoreText.x = _pStartPosScore.x - s_iOffsetX;
        _oScoreText.y = _pStartPosScore.y - s_iOffsetY;
        _oContainerMult.y = _oScoreText.y - 50;
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }

        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }
        
        _oContainerKicks.x = _pStartPosKicks.x + s_iOffsetX;
        _oContainerKicks.y = _pStartPosKicks.y - s_iOffsetY;
        
        _oScoreBoard.refreshButtonPos();
    };

    this.unload = function () {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.unload();
            _oButFullscreen = null;
        }
        
        _oButExit.unload();
        _oButExit = null;
        
        _oFinalPanel.unload();
        _oAreYouSurePanel.unload();
        
        s_oInterface = null;
    };
    
    this.reset = function(iOpponent,iLevel){
        _oResultPanel.reset(iOpponent);
        _oScoreBoard.reset(iOpponent);
        
        for(var i=0;i<_aKickIcons.length;i++){
            _aKickIcons[i].changeState("empty");
        }
        
        this.showVsPanel(iOpponent,iLevel);
    };
    
    this.showMultiplierAnim = function(iMult){
        _oTextMult.text = _oTextMultStroke.text = "X"+iMult;
      
        createjs.Tween.get(_oContainerMult).to({x: _oScoreText.x}, 250, createjs.Ease.cubicOut).call(function () {
            createjs.Tween.get(_oContainerMult).wait(1000).to({x: CANVAS_WIDTH + 100}, 250, createjs.Ease.cubicIn).call(function () {
            });
        });
    };
    
    this.showVsPanel = function(iOpponent,iLevel){
        _oVsPanel.show(iOpponent,iLevel);
    };
    
    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.enabled){
		_oButFullscreen.setActive(s_bFullscreen);
	}
    };
    
    this._onFullscreenRelease = function(){
	if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };
    
    this.refreshScoreBoard = function(szResult,iPlayerGoals,iCpuGoals){
        _oScoreBoard.setScore(iPlayerGoals,iCpuGoals);
        _oResultPanel.show(szResult,iPlayerGoals,iCpuGoals);
    };
    
    this.refreshKicks = function(aKicks){
        for(var i=0;i<_aKickIcons.length;i++){
            if(i<aKicks.length){
                _aKickIcons[i].changeState("state_"+aKicks[i]);
            }else{
                _aKickIcons[i].changeState("empty");
            }
        }
    };
    
    this.refreshScore = function(iTotScore){
        _oScoreText.text = TEXT_SCORE + " " + iTotScore;
    };
    
    this.showHelpText = function(szText){
        _oHelpText.show(szText);
    };
    
    this.hideHelpText = function () {
        _oHelpText.hide();
    };
    
    this.showFinalPanel = function(szResult,iTotScore,iLevelScore,bGameOver,bLastLevel){
        _oFinalPanel.show(szResult,iTotScore,iLevelScore,bGameOver,bLastLevel);
    };

    this.isHelpTextVisible = function(){
        return _oHelpText.visible;
    };

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onExit = function () {
        _oAreYouSurePanel.show(TEXT_ARE_SURE);
        //s_oGame.pause(true);
        
    };
    
    s_oInterface = this;

    this._init(iLevel);
}

var s_oInterface = null;