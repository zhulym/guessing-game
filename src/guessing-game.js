class GuessingGame {
    constructor() {
        this.min = '';
        this.max = '';
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.floor((max - min) / 2);
    }

    lower() {
        this.min = min;
        this.max = result;

    }

    greater() {
        this.min = result;
        this.max = max;
    }
}

module.exports = GuessingGame;
