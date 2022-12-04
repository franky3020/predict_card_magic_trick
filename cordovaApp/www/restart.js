

let isMouseDownTime = undefined;

document.onmousedown = function () {
    console.log("onmousedown");
    if (typeof isMouseDownTime === "undefined") {
        isMouseDownTime = Date.now();
    }

    setTimeout(()=>{

        if(typeof isMouseDownTime !== "undefined") {
            console.log("模擬按很久的情況");
        }

    }, 5000);
    
}


document.onmouseup = function() { 
    console.log("onmouseup");
    isMouseDownTime = undefined;
}
