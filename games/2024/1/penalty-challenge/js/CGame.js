function CGame(oData,iLevel){
    var _bExtraPenalty;
    
    var _iPlayerGoals;
    var _iCpuGoals;
    var _iNumKicks;
    var _iCurLevel;
    var _iLevelScore;
    var _iTotScore;
    var _iMultiplier;
    var _aHistoryPlayer;
    var _aHistoryOpponent;
    var _aResults;
    
    var _oInterface;
    var _oCurScenario = null;
    var _oContainerGame;
    var _oContainer;
    
    this._init = function(iLevel){
        $(s_oMain).trigger("start_session");
        $(s_oMain).trigger("start_level", iLevel);
        
        _iCurLevel = iLevel;

        this.reset();
        
        _aResults = new Array();

        if(s_bMobile){
            for (var i = 0; i < BALL_FORCE_Y.length; i++) {
                BALL_FORCE_Y[i] *= BALL_VELOCITY_MULTIPLIER;
                BALL_FORCE_Z[i].min /= (BALL_VELOCITY_MULTIPLIER + 0.1);
                BALL_FORCE_Z[i].max *= (BALL_VELOCITY_MULTIPLIER + 0.1);
                BALL_FORCE_X[i] *= BALL_VELOCITY_MULTIPLIER;
            }
        }
        

        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);
        
        var oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oContainer.addChild(oFade);
        
        _oContainerGame = new createjs.Container();
        _oContainer.addChild(_oContainerGame);

        _oInterface = new CInterface(_iCurLevel,_iTotScore,_oContainer);
        _oCurScenario = new CGameStriker(_oContainerGame,_iCurLevel);   
        
        _oInterface.showVsPanel(s_aMatches[iLevel-1],_iCurLevel);
    };
    
    this.reset = function(){
        _iTotScore =  s_oMain.getScoreTillLevel(_iCurLevel);
  
        _bExtraPenalty = false;
        s_iCurState = STRIKER_MODE;
        _iPlayerGoals = 0;
        _iLevelScore = 0;
        _iCpuGoals = 0;
        _iNumKicks = 1;
        _iMultiplier = 1;
        _aHistoryPlayer = new Array();
        _aHistoryOpponent = new Array();
        refreshSettings(s_iCurState);


        setVolume("soundtrack",0);
        playSound("crowd",1,true);
    };
    
    this.unload = function(){
        _oCurScenario.unload();
        _oInterface.unload();
        s_oStage.removeChild(_oContainer);
    };
    
    this.changeScenario = function(){
        _iNumKicks++;
        if(s_iCurState === GOALKEEPER_MODE && _iNumKicks > NUM_KICKS && _iCpuGoals !== _iPlayerGoals){
            //GAME OVER
            _aResults.push({player:_iPlayerGoals,cpu:_iCpuGoals});

            var bGameOver = false;
            if( _iPlayerGoals < _iCpuGoals){
                bGameOver = true;
            }
            
            var bLastMatch = false;
            if(_iCurLevel===NUM_MATCHES){
                bLastMatch = true;
            }else if(!bGameOver){
                s_oMain.saveLevel(_iCurLevel+1);
            }
            
            setVolume("soundtrack",1);
            stopSound("crowd");
            
            $(s_oMain).trigger("end_level", _iCurLevel);
            _oInterface.showFinalPanel( _iPlayerGoals + "-" + _iCpuGoals ,_iTotScore,_iLevelScore,bGameOver,bLastMatch);   
            
            s_oMain.saveMatch(_iCurLevel,s_aMatches[_iCurLevel-1],_iPlayerGoals + "-" + _iCpuGoals,_iLevelScore,_iTotScore);
            
            
        }else{
            _oCurScenario.unload();
            _oCurScenario = null;
            if(s_iCurState === STRIKER_MODE){
                s_iCurState = GOALKEEPER_MODE;
                refreshSettings(s_iCurState);
                
                if(_iNumKicks > NUM_KICKS){
                    _bExtraPenalty = true;
                    if(BALL_FORCE_Y[_iCurLevel] < HIT_BALL_MAX_FORCE){
                        BALL_FORCE_Y[_iCurLevel] += 2;
                    }
                }
                
                _oInterface.refreshKicks(_aHistoryOpponent);
                _oCurScenario = new CGameGoalkeeper(_iCurLevel,BALL_FORCE_Y[_iCurLevel-1],_oContainerGame);
            }else{
                s_iCurState = STRIKER_MODE;
                refreshSettings(s_iCurState);
                if(_iNumKicks > NUM_KICKS){
                    _bExtraPenalty = true;
                }
                
                _oInterface.refreshKicks(_aHistoryPlayer);
                _oCurScenario = new CGameStriker(_oContainerGame,_iCurLevel);
                
            }
        }
    };
    
    this.endShotPlayer = function(bGoal,bSaved){
        if(bGoal){
            _aHistoryPlayer.push(1);
            _iPlayerGoals++;
            
            if(!_bExtraPenalty){
                this.increaseScore(GOAL_SCORED*_iMultiplier);
                this._increaseMultiplier();
            }
        }else{
            _iMultiplier = 1;
            if(!_bExtraPenalty){
                this.increaseScore(GOAL_MISSED);
            }
            
            _aHistoryPlayer.push(0);
        }
        
        _oInterface.refreshKicks(_aHistoryPlayer);
        
        //SEND CORRECT RESULT TEXT
        var szResult = TEXT_MISSED;
        if(bGoal){
            szResult = TEXT_GOAL;
        }else if(bSaved){
            szResult = TEXT_SAVED;
        }
        
        _oInterface.refreshScoreBoard(szResult,_iPlayerGoals,_iCpuGoals);
    };
    
    this.endShotCpu = function(bGoal,bSaved){
        if(bGoal){
            _aHistoryOpponent.push(1);
            _iCpuGoals++;
            _iMultiplier = 1;
            if(!_bExtraPenalty){
                this.increaseScore(GOAL_SUFFERED);
            }
        }else{
            _aHistoryOpponent.push(0);
            if(!_bExtraPenalty){
                this.increaseScore(GOAL_SAVED*_iMultiplier);
                this._increaseMultiplier();
            }
        }
        
        _oInterface.refreshKicks(_aHistoryOpponent);
        
        //SEND CORRECT RESULT TEXT
        var szResult = TEXT_MISSED;
        if(bGoal){
            szResult = TEXT_GOAL;
        }else if(bSaved){
            szResult = TEXT_SAVED;
        }
        
        _oInterface.refreshScoreBoard(szResult,_iPlayerGoals,_iCpuGoals);
    };
    
    this._increaseMultiplier = function(){
        if(_iMultiplier > 1){
            _oInterface.showMultiplierAnim(_iMultiplier);
        }
      
        _iMultiplier++;
    };
    
    this.increaseScore = function(iAmount){
        _iLevelScore += iAmount;

        _iTotScore += iAmount;
        if(_iTotScore < 0){
            _iTotScore = 0;
            _iLevelScore = 0;
        }

        _oInterface.refreshScore(_iTotScore);
    };
    
    this.nextRound = function(){
        _iCurLevel++;
        this.reset();
        
        
        _oInterface.reset(s_aMatches[_iCurLevel-1],_iCurLevel);
        
        _oCurScenario = new CGameStriker(_oContainerGame,_iCurLevel);
        
    };
    
    this.retryLevel = function(){
        _iCurLevel--;
        this.nextRound();
        
        $(s_oMain).trigger("restart_level", _iCurLevel);
    };

    
    this.onExit = function () {
        this.unload();

        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        setVolume("soundtrack", 1);
        s_oMain.gotoMenu();
    };
    
    this.update = function(){
        if(_oCurScenario !== null){
            _oCurScenario.update();
        }
    };
    
    
   
    GOAL_SCORED = oData.score_goal;
    GOAL_MISSED = oData.score_goal_missed;
    GOAL_SAVED = oData.score_ball_saved;
    GOAL_SUFFERED = oData.score_goal_opponent;
    
    
    AREAS_INFO = oData.area_goal;
    
    s_oGame = this;
    this._init(iLevel);
}

var s_iCurState;
var s_oGame = null;