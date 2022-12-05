const init = require("./init");



let canStartDraw = false;

const s = (sketch) => {

    sketch.setup = () => {

        let width = window.innerWidth;
        let height = window.innerHeight;

        console.log("width: ", width);
        console.log("height: ", height);

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
    let width = window.innerWidth;
    let halfWidth = width / 2;
    if (event.clientX < halfWidth) {
        imgEl.src = "./img/card.jpg";
    } else {
        imgEl.src = "./img/dog.jpg";
    }
    canStartDraw = true;
})




console.log(init.width);
console.log(init.height);







