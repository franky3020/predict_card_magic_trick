
const magicControl = require("./MagicControl");


$("#magicArea").hide();


$(document.body).css("background-color", "black");


$("#startBtn").click(()=>{
    $("#magicArea").show();
    $("#startBtn").hide();

    // $(document.body).css("background-color", "white");

    setTimeout(()=>{
        setCharNumber();
    }, 1000);
})


function setCharNumber() {

    document.addEventListener("touchstart", (event)=>{
        if (typeof magicControl.cardNumber !== "undefined") {
            return;
        }
        magicControl.chooseNumber(event.touches[0].clientX);
        
    });

    document.addEventListener("touchend", (event)=>{
        setCharSuit(); // 第一次設定完點數後, 才啟用設定花色
    });

}


function setCharSuit() {
    document.addEventListener("touchstart", (event) => {

        if (typeof magicControl.cardSuit !== "undefined") {
            return;
        }
        
        magicControl.chooseSuits(event.touches[0].clientX, event.touches[0].clientY);
        console.log("cardSuit: ", magicControl.cardSuit);
        settingShowCard();
    })
}


function settingShowCard() {

    if (magicControl.isSettingDone) {
        return;
    }

    
    if(magicControl.cardNumber === 11) {
        $("#card").attr("src", "./img/poker/SJ_compressed.jpg");
    } else {
        $("#card").attr("src", "./img/poker/SQ_compressed.jpg");
    }


    magicControl.canStartShow = true;
    magicControl.isSettingDone = true;
    
}