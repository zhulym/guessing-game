class GuessingGame {
    constructor() {
        this.min = '';
        this.max = '';
        this.result = '';
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.floor((this.max + this.min) / 2);
        return result;
    }

    lower() {
        this.min = this.min;
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
        this.max = this.max;
    }
}

module.exports = GuessingGame;
