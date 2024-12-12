export default class Display {
    private canvas: HTMLCanvasElement;
    private gl: WebGLRenderingContext | null;

    constructor(canvasElement: HTMLCanvasElement) {
        this.canvas = canvasElement;
        this.gl = this.canvas.getContext("webgl");

        if (this.gl == null) {
            throw new Error("Failed to initialize WebGL context");
        }
    }
}