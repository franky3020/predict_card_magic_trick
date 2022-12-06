
const magicControl = require("./MagicControl");


$("#card").hide();
$("#magicCloth").hide();


$(document.body).css("background-color", "black");


$("#startBtn").click(()=>{
    $("#card").show();
    $("#magicCloth").show();
    $("#startBtn").hide();

    $(document.body).css("background-color", "white");

    setTimeout(()=>{
        settingShowCard();
    }, 1000);
})

function settingShowCard() {
    
    document.addEventListener("click", (event) => {

        if (magicControl.isSettingDone) {
            return;
        }
        let imgEl = document.getElementById("card");
        let width = magicControl.width;
        let halfWidth = width / 2;
        if (event.clientX < halfWidth) {
            imgEl.src = "./img/card.jpg";
        } else {
            imgEl.src = "./img/dog.jpg";
        }
        magicControl.canStartShow = true;
        magicControl.isSettingDone = true;
    })
}




