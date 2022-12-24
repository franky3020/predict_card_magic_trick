

if (typeof screen.orientation.lock !== "undefined") {
    screen.orientation.lock('portrait-primary');
    console.log('after screen.orientation.lock ' + screen.orientation.type);
}

(async function () {
    while (1) {
        console.log('Orientation is:' + screen.orientation.type.toString());
        if (screen.orientation.type.toString() !== 'portrait-primary') {
            await sleep(500);
        } else {
            break;
        }
    }
    // 防止剛轉完 系統還未更新寬高的情況
    await sleep(500);


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


}());



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}









