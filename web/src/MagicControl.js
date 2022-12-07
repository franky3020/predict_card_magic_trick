

let instance;

class MagicControl {
    constructor() {
        this.canStartShow = false;
        this.isSettingDone = false;

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.cardNumber = undefined;
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

    chooseSuits() {

    }
    

}

module.exports = (()=>{
    if(instance) {
        return instance;
    }

    instance = new MagicControl();
    return instance;
})();



