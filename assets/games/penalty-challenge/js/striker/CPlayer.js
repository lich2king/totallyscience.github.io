function CPlayer(iX, iY, oParentContainer) {
    var _pStartPos;
    var _aPlayer = new Array();
    var _oParentContainer = oParentContainer;
    var _oContainer;
    var _iAnimPlayer = 0;
    var _fBuffer = 0;

    this._init = function (iX, iY) {
        _pStartPos = {x: iX, y: iY};
        _oContainer = new createjs.Container();
        _oContainer.x = _pStartPos.x;
        _oContainer.y = _pStartPos.y;
        _oParentContainer.addChild(_oContainer);

        for (var i = 0; i < NUM_SPRITE_PLAYER; i++) {
            _aPlayer.push(createBitmap(s_oSpriteLibrary.getSprite("player_" +TEAM_INFO[s_iTeamSelected].player + "_"+ i)));
            _aPlayer[i].visible = false;
            _oContainer.addChild(_aPlayer[i]);
        }

        var oSprite = s_oSpriteLibrary.getSprite("player_" +TEAM_INFO[s_iTeamSelected].player + "_0");
        _oContainer.cache(0, 0, oSprite.width, oSprite.height);

        _aPlayer[0].visible = true;
    };

    this.setPosition = function (iX, iY) {
        _oContainer.x = iX;
        _oContainer.y = iY;
    };

    this.getX = function () {
        return _oContainer.x;
    };

    this.getY = function () {
        return _oContainer.y;
    };

    this.getStartPos = function () {
        return _pStartPos;
    };

    this.setVisible = function (bVal) {
        _oContainer.visible = bVal;
    };

    this.animFade = function (fAlpha) {
        var oParent = this;
        createjs.Tween.get(_oContainer).to({alpha: fAlpha}, 250).call(function () {
            if (fAlpha === 0) {
                _oContainer.visible = false;
                oParent.hideCharacter(NUM_SPRITE_PLAYER - 1);
                oParent.viewCharacter(_iAnimPlayer);
            }
        });
    };

    this.viewCharacter = function (iFrame) {
        _aPlayer[iFrame].visible = true;
    };

    this.hideCharacter = function (iFrame) {
        _aPlayer[iFrame].visible = false;
    };

    this.getFrame = function () {
        return _iAnimPlayer;
    };

    this.animPlayer = function () {
        _fBuffer += s_iTimeElaps;
        if (_fBuffer > BUFFER_ANIM_PLAYER) {
            this.hideCharacter(_iAnimPlayer);
            if (_iAnimPlayer + 1 < NUM_SPRITE_PLAYER) {
                this.viewCharacter(_iAnimPlayer + 1);
                _iAnimPlayer++;
            } else {
                this.viewCharacter(_iAnimPlayer);
                _iAnimPlayer = 0;
                _fBuffer = 0;
                return false;
            }
            _oContainer.updateCache();
            _fBuffer = 0;
        }
        return true;
    };

    this._init(iX, iY);

    return this;
}