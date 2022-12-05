const InitSetting = require("./InitSetting");

let canStartDraw = false;

const s = (sketch) => {

    sketch.setup = () => {

        let width = InitSetting.width;
        let height = InitSetting.height;

        let myCanvas = sketch.createCanvas(width, height);
        myCanvas.parent('myContainer');

        sketch.background(0);

    };

    sketch.draw = () => {
        if (canStartDraw && sketch.mouseIsPressed) {
            sketch.erase();
            sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
        }
    };
};
let myp5 = new p5(s);

document.addEventListener("click", (event) => {

    if (canStartDraw) {
        return;
    }
    let imgEl = document.getElementById("card");
    let width = InitSetting.width;
    let halfWidth = width / 2;
    if (event.clientX < halfWidth) {
        imgEl.src = "./img/card.jpg";
    } else {
        imgEl.src = "./img/dog.jpg";
    }
    canStartDraw = true;
})

