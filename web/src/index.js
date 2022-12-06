require("./InitSetting");
const magicControl = require("./MagicControl");

const s = (sketch) => {

    sketch.setup = () => {

        let width = magicControl.width;
        let height = magicControl.height;

        let magicCloth = sketch.createCanvas(width, height);
        magicCloth.parent('magicCloth');

        sketch.background(0);

    };

    sketch.draw = () => {
        if (magicControl.canStartShow && sketch.mouseIsPressed) {
            sketch.erase();
            sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
        }
    };
};

new p5(s);


