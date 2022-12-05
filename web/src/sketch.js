
let canStartDraw = false;

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

  if (canStartDraw && mouseIsPressed) {
    erase();
    ellipse(mouseX, mouseY, 80, 80);
  }

}


document.addEventListener("click", (event)=>{

  if(canStartDraw) {
    return;
  }
  let imgEl = document.getElementById("card");
  let width = window.innerWidth;
  let halfWidth = width / 2;
  if(event.clientX < halfWidth) {
    imgEl.src = "./img/card.jpg";
  } else {
    imgEl.src = "./img/dog.jpg";
  }
  canStartDraw = true;
})



