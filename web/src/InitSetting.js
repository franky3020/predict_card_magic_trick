
const magicControl = require("./MagicControl");


$("#magicArea").hide();


$(document.body).css("background-color", "black");


$("#startBtn").click(()=>{
    $("#magicArea").show();
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

        magicControl.chooseNumber(event.clientX);

        if (event.clientX < halfWidth) {
            imgEl.src = "./img/card.jpg";
        } else {
            imgEl.src = "./img/dog.jpg";
        }
        magicControl.canStartShow = true;
        magicControl.isSettingDone = true;
        console.log("magicControl.cardNumber: ", magicControl.cardNumber);
    })
}




