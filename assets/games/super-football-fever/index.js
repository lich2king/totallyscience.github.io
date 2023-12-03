window.screenOrientation = "portrait",
    // loadLib("lib/laya.wxmini.js"),
    // loadLib("lib/weapp-adapter.js"),


// wx.getStorageSync = function () {

// }



loadLib("lib/laya.core.js"),

    loadLib("lib/Tween.js"),
    loadLib("lib/laya.webgl.js"),
    loadLib("lib/laya.ani.js"),
    loadLib("lib/laya.ui.js"),
    loadLib("lib/laya.d3.js"),
    loadLib("lib/GameSet.js"),
    // loadLib("opendata/index.js")
    window.DEVELOP = !0,
  
    window.wx = {
        showShareMenu:function(){},
        onShareAppMessage:function(){},
        removeStorageSync:function(){},
        setStorageSync:function(){},
        getStorageSync:function(){
            return ""
        },
        showModal :function(o){
            // console.error("showModal",o)
        },
        triggerGC:function(){
            
        }
    },
    wx.getSystemInfoSync = function () {
        return {
           
            model: "ssssss",
            pixelRatio: 1,
            windowWidth: innerWidth,
            windowHeight: innerHeight,
            language: "Chinese",
            version: "1.0.0",
            SDKVersion: "1.0.0",
            platform: "",
            system: ""
        }
    },
   
    // wx.getLaunchOptionsSync = function () {
    
    // }
  
loadLib("football.js");


// arequire("lib/weapp-adapter");

// arequire("lib/laya.wxmini");

// arequire("lib/Tween");



// arequire("lib/laya.core");

// arequire("lib/laya.webgl");

// arequire("lib/laya.ani");

// arequire("lib/laya.ui");

// arequire("lib/laya.d3");

// arequire("lib/GameSet");

// window.DEVELOP = false;

// arequire("./football");