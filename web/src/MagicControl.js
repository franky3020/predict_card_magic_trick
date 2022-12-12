

let instance;

class MagicControl {
    constructor() {
        this.canStartShow = false;
        this.isSettingDone = false;
        this.doRestart = false;

        this.width = window.outerWidth;
        this.height = window.outerHeight;
        this.cardNumber = undefined;
        this.cardSuit = undefined;
    }

    chooseCardV2(clientX, clientY) {

        let oneThirdWidth = this.width / 3;
        
        if (clientX < oneThirdWidth) {
            this.cardNumber = 11;
        } else if (clientX >= oneThirdWidth && clientX < oneThirdWidth * 2) {
            this.cardNumber = 12;
        } else {
            this.cardNumber = 13;
        }


        let oneFourHeight = this.height / 4;
        
        if (clientY < oneFourHeight) {
            this.cardSuit = "spade";
        } else if (clientY >= oneFourHeight && clientY < oneFourHeight * 2) {
            this.cardSuit = "heart";
        } else if (clientY >= oneFourHeight * 2 && clientY < oneFourHeight * 3) {
            this.cardSuit = "diamond";
        } else {
            this.cardSuit = "club";
        }

    }
    

}

module.exports = (()=>{
    if(instance) {
        return instance;
    }

    instance = new MagicControl();
    return instance;
})();



