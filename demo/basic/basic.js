import turbomaxitron from '../../build/turbomaxitron'

var display;
document.addEventListener('DOMContentLoaded', (e) => {
    let canvas = document.querySelector("#demo");
    display = new turbomaxitron.Display(canvas);
})