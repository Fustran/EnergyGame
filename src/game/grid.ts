import { PSprite } from './sprite';
import { extras, event, Texture } from 'pixi.js';

export class Grid {
    private tilePosition: any;
    public texture: Texture;
    public sprite: extras.TilingSprite;
    private dragging: boolean;
    private evtData: event;

    constructor(url: string, width: number, height: number) {
        this.texture = Texture.fromImage(url);
        this.sprite = new extras.TilingSprite(this.texture, width, height);
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
    }
    
    dragStart(event) {
        this.dragging = true;
        this.evtData = event.data;
    }

    dragEnd() {
        this.dragging = false;
        this.evtData = null;
    }

    dragMove() {
        if (this.dragging) {
            let newPos = this.evtData.getLocalPosition(this);
            this.tilePosition.x = newPos.x;
            this.tilePosition.y = newPos.y;
        }
    }
}