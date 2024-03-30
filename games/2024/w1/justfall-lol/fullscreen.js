function initializeFullscreenEvents(){["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","msfullscreenchange"].forEach(eventType=>document.addEventListener(eventType,onFullscreenChange,false));}
var elem=document.documentElement;function openFullscreen(){if(elem.requestFullscreen){elem.requestFullscreen();}else if(elem.mozRequestFullScreen){elem.mozRequestFullScreen();}else if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();}else if(elem.msRequestFullscreen){elem.msRequestFullscreen();}}
function closeFullscreen(){if(document.exitFullscreen){document.exitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}}
function updateFullscreen(){var isInFullScreen=(document.fullscreenElement&&document.fullscreenElement!==null)||(document.webkitFullscreenElement&&document.webkitFullscreenElement!==null)||(document.mozFullScreenElement&&document.mozFullScreenElement!==null)||(document.msFullscreenElement&&document.msFullscreenElement!==null);if(!isInFullScreen)
openFullscreen();else
closeFullscreen();}
function onFullscreenChange(){if(!gameInstance)
return;if(document.fullscreenElement){gameInstance.SendMessage('JsManager','ApplicationFullscreenChanged',1);}
else{gameInstance.SendMessage('JsManager','ApplicationFullscreenChanged',0);}}