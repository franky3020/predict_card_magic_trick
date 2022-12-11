
const magicControl = require("./MagicControl");


$("#magicArea").hide();


$(document.body).css("background-color", "black");


$("#startBtn").click(() => {
    $("#magicArea").show();
    $("#startBtn").hide();

    setTimeout(() => {
        setCharNumber();
    }, 100);
})


function setCharNumber() {

    document.addEventListener("touchstart", (event) => {
        if (typeof magicControl.cardNumber !== "undefined") {
            return;
        }
        magicControl.chooseNumber(event.touches[0].clientX);

    });

    document.addEventListener("touchend", (event) => {
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


        // spade
        // heart
        // diamond
        // club
function settingShowCard() {

    if (magicControl.isSettingDone) {
        return;
    }

    let cardWeight = magicControl.width * 0.9;

    $("#card").css("width", cardWeight + 'px');


    console.log("magicControl.cardSuit", magicControl.cardSuit);
    if(magicControl.cardNumber === 11) {

        if(magicControl.cardSuit === "spade") {
            $("#card").attr("src", "./img/poker/sj_compressed.jpg");
        } else if(magicControl.cardSuit === "heart") {
            $("#card").attr("src", "./img/poker/hj_compressed.jpg");
        } else if(magicControl.cardSuit === "diamond") {
            $("#card").attr("src", "./img/poker/dj_compressed.jpg");
        } else { // club
            $("#card").attr("src", "./img/poker/cj_compressed.jpg");
        }
    } else if (magicControl.cardNumber === 12) {


        if(magicControl.cardSuit === "spade") {
            $("#card").attr("src", "./img/poker/sq_compressed.jpg");
        } else if(magicControl.cardSuit === "heart") {
            $("#card").attr("src", "./img/poker/hq_compressed.jpg");
        } else if(magicControl.cardSuit === "diamond") {
            $("#card").attr("src", "./img/poker/dq_compressed.jpg");
        } else { // club
            $("#card").attr("src", "./img/poker/cq_compressed.jpg");
        }


    } else { // magicControl.cardNumber === 13

        if(magicControl.cardSuit === "spade") {
            $("#card").attr("src", "./img/poker/sk_compressed.jpg");
        } else if(magicControl.cardSuit === "heart") {
            $("#card").attr("src", "./img/poker/hk_compressed.jpg");
        } else if(magicControl.cardSuit === "diamond") {
            $("#card").attr("src", "./img/poker/dk_compressed.jpg");
        } else { // club
            $("#card").attr("src", "./img/poker/ck_compressed.jpg");
        }

    }


    magicControl.canStartShow = true;
    magicControl.isSettingDone = true;
    
}