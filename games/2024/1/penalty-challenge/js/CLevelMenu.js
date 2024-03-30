var NUM_ROWS_PAGE_LEVEL = 2;
var NUM_COLS_PAGE_LEVEL = 5;

function CLevelMenu() {
    var _iCurPage;
    var _iHeightToggle;
    var _iCurResources;
    var _iTotResources;
    var _iLevelSelected;
    var _aLevelButs;
    var _aPointsX;
    var _aResults;
    var _aContainerPage;

    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosRight;
    var _pStartPosLeft;
    var _pStartPosFullscreen;
    var _oListenerFade = null;
    
    var _oPreloaderFade;
    var _oButExit;
    var _oAudioToggle;
    var _oArrowRight = null;
    var _oArrowLeft = null;
    var _oContainer;
    var _oFade;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    this._init = function () {
        var aStoredMatches = s_oMain.getMatches();
        if(aStoredMatches === null){
            this._extractMatches();
        }else{
            s_aMatches = new Array();
            _aResults = new Array();
            
            for(var i=0;i<aStoredMatches.length;i++){
                s_aMatches[i] = aStoredMatches[i].opponent;
                
                var szResult = aStoredMatches[i].result;
                if(szResult === ""){
                    _aResults.push(["",""]);
                }else{
                    var aResultSplit = szResult.split("-");
                    _aResults.push(aResultSplit);
                }
            }
        }
        
        
        _iCurPage = 0;

        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_levelselect'));
        _oContainer.addChild(oBg);


        var oSpriteMsgBox = s_oSpriteLibrary.getSprite('msg_box');

        var oMsgBox = createBitmap(oSpriteMsgBox);
        oMsgBox.x = CANVAS_WIDTH_HALF;
        oMsgBox.y = CANVAS_HEIGHT_HALF+30;
        oMsgBox.regX = oSpriteMsgBox.width * 0.5;
        oMsgBox.regY = oSpriteMsgBox.height * 0.5;
        _oContainer.addChild(oMsgBox);

        var oTextTitle = new createjs.Text(TEXT_MATCHES, "70px " + PRIMARY_FONT, TEXT_COLOR);
        oTextTitle.x = CANVAS_WIDTH_HALF;
        oTextTitle.y = 80;
        oTextTitle.textAlign = "center";
        oTextTitle.textBaseline = "alphabetic";
        oTextTitle.shadow = new createjs.Shadow("#000000", 2, 2, 4);
        _oContainer.addChild(oTextTitle);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.height / 2) - 10, y: (oSprite.height / 2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        _iHeightToggle = oSprite.height;

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _pStartPosAudio = {x: _oButExit.getX() - oSprite.width - 10, y: (oSprite.height / 2) + 10};
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, s_oSpriteLibrary.getSprite('audio_icon'), s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x:oSprite.width/4 + 10,y:_pStartPosExit.y};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        this._checkBoundLimits();

        //FIND X COORDINATES FOR LEVEL BUTS
        _aPointsX = new Array();
        var iWidth = CANVAS_WIDTH + EDGEBOARD_X;
        var iOffsetX = Math.floor(iWidth / NUM_COLS_PAGE_LEVEL) / 2;
        var iXPos = -EDGEBOARD_X * 0.7;
        for (var i = 0; i < NUM_COLS_PAGE_LEVEL; i++) {
            _aPointsX.push(iXPos);
            iXPos += iOffsetX;
        }

        _aContainerPage = new Array();
        this._createNewLevelPage(0, NUM_MATCHES);

        if (_aContainerPage.length > 1) {
            //MULTIPLE PAGES
            for (var k = 1; k < _aContainerPage.length; k++) {
                _aContainerPage[k].visible = false;
            }

            _pStartPosRight = {x: CANVAS_WIDTH - 180, y: CANVAS_HEIGHT_HALF};
            _oArrowRight = new CGfxButton(_pStartPosRight.x, _pStartPosRight.y, s_oSpriteLibrary.getSprite('arrow_right'), s_oStage);
            _oArrowRight.addEventListener(ON_MOUSE_UP, this._onRight, this);

            _pStartPosLeft = {x: 180, y: CANVAS_HEIGHT_HALF};
            _oArrowLeft = new CGfxButton(_pStartPosLeft.x, _pStartPosLeft.y, s_oSpriteLibrary.getSprite('arrow_left'), s_oStage);
            _oArrowLeft.addEventListener(ON_MOUSE_UP, this._onLeft, this);
        }
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({alpha: 0}, 1000).call(function () {
            s_oStage.removeChild(_oFade);
            _oFade = null;
        });


        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.unload = function () {
        for (var i = 0; i < _aLevelButs.length; i++) {
            _aLevelButs[i].unload();
        }

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.unload();
        }
        _oButExit.unload();
        _oButExit = null;

        if (_oArrowLeft !== null) {
            _oArrowLeft.unload();
            _oArrowRight.unload();
        }
        
        if(_oListenerFade !== null){
            _oPreloaderFade.off("click",_oListenerFade);
        }

        s_oLevelMenu = null;
        s_oStage.removeAllChildren();
    };

    this.refreshButtonPos = function () {
        _oButExit.setPosition(_pStartPosExit.x - s_iOffsetX, _pStartPosExit.y + s_iOffsetY);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX,_pStartPosFullscreen.y + s_iOffsetY);
        }

    };
    
    this._extractMatches = function(){
        s_aMatches = new Array();
        _aResults = new Array();
        
        var iCont = 4;
        while(iCont > 0){
            var iRand = Math.floor(Math.random()*EASY_TEAM.length);
            if(EASY_TEAM[iRand] !== s_iTeamSelected){
                s_aMatches.push(EASY_TEAM[iRand]);
                s_oMain.saveMatch(s_aMatches.length,EASY_TEAM[iRand],"",0,0);
                
                iCont--;
                EASY_TEAM.splice(iRand,1);
                
                _aResults.push(["",""]);
            }
        }
        
        var iCont = 3;
        while(iCont > 0){
            var iRand = Math.floor(Math.random()*MEDIUM_TEAM.length);
            if(MEDIUM_TEAM[iRand] !== s_iTeamSelected){
                s_aMatches.push(MEDIUM_TEAM[iRand]);
                s_oMain.saveMatch(s_aMatches.length,MEDIUM_TEAM[iRand],"",0,0);
                
                iCont--;
                MEDIUM_TEAM.splice(iRand,1);
                
                _aResults.push(["",""]);
            }
        }
        
        var iCont = 3;
        while(iCont > 0){
            var iRand = Math.floor(Math.random()*HARD_TEAM.length);
            if(HARD_TEAM[iRand] !== s_iTeamSelected){
                s_aMatches.push(HARD_TEAM[iRand]);
                 s_oMain.saveMatch(s_aMatches.length,HARD_TEAM[iRand],"",0,0);
                 
                iCont--;
                HARD_TEAM.splice(iRand,1);
                
               _aResults.push(["",""]);
            }
        }
    };

    this._checkBoundLimits = function () {
        var oSprite = s_oSpriteLibrary.getSprite('but_level');
        var iY = 0;

        var iHeightBound = CANVAS_HEIGHT - (EDGEBOARD_Y * 2) - (_iHeightToggle * 2);
        var iNumRows = 0;

        while (iY < iHeightBound) {
            iY += oSprite.height + 20;
            iNumRows++;
        }

        if (NUM_ROWS_PAGE_LEVEL > iNumRows) {
            NUM_ROWS_PAGE_LEVEL = iNumRows;
        }


        var iNumCols = 0;
        var iX = 0;
        var iWidthBounds = CANVAS_WIDTH - (EDGEBOARD_X * 2);
        var oSprite = s_oSpriteLibrary.getSprite('but_level');

        while (iX < iWidthBounds) {
            iX += (oSprite.width / 2) + 5;
            iNumCols++;
        }
        if (NUM_COLS_PAGE_LEVEL > iNumCols) {
            NUM_COLS_PAGE_LEVEL = iNumCols;
        }
    };

    this._createNewLevelPage = function (iStartLevel, iEndLevel) {
        var oContainerLevelBut = new createjs.Container();
        _oContainer.addChild(oContainerLevelBut);
        _aContainerPage.push(oContainerLevelBut);

        _aLevelButs = new Array();
        var iCont = 0;
        var iY = 50;
        var iNumRow = 1;
        var bNewPage = false;
        var oSprite = s_oSpriteLibrary.getSprite('but_level');
        for (var i = iStartLevel; i < iEndLevel; i++) {
            var oBut = new CLevelBut(_aPointsX[iCont] + oSprite.width / 2, iY + oSprite.height / 2, s_aMatches[i],_aResults[i], i+1, oSprite, (i + 1) > s_iLastLevel ? false : true, oContainerLevelBut);
            oBut.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, i+1);
            _aLevelButs.push(oBut);

            iCont++;
            if (iCont === _aPointsX.length) {
                iCont = 0;
                iY += oSprite.height + 50;
                iNumRow++;
                if (iNumRow > NUM_ROWS_PAGE_LEVEL && i < iEndLevel - 1) {
                    bNewPage = true;
                    break;
                }
            }
        }

        oContainerLevelBut.x = CANVAS_WIDTH / 2 + oSprite.width/2;
        oContainerLevelBut.y = CANVAS_HEIGHT/2;
        oContainerLevelBut.regX = oContainerLevelBut.getBounds().width / 2;
        oContainerLevelBut.regY = oContainerLevelBut.getBounds().height / 2;

        if (bNewPage) {
            //ADD A PAGE
            this._createNewLevelPage(i + 1, iEndLevel);
        }

    };


    this._onRight = function () {
        _aContainerPage[_iCurPage].visible = false;

        _iCurPage++;
        if (_iCurPage >= _aContainerPage.length) {
            _iCurPage = 0;
        }

        _aContainerPage[_iCurPage].visible = true;
    };

    this._onLeft = function () {
        _aContainerPage[_iCurPage].visible = false;

        _iCurPage--;
        if (_iCurPage < 0) {
            _iCurPage = _aContainerPage.length - 1;
        }

        _aContainerPage[_iCurPage].visible = true;
    };

    this._onButLevelRelease = function (iLevel) {
        _iLevelSelected = iLevel;
        
        if(s_oSpriteLibrary.getSprite("player_"+TEAM_INFO[s_iTeamSelected].player+"_0") === null){
            //LOAD PLAYER KICK SPRITE
            _oPreloaderFade = new createjs.Shape();
            _oListenerFade = _oPreloaderFade.on("click",function(){});
            _oPreloaderFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            _oPreloaderFade.alpha = 0.5;
            _oContainer.addChild(_oPreloaderFade);
            
            s_oSpriteLibrary.init( function(){},this._onAllImagesLoaded, this );
        
            //LOAD PLAYER SPRITES
            for(var i=0;i<31;i++){
                s_oSpriteLibrary.addSprite("player_"+TEAM_INFO[s_iTeamSelected].player+"_"+i, "./sprites/striker/player/player_"+TEAM_INFO[s_iTeamSelected].player+"_"+i+".png");
            }
            
            _iCurResources = 0;
       
            _iTotResources = s_oSpriteLibrary.getNumSprites() ;
            s_oSpriteLibrary.loadSprites();
        }else{
            s_oLevelMenu.unload();
            s_oMain.gotoGame(iLevel);
        }
        
        
    };
    
    this._onAllImagesLoaded = function(){
        s_oLevelMenu.unload();
        s_oMain.gotoGame(_iLevelSelected);
    }

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onExit = function () {
        this.unload();
        s_oMain.gotoMenu();
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
    
    s_oLevelMenu = this;
    this._init();
}

var s_oLevelMenu = null;