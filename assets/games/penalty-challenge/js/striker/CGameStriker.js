function CGameStriker(oParentContainer,iCurLevel) {

    var _oBg;
    var _oScene;
    var _oBall;
    var _oStartBall;
    var _oGoalKeeper = null;
    var _oContainerGame;
    var _oClickPoint;
    var _oReleasePoint;
    var _oHitArea;
    var _oPlayer;
    var _oFieldCollision = null;
    var _oHandSwipeAnim;
    var _oGoal;
    var _bGoal = false;
    var _bLaunched = false;
    var _bBallOut = false;
    var _bFieldCollide = false;
    var _bAnimPlayer = false;
    var _bAnimGoalKeeper = false;
    var _bSaved = false;
    var _bMakeGoal = false;
    var _bPoleCollide = false;
    var _iLevel = iCurLevel;
    var _iArea;

    var _iTimePressDown = 0;
    var _fTimeReset;
    var _fTimePoleReset;
    var _fTimeSwipe;
    var _fMultiplier;
    var _aObjects;
    var _vHitDir;

    var _iGameState = STATE_INIT;
    var _oFade;
    var _oCamera = null;
    var _oParentContainer = oParentContainer;
    
    this._init = function () {
        this.pause(true);


        _fMultiplier = 1;

        _aObjects = new Array();

        _oContainerGame = new createjs.Container();
        _oParentContainer.addChild(_oContainerGame);

        _oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_game_striker"));
        _oBg.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        _oContainerGame.addChild(_oBg);

        _oScene = new CScenarioStriker(_iLevel);

        if (SHOW_3D_RENDER) {
            _oCamera = camera;
        } else {
            _oCamera = createOrthoGraphicCamera();
        }

        var oSprite = s_oSpriteLibrary.getSprite("goal_0");

        _oGoal = new CGoalStriker(251, 28, oSprite, _oContainerGame);

        _oGoalKeeper = new CGoalKeeper(CANVAS_WIDTH_HALF - 100, CANVAS_HEIGHT_HALF - 225, TEAM_INFO[s_aMatches[_iLevel-1]].goalkeeper,_oContainerGame);
        _aObjects.push(_oGoalKeeper);

        var oSpriteBall = s_oSpriteLibrary.getSprite("ball");
        _oBall = new CBallStriker(0, 0, oSpriteBall, _oScene.ballBody(), _oContainerGame);
        _aObjects.push(_oBall);

        this.ballPosition();

        _oBall.setVisible(false);

        _fTimeSwipe = MS_TIME_SWIPE_START;

        _oStartBall = new CStartBall(CANVAS_WIDTH_HALF + 55, CANVAS_HEIGHT_HALF + 168, _oContainerGame);

        _oPlayer = new CPlayer(CANVAS_WIDTH_HALF - 150, CANVAS_HEIGHT_HALF - 320, _oContainerGame);
        _oPlayer.setVisible(false);

        var szImage = "cursor";
        if (s_bMobile) {
            szImage = "hand_touch";
        }

        _oHandSwipeAnim = new CHandSwipeAnim(START_HAND_SWIPE_POS, END_HAND_SWIPE_POS, s_oSpriteLibrary.getSprite(szImage), _oParentContainer);
        _oHandSwipeAnim.animAllSwipe();
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 1;
        _oParentContainer.addChild(_oFade);
        
        resizeCanvas3D();

        //setVolume("soundtrack", 0.2);

        _vHitDir = new CANNON.Vec3(0, 0, 0);

        this.onExitHelp();
        
        createjs.Tween.get(_oFade).to({alpha: 0}, 300, createjs.cubicOut);
        
        s_oInterface.showHelpText(TEXT_HELP);
    };

    this.createControl = function () {
        if (!SHOW_3D_RENDER) {
            _oHitArea = new createjs.Shape();
            _oHitArea.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            _oContainerGame.addChild(_oHitArea);

            _oHitArea.on('mousedown', this.onMouseDown);
            _oHitArea.on('pressmove', this.onPressMove);
            _oHitArea.on('pressup', this.onPressUp);
        } else {
            window.addEventListener('mousedown', this.onMouseDown);
            window.addEventListener('mousemove', this.onPressMove);
            window.addEventListener('mouseup', this.onPressUp);
        }
    };

    this.sortDepth = function (oObj1, oObj2) {
        if (oObj1.getDepthPos() > oObj2.getDepthPos()) {
            if (_oContainerGame.getChildIndex(oObj1.getObject()) > _oContainerGame.getChildIndex(oObj2.getObject())) {
                _oContainerGame.swapChildren(oObj1.getObject(), oObj2.getObject());
            }
        } else if (oObj1.getDepthPos() < oObj2.getDepthPos()) {
            if (_oContainerGame.getChildIndex(oObj2.getObject()) > _oContainerGame.getChildIndex(oObj1.getObject())) {
                _oContainerGame.swapChildren(oObj2.getObject(), oObj1.getObject());
            }
        }
    };

    this.onExitHelp = function () {
        this.createControl();
        this.pause(false);
    };

    this.poleCollide = function () {
        _fTimePoleReset = TIME_POLE_COLLISION_RESET;
        _bPoleCollide = true;
        playSound("pole", 0.4, false);
    };

    this.fieldCollision = function () {
        if (_oFieldCollision === null && _bLaunched) {
            _oFieldCollision = playSound("drop_bounce_grass", 0.3, false);
            _oFieldCollision.on("end", function () {
                _oFieldCollision = null;
            });
        }
    };

    this.ballPosition = function () {
        var oBallBody = _oScene.ballBody();

        var oPos2DBall = this.convert3dPosTo2dScreen(oBallBody.position, _oCamera);

        var fScaleDistance = oPos2DBall.z * (BALL_SCALE_FACTOR - _oBall.getStartScale()) + _oBall.getStartScale();
        
        _oBall.setPosition(oPos2DBall.x, oPos2DBall.y);
        _oBall.scale(fScaleDistance);

        this.refreshShadowCast(_oBall, oBallBody, fScaleDistance);
    };

    this.onMouseDown = function (e) {
        if (_bLaunched) {
            return;
        }
        _fTimeSwipe = MS_TIME_SWIPE_START;
        _oHandSwipeAnim.removeTweens();
        _oHandSwipeAnim.setVisible(false);
        _oClickPoint = {x: s_oStage.mouseX, y: s_oStage.mouseY};
        _oReleasePoint = {x: s_oStage.mouseX, y: s_oStage.mouseY};
    };

    this.onPressMove = function () {
        _oReleasePoint = {x: s_oStage.mouseX, y: s_oStage.mouseY};
        _iTimePressDown += s_iTimeElaps;
    };

    this.onPressUp = function () {
        if (_bLaunched) {
            return;
        }else if( (_oClickPoint.y < _oReleasePoint.y) || (_oReleasePoint.x === 0 && _oReleasePoint.y === 0) ){
            return;
        }
        var fDistance = Math.ceil(distanceV2(_oClickPoint, _oReleasePoint)) * FORCE_RATE;

        if (fDistance > FORCE_MAX) {
            fDistance = FORCE_MAX;
        }

        if (_iTimePressDown > 1000) {
            _iTimePressDown = 1000;
        }

        var vHitDir2D = new CVector2(_oClickPoint.x - _oReleasePoint.x,
                _oClickPoint.y - _oReleasePoint.y);

        vHitDir2D.scalarProduct(fDistance);

        var fForceLength = vHitDir2D.length();

        if (fForceLength > HIT_BALL_MIN_FORCE) {
            if (fForceLength > HIT_BALL_MAX_FORCE) {
                vHitDir2D.normalize();
                vHitDir2D.scalarProduct(HIT_BALL_MAX_FORCE);
            }

            _bAnimPlayer = true;
            _oPlayer.setVisible(true);
            var fForceY = _iTimePressDown / 10;
            if (fForceY > MAX_FORCE_Y) {
                fForceY = MAX_FORCE_Y;
            } else if (fForceY < MIN_FORCE_Y) {
                fForceY = MIN_FORCE_Y;
            }

            _vHitDir.set(-vHitDir2D.getX() * FORCE_MULTIPLIER_AXIS.x, fForceY, vHitDir2D.getY() * FORCE_MULTIPLIER_AXIS.z);

            _bMakeGoal = s_oGameStriker.goalProbability();
        } 

        _oReleasePoint.x = 0;
        _oReleasePoint.y = 0;
    };

    this.refreshShadowCast = function (oObject, oBody, fScaleDistance) {
        var oFieldBody = _oScene.getFieldBody();

        if (oBody.position.z < oFieldBody.position.z) {
            oObject.scaleShadow(0);
            return;
        }

        var oPosShadow = {x: oBody.position.x, y: oBody.position.y, z: oFieldBody.position.z};

        var oPos2dShadow = this.convert3dPosTo2dScreen(oPosShadow, _oCamera);

        var fDistance = (oBody.position.z - BALL_RADIUS) * ((oFieldBody.position.z - SHADOWN_FACTOR) - oFieldBody.position.z) + oFieldBody.position.z;

        var fScaleHeight = fDistance * fScaleDistance;

        oObject.scaleShadow(fScaleHeight);

        if (fScaleHeight < 0) {
            return;
        }

        oObject.setAlphaByHeight(fDistance);

        oObject.setPositionShadow(oPos2dShadow.x, oPos2dShadow.y);
    };

    this.getLevel = function () {
        return _iLevel;
    };

    this.unload = function () {
        _oParentContainer.removeAllChildren();
        
        if (!SHOW_3D_RENDER) {
            _oHitArea.removeAllEventListeners();
        }
        _oScene.destroyWorld();
        _oScene = null;
    };

    this.resetValues = function () {
        _fMultiplier = 1;
    };

    this.wallSoundCollision = function () {
        
    };

    this.areaGoal = function () {
        if (!_bGoal && !_bSaved) {
            if (_bMakeGoal) {
                _bGoal = true;
                _fTimeReset = TIME_RESET_AFTER_GOAL;

                playSound("goal_striker", 1, false);
            } else {
                this.goalKeeperSave();
            }
        }
    };

    this.goalKeeperSave = function () {
        _bSaved = true;
        _fTimeReset = TIME_RESET_AFTER_SAVE;
        //s_oInterface.createAnimText(TEXT_SAVED, 80, false, TEXT_COLOR_1, TEXT_COLOR_STROKE);
        playSound("ball_saved", 1, false);
        this.rejectBall();
        _fMultiplier = 1;

    };

    this.rejectBall = function () {
        _oBall.getPhysics().velocity.negate(_oBall.getPhysics().velocity);
        switch (_iArea) {
            case 12:
                _oBall.getPhysics().velocity = _oBall.getPhysics().velocity.vadd(new CANNON.Vec3(_oBall.getPhysics().velocity.x * 0.4,
                        _oBall.getPhysics().velocity.y * 0.4, _oBall.getPhysics().velocity.z * 0.4));
                break;

            default:
                _oBall.getPhysics().velocity.vsub(new CANNON.Vec3(0, 50, 0));
        }
    };

    this.goalProbability = function () {
        _iArea = -1;
        for (var i = 0; i < CALCULATE_PROBABILITY.length; i++) {
            if (_vHitDir.z < CALCULATE_PROBABILITY[i].zMax && _vHitDir.z > CALCULATE_PROBABILITY[i].zMin) {
                if (_vHitDir.x < CALCULATE_PROBABILITY[i].xMax && _vHitDir.x > CALCULATE_PROBABILITY[i].xMin) {
                    _iArea = i;
                }
            }
        }

        if (_iArea === -1) {
            return false;
        }

        var aProb = new Array();

        for (var i = 0; i < MAX_PERCENT_PROBABILITY; i++) {
            aProb.push(false);
        }

        for (var i = 0; i < AREAS_INFO[_iArea].probability; i++) {
            aProb[i] = true;
        }

        var iRandResult = Math.floor(Math.random() * aProb.length);
        return aProb[iRandResult];
    };

    this.addImpulseToBall = function (oDir) {
        if (_bLaunched || _iGameState !== STATE_PLAY) {
            return;
        }
        var oBall = _oScene.ballBody();
        _oScene.addImpulse(oBall, oDir);
        _oScene.setElementAngularVelocity(oBall, {x: 0, y: 0, z: 0});
        _bLaunched = true;
        _oBall.setVisible(true);
        _oStartBall.setVisible(false);
        setTimeout(function(){s_oGameStriker.chooseDirectionGoalKeeper(oDir);},100);
        playSound("kick", 1, false);
    };

    this.chooseDirectionGoalKeeper = function (oDirBall) {
        if (!_bMakeGoal) {
            switch (_iArea) {
                case - 1 :
                    if (oDirBall.x < GOAL_KEEPER_TOLLERANCE_LEFT) {
                        _oGoalKeeper.runAnim(LEFT);
                    } else if (oDirBall.y > GOAL_KEEPER_TOLLERANCE_RIGHT) {
                        _oGoalKeeper.runAnim(RIGHT);
                    }
                    break;
                default:
                    _oGoalKeeper.runAnim(AREA_GOALS_ANIM[_iArea]);
            }
        } else {
            var iNoAnim = _oGoalKeeper.getAnimType();
            switch (_iArea) {
                case 2:
                case 7:
                case 12:
                    this.chooseWrongDirGK(ANIM_GOAL_KEEPER_FAIL_ALT);
                    break;

                default:
                    this.chooseWrongDirGK(ANIM_GOAL_KEEPER_FAIL, iNoAnim);
                    break;
            }
        }
        _bAnimGoalKeeper = true;
    };

    this.chooseWrongDirGK = function (aWrongAnim) {
        var iRandAnim = Math.floor(Math.random() * aWrongAnim.length);
        while (iRandAnim === AREA_GOALS_ANIM[_iArea]) {
            iRandAnim = Math.floor(Math.random() * aWrongAnim.length);
        }
        _oGoalKeeper.runAnim(aWrongAnim[iRandAnim]);
    };

    this.pause = function (bVal) {
        if (bVal) {
            _iGameState = STATE_PAUSE;
        } else {
            _iGameState = STATE_PLAY;
        }
        createjs.Ticker.paused = bVal;
    };

    this.onExit = function () {
        this.unload();

        setVolume("soundtrack", 1);
        s_oMain.gotoMenu();
    };

    this.restartLevel = function () {
        this.resetValues();
        this.resetScene();

        _iGameState = STATE_PLAY;
        this.startOpponentShot();
    };

    this.resetBallPosition = function () {
        var oBallBody = _oScene.ballBody();

        oBallBody.position.set(POSITION_BALL.x, POSITION_BALL.y, POSITION_BALL.z);
        _oScene.setElementVelocity(oBallBody, {x: 0, y: 0, z: 0});
        _oScene.setElementAngularVelocity(oBallBody, {x: 0, y: 0, z: 0});

        _oBall.fadeAnimation(1, 500, 0);
        _oBall.setVisible(false);

        _oStartBall.setVisible(true);
        _oStartBall.setAlpha(0);
        _oStartBall.fadeAnim(1, 500, 0);
    };

    this.ballFadeForReset = function () {
        if (!_bSaved || !_bGoal || !_bBallOut) {
            return;
        }
        if (!_bFieldCollide) {
            _oBall.fadeAnimation(0, 300, 10);
            _bFieldCollide = true;
        }
    };

    this._updateInit = function () {
        _oScene.update();
        this._updateBall2DPosition();
        _iGameState = STATE_PLAY;
    };

    this.convert2dScreenPosTo3d = function (oPos2d) {
        var iWidth = (s_iCanvasResizeWidth);
        var iHeight = (s_iCanvasResizeHeight);

        var mouse3D = new THREE.Vector3((oPos2d.x / iWidth) * 2 - 1, //x
                -(oPos2d.y / iHeight) * 2 + 1, //y
                -1);                                            //z
        mouse3D.unproject(_oCamera);
        mouse3D.sub(_oCamera.position);
        mouse3D.normalize();

        var fFactor = 0;//object.y

        mouse3D.multiply(new THREE.Vector3(fFactor, 1, fFactor));

        return mouse3D;
    };

    this.convert3dPosTo2dScreen = function (pos, oCamera) {
        var v3 = new THREE.Vector3(pos.x, pos.y, pos.z);
        var vector = v3.project(oCamera);

        var widthHalf = Math.floor(s_iCanvasResizeWidth) * 0.5;
        var heightHalf = Math.floor(s_iCanvasResizeHeight) * 0.5;


        vector.x = ((vector.x * widthHalf) + widthHalf) * s_fInverseScaling;
        vector.y = (-(vector.y * heightHalf) + heightHalf) * s_fInverseScaling;

        return vector;
    };

    this.timeReset = function () {

        if (_fTimeReset > 0) {
            _fTimeReset -= s_iTimeElaps;
        } else {
            this.endTurn();
        }
    };

    this.restartGame = function () {
        this.resetValues();
        this.resetScene();
        _iGameState = STATE_PLAY;
        _bLaunched = false;
    };

    this.endTurn = function () {
        s_oGame.endShotPlayer(_bGoal,_bSaved);
        this.resetScene();
    };


    this.goalAnimation = function (fForce) {
        if (fForce > FORCE_BALL_DISPLAY_SHOCK[0].min && fForce < FORCE_BALL_DISPLAY_SHOCK[0].max) {
            this.displayShock(INTENSITY_DISPLAY_SHOCK[0].time, INTENSITY_DISPLAY_SHOCK[0].x, INTENSITY_DISPLAY_SHOCK[0].y);
        } else if (fForce > FORCE_BALL_DISPLAY_SHOCK[1].min && fForce < FORCE_BALL_DISPLAY_SHOCK[1].max) {
            this.displayShock(INTENSITY_DISPLAY_SHOCK[1].time, INTENSITY_DISPLAY_SHOCK[1].x, INTENSITY_DISPLAY_SHOCK[1].y);
        } else if (fForce > FORCE_BALL_DISPLAY_SHOCK[2].min && fForce < FORCE_BALL_DISPLAY_SHOCK[2].max) {
            this.displayShock(INTENSITY_DISPLAY_SHOCK[2].time, INTENSITY_DISPLAY_SHOCK[2].x, INTENSITY_DISPLAY_SHOCK[2].y);
        } else if (fForce > FORCE_BALL_DISPLAY_SHOCK[3].min) {
            this.displayShock(INTENSITY_DISPLAY_SHOCK[3].time, INTENSITY_DISPLAY_SHOCK[3].x, INTENSITY_DISPLAY_SHOCK[3].y);
        }
    };

    this.displayShock = function (iTime, iXIntensity, iYIntensity) {
        var xShifting = iXIntensity;
        var yShifting = iYIntensity;

        createjs.Tween.get(_oContainerGame).to({x: Math.round(Math.random() * xShifting), y: Math.round(Math.random() * yShifting)}, iTime).call(function () {
            createjs.Tween.get(_oContainerGame).to({x: Math.round(Math.random() * xShifting * 0.8), y: -Math.round(Math.random() * yShifting * 0.8)}, iTime).call(function () {
                createjs.Tween.get(_oContainerGame).to({x: Math.round(Math.random() * xShifting * 0.6), y: Math.round(Math.random() * yShifting * 0.6)}, iTime).call(function () {
                    createjs.Tween.get(_oContainerGame).to({x: Math.round(Math.random() * xShifting * 0.4), y: -Math.round(Math.random() * yShifting * 0.4)}, iTime).call(function () {
                        createjs.Tween.get(_oContainerGame).to({x: Math.round(Math.random() * xShifting * 0.2), y: Math.round(Math.random() * yShifting * 0.2)}, iTime).call(function () {
                            createjs.Tween.get(_oContainerGame).to({y: 0, x: 0}, iTime).call(function () {
                            });
                        });
                    });
                });
            });
        });
    };

    this.resetScene = function () {
        _bGoal = false;
        _bBallOut = false;
        _bSaved = false;
        _bMakeGoal = false;
        _bPoleCollide = false;
        _bFieldCollide = false;
        //_oGoalKeeper.setAlpha(0);
        _oGoalKeeper.fadeAnimation(1);
        //_oGoalKeeper.runAnim(IDLE);
        this.resetBallPosition();
        this.sortDepth(_oBall, _oGoal);
    };

    this._onEnd = function () {
        this.onExit();
    };

    this.swapChildrenIndex = function () {
        for (var i = 0; i < _aObjects.length - 1; i++) {
            for (var j = i + 1; j < _aObjects.length; j++) {
                if (_aObjects[i].getObject().visible && _aObjects[j].getObject().visible)
                    this.sortDepth(_aObjects[i], _aObjects[j]);
            }
        }
    };

    this.ballOut = function () {
        if (!_bBallOut && !_bGoal && !_bSaved) {
            var oPos = _oBall.getPhysics().position;

            if (oPos.y > BALL_OUT_Y || oPos.x > BACK_WALL_GOAL_SIZE.width || oPos.x < -BACK_WALL_GOAL_SIZE.width) {
                _bBallOut = true;
                _fTimeReset = TIME_RESET_AFTER_BALL_OUT;

                playSound("ball_saved", 1, false);
                _fMultiplier = 1;
            }
        }
    };

    this.animPlayer = function () {
        if (!_bAnimPlayer) {
            _oPlayer.setVisible(false);
            return;
        }

        _bAnimPlayer = _oPlayer.animPlayer();

        if (_oPlayer.getFrame() === SHOOT_FRAME) {
            this.addImpulseToBall({x: _vHitDir.x,
                y: _vHitDir.y, z: _vHitDir.z});
            _iTimePressDown = 0;
            this.goalAnimation(_vHitDir.y);
            s_oInterface.hideHelpText();
        }
    };

    this.animGoalKeeper = function () {
        if (_bLaunched) {
            if (_bAnimGoalKeeper) {
                _bAnimGoalKeeper = _oGoalKeeper.update();
                if (!_bAnimGoalKeeper) {
                    _oGoalKeeper.viewFrame(_oGoalKeeper.getAnimArray(), _oGoalKeeper.getAnimArray().length - 1);
                    _oGoalKeeper.hideFrame(_oGoalKeeper.getAnimArray(), 0);
                    //_oGoalKeeper.fadeAnimation(0);
                }
            }
        } else {
            _oGoalKeeper.update();
        }
    };

    this.resetPoleCollision = function () {
        if (_fTimePoleReset > 0) {
            _fTimePoleReset -= s_iTimeElaps;
        } else {
            if (!_bGoal || !_bSaved) {
                //s_oInterface.createAnimText(TEXT_BALL_OUT, 80, false, TEXT_COLOR_1, TEXT_COLOR_STROKE);
                _fMultiplier = 1;

                playSound("ball_saved", 1, false);
                this.endTurn();
                _fTimePoleReset = TIME_POLE_COLLISION_RESET;
            }
        }
    };

    this.handSwipeAnim = function () {
        if (_oHandSwipeAnim.isAnimate() || _bLaunched) {
            return;
        }
        if (_fTimeSwipe > 0) {
            _fTimeSwipe -= s_iTimeElaps;
        } else {
            _oHandSwipeAnim.animAllSwipe();
            _oHandSwipeAnim.setVisible(true);
            _fTimeSwipe = MS_TIME_SWIPE_START;
        }
    };

    this.swapGoal = function () {
        if (_oBall.getPhysics().position.z > GOAL_SPRITE_SWAP_Z) {
            this.sortDepth(_oBall, _oGoal);
        }
    };

    this._updatePlay = function () {
        for (var i = 0; i < PHYSICS_ACCURACY; i++) {
            _oScene.update();
        }

        this.ballOut();

        if (_bGoal || _bBallOut || _bSaved) {
            this.timeReset();
        } else if (_bPoleCollide) {
            this.resetPoleCollision();
        }

        this.animGoalKeeper();

        this.animPlayer();

        this._updateBall2DPosition();

        this.handSwipeAnim();

        this.swapChildrenIndex();

        this.swapGoal();
    };

    this.update = function () {
        switch (_iGameState) {
            case STATE_INIT:
                this._updateInit();
                break;
            case STATE_PLAY:
                this._updatePlay();
                break;
            case STATE_FINISH:

                break;
            case STATE_PAUSE:

                break;
        }
    };

    this._updateBall2DPosition = function () {

        this.ballPosition();
        _oBall.rolls();


        _oCamera.updateProjectionMatrix();
        _oCamera.updateMatrixWorld();
    };

    s_oGameStriker = this;

    
    

    this._init();
}

var s_oGameStriker;