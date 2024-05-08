function CMenu() {
    var _pStartPosAudio;
    var _pStartPosPlay;
    var _pStartPosInfo;
    var _pStartPosFullscreen;
    var _pStartPosDelete;
    
    var _oBg;
    var _oButPlay;
    var _oButInfo;
    var _oButDeleteSavings;
    var _oAreYouSurePanel;
    var _oFade;
    var _oAudioToggle;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    this._init = function () {
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _pStartPosPlay = {x: CANVAS_WIDTH / 2 + 160, y: CANVAS_HEIGHT - 130};
        _oButPlay = new CGfxButton(_pStartPosPlay.x, _pStartPosPlay.y, oSprite);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        _oButPlay.pulseAnimation();

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height / 2) - 10, y: (oSprite.height / 2) + 10};
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }

        var oSpriteInfo = s_oSpriteLibrary.getSprite("but_info");
        _pStartPosInfo = {x: (oSpriteInfo.height / 2) + 10, y: (oSpriteInfo.height / 2) + 10};
        _oButInfo = new CGfxButton(_pStartPosInfo.x, _pStartPosInfo.y, oSpriteInfo, s_oStage);
        _oButInfo.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this);
        
        if (_fRequestFullScreen && screenfull.enabled){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x:_pStartPosInfo.x + oSprite.width/2 + 10,y:oSprite.height/2 + 10};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        var oSprite = s_oSpriteLibrary.getSprite("but_delete_savings");
        _pStartPosDelete = {x:oSprite.width/2 + 10,y:CANVAS_HEIGHT-oSprite.height/2 - 10};
        _oButDeleteSavings = new CGfxButton(_pStartPosDelete.x,_pStartPosDelete.y,oSprite,s_oStage);
        _oButDeleteSavings.addEventListener(ON_MOUSE_UP,this._onDeleteSavings,this);
        
        _oAreYouSurePanel = new CAreYouSurePanel(s_oStage);
        _oAreYouSurePanel.addEventListener(ON_BUT_YES_DOWN,this._onConfirmDelete,this);
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({alpha: 0}, 1000).call(function () {
            _oFade.visible = false;
        });
        
        if(!s_bStorageAvailable){
            new CMsgBox(TEXT_ERR_LS,s_oStage);
        }
        
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.refreshButtonPos = function (iNewX, iNewY) {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, iNewY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX,_pStartPosFullscreen.y + iNewY);
        }
        _oButInfo.setPosition(_pStartPosInfo.x + iNewX, _pStartPosInfo.y + iNewY);
        _oButDeleteSavings.setPosition(_pStartPosDelete.x + iNewX, _pStartPosDelete.y - iNewY);
    };

    this.unload = function () {
        _oButPlay.unload();
        _oButPlay = null;

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.unload();
        }
        
        _oButDeleteSavings.unload();
        _oAreYouSurePanel.unload();
        s_oStage.removeAllChildren();

        s_oMenu = null;
    };

    this._onButPlayRelease = function () {
        this.unload();
        
        if (isIOS() && s_oSoundTrack === null) {
            playSound("soundtrack",1,true);
        }
        
        if(s_oMain.getStoredTeamSelected() === null){
            s_oMain.gotoSelectTeam();
        }else{
            s_iTeamSelected = s_oMain.getStoredTeamSelected();
            s_iLastLevel = s_oMain.getLastLevel();
            
            s_oMain.gotoLevelPanel();
        }
        
    };

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onButInfoRelease = function () {
        new CCreditsPanel();
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
    
    this._onDeleteSavings = function(){
        _oAreYouSurePanel.show(TEXT_CONFIRM_DELETE);
    };
    
    this._onConfirmDelete = function(){
        s_iLastLevel = 1;
        clearAllItem();  
    };
    
    s_oMenu = this;

    this._init();
}

var s_oMenu = null;