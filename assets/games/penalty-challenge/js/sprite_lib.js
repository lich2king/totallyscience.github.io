/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function CSpriteLibrary(){

    var _oLibSprites;
    var _iNumSprites;
    var _iCntSprites;
    var _cbCompleted;
    var _cbTotalCompleted;
    var _cbOwner;
    
    this.init = function( cbCompleted,cbTotalCompleted, cbOwner ){
        _iNumSprites = 0;
        _iCntSprites = 0;
        _cbCompleted = cbCompleted;
        _cbTotalCompleted = cbTotalCompleted;
        _cbOwner     = cbOwner;
		
        _oLibSprites = {};
    };
    
    this.addSprite = function( szKey, szPath ){
        if ( _oLibSprites.hasOwnProperty(szKey) ){
            return;
        }
        
        _oLibSprites[szKey] = { szPath:szPath, oSprite: new Image() };
        _iNumSprites++;
    };
    
    this.getSprite = function( szKey ){
        if (!_oLibSprites.hasOwnProperty(szKey)){
            return null;
        }else{
            return _oLibSprites[szKey].oSprite;
        }
    };
    
    this._onSpritesLoaded = function(){
        _cbTotalCompleted.call(_cbOwner);
    };
    
    
    
    this._onSpriteLoaded = function(){
        _cbCompleted.call(_cbOwner);
        if (++_iCntSprites == _iNumSprites) {
            this._onSpritesLoaded();
        }
        
    };

    this.loadSprites = function(){
        for (var szKey in _oLibSprites) {
            _oLibSprites[szKey].oSprite["oSpriteLibrary"] = this;
            _oLibSprites[szKey].oSprite.onload = function(){
                this.oSpriteLibrary._onSpriteLoaded();
            };
            _oLibSprites[szKey].oSprite.onerror  = function(evt){
                var oSpriteToRestore = evt.currentTarget;
               
                setTimeout(function(){
                        _oLibSprites[oSpriteToRestore.szKey].oSprite.src = _oLibSprites[oSpriteToRestore.szKey].szPath;
                },500);
            };
            _oLibSprites[szKey].oSprite.src = _oLibSprites[szKey].szPath;
        } 
    };
    
    this.getNumSprites=function(){
        return _iNumSprites;
    };
    
    this.loadSpriteGroup=function(aGroup, cbOwner, cbCompleted, oParam){
        for(var i=0; i<aGroup.length; i++){
            var szElementKey = aGroup[i].key;
            var szElementPath = aGroup[i].path;
            _oLibSprites[szElementKey] = { szPath:szElementPath, oSprite: new Image() };
            _iNumSprites++;
        };  

        this._loadInStreamingSprite(aGroup, cbOwner, cbCompleted, oParam);
    };
    
    this._loadInStreamingSprite = function(aGroup, cbOwner, cbCompleted, oParam){
        var oElement = aGroup.splice(0,1)[0];
        var szKey = oElement.key;

        _oLibSprites[szKey].oSprite["oSpriteLibrary"] = this;
        _oLibSprites[szKey].oSprite.onload = function(){
            this.oSpriteLibrary._onElementOfSpriteGroupLoaded(aGroup, cbOwner, cbCompleted, oParam);
        };
        _oLibSprites[szKey].oSprite.onerror  = function(evt){
            setTimeout(function(){
                    _oLibSprites[szKey].oSprite.src = _oLibSprites[szKey].szPath;
            },500);
        };

        _oLibSprites[szKey].oSprite.src = _oLibSprites[szKey].szPath;
    };
    
    this._onElementOfSpriteGroupLoaded = function(aGroup, cbOwner, cbCompleted, oParam){
        if(aGroup.length === 0){
            if(cbCompleted){
                cbCompleted.call(cbOwner, oParam);
            }
        } else {
            s_oSpriteLibrary._loadInStreamingSprite(aGroup, cbOwner, cbCompleted, oParam);

            /////SIMULATE SLOW LOADING
            /*
            setTimeout(function(){
                s_oSpriteLibrary._loadInStreamingSprite(aGroup, cbOwner, cbCompleted, oParam);
            },30);
            */
        }
    };
}

