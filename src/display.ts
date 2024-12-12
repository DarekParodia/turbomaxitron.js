import Scene from './scene';

export default class Display {
    private canvas: HTMLCanvasElement;
    private gl: WebGLRenderingContext | null;
    private currentScene: Scene | null = null; // no default scene so it's null

    constructor(canvasElement: HTMLCanvasElement) {
        this.canvas = canvasElement;
        this.gl = this.canvas.getContext("webgl");

        if (this.gl == null) {
            throw new Error("Failed to initialize WebGL context");
        }
    }

    public setScene(scene: Scene) {
        this.currentScene = scene;
    }
}