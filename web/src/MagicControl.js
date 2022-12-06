

let instance;

class MagicControl {
    constructor() {
        this.canStartShow = false;
        this.isSettingDone = false;

        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
}

module.exports = (()=>{
    if(instance) {
        return instance;
    }

    instance = new MagicControl();
    return instance;
})();



