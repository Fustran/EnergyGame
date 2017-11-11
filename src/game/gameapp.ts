import { Application } from 'pixi.js';
import { Grid } from './grid';

export class GameApp {
    public app: Application;
    public grid: Grid;
    
    constructor() {
        this.app = new Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
        document.body.appendChild(this.app.view);
        this.grid = new Grid('https://i.imgur.com/uLX8bVx.png', this.app.renderer.width, this.app.renderer.height);
        this.app.stage.addChild(this.grid.sprite);
    }
}
