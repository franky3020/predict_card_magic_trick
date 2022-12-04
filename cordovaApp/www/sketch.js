function setup() {

    let width = window.innerWidth;
    let height = window.innerHeight;

    console.log("width: ", width);
    console.log("height: ", height);

    let myCanvas = createCanvas(width, height);
    myCanvas.parent('myContainer');

    background(0);
  }
  
  function draw() {
    
    if (mouseIsPressed) {
      erase();
      ellipse(mouseX, mouseY, 80, 80);
    }
    
  }