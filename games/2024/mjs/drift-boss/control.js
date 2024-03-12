function PAUSE() {
  ig.game.paused = true;
  ig.game.pauseGame();
  ig.soundHandler.muteSFX(true);
  ig.soundHandler.muteBGM(true);
  ig.soundHandler.sfxPlayer.soundList.engine.pause();
  ig.soundHandler.sfxPlayer.soundList.engineIn.pause();
  ig.soundHandler.sfxPlayer.soundList.engineLow.pause();
}

function RESUME() {
  ig.game.paused = false;
  ig.game.resumeGame();
  ig.soundHandler.unmuteSFX(true);
  ig.soundHandler.unmuteBGM(true);
}
