import { GameApp } from './game/gameapp';

export abstract class Listeners {
    
    static initStartingListeners(game: GameApp) {
        game.grid.sprite
            .on('pointerdown', game.grid.dragStart)
            .on('pointerup', game.grid.dragEnd)
            .on('pointerupoutside', game.grid.dragEnd)
            .on('pointermove', game.grid.dragMove);
    }
}