

let instance;

class MagicControl {
    constructor() {
        this.canStartShow = false;
        this.isSettingDone = false;

        this.width = window.outerWidth;
        this.height = window.outerHeight;
        this.cardNumber = undefined;
        this.cardSuit = undefined;
    }

    chooseNumber(clientX) {
        let oneThirdWidth = this.width / 3;
        
        if (clientX < oneThirdWidth) {
            this.cardNumber = 11;
        } else if (clientX > oneThirdWidth && clientX < oneThirdWidth * 2) {
            this.cardNumber = 12;
        } else {
            this.cardNumber = 13;
        }

    }

    chooseSuits(clientX, clientY) {

        let halfWidth = this.width / 2 ;
        let halfHeight = this.height / 2 ;

        let isRight = false;
        let isTop = false;

        if(clientX > halfWidth) {
            isRight = true;
        } else {
            isRight = false;
        }

        if(clientY > halfHeight) {
            isTop = false;
        } else {
            isTop = true;
        }

        if(!isRight && isTop) {
            this.cardSuit = "spade";
        } else if (isRight && isTop) {
            this.cardSuit = "heart ";
        } else if (!isRight && !isTop) {
            this.cardSuit = "diamond";
        } else if (isRight && !isTop) {
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



