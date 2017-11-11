import { Sprite, Texture } from 'pixi.js';

export class PSprite {
    public texture: Texture;
    public sprite: Sprite;
    
    constructor(url: string) {
        this.texture = Texture.fromImage(url);
        this.sprite = new Sprite(this.texture);
    }
}