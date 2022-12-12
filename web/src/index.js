require("./InitSetting");
const magicControl = require("./MagicControl");

let resetFlag = false;

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
        if(magicControl.doRestart) {
            sketch.background(0);
            magicControl.doRestart = false;
        }
    };
};

new p5(s);

