const magicControl = require("./MagicControl");


$("#magicArea").hide();
$("#showTip").hide();

$(document.body).css("background-color", "black");


$("#startBtn").click(() => {
    $("#magicArea").show();
    $("#menu").hide();

    setTimeout(() => {
        setCard();
    }, 100);
})

$("#tipBtn").click(() => {
    $("#menu").hide();
    $("#showTip").show();
    $(".item").css("height", magicControl.height / 4 + 'px');
})

$("#goToMene").click(() => {
    $("#menu").show();
    $("#showTip").hide();
})




function setCard() {
    document.addEventListener("touchstart", (event) => {
        if (typeof magicControl.cardNumber !== "undefined") {
            return;
        }
        magicControl.chooseCardV2(event.touches[0].clientX, event.touches[0].clientY);
        settingShowCard();
        backToMenu();
    });
    
}

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


let keepTouchTwoFingerTimer = undefined;
const keppTouchReloadTime = 4 * 1000;

function backToMenu() {

    
    document.addEventListener("touchstart", (event) => {
        if(event.touches.length === 2) {

            if(typeof keepTouchTwoFingerTimer !=="undefined") {
                clearTimeout(keepTouchTwoFingerTimer);
            }

            keepTouchTwoFingerTimer = setTimeout(()=>{
                location.reload();
            }, keppTouchReloadTime);
        }
    });

    document.addEventListener("touchend", () => {
        if(typeof keepTouchTwoFingerTimer !=="undefined") {
            clearTimeout(keepTouchTwoFingerTimer);
        }

    });
    
}