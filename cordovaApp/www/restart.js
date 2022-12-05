

let isMouseDownTime = undefined;

document.onmousedown = function () {
    console.log("onmousedown");
    if (typeof isMouseDownTime === "undefined") {
        isMouseDownTime = Date.now();
    }

    setTimeout(()=>{

        if(typeof isMouseDownTime !== "undefined") {
            isMouseDownTime = undefined;
        }

    }, 5000);
    
}


document.onmouseup = function() { 
    console.log("onmouseup");
    isMouseDownTime = undefined;
}
