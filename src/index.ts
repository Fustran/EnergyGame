import { GameApp } from './game/gameapp';
import { Listeners } from './listeners';
import PIXI = require('pixi.js');

window.onload = () => {
    let game = new GameApp();
    Listeners.initStartingListeners(game);
};
