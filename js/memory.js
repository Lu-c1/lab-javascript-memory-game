class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }

    shuffleCards(array) {

        for (let i = array.length; i > 0; i--) {
            const shuffle = Math.floor(Math.ramdom() * (i + 1));
            array[i] = array[shuffle]

            return array[shuffle];
        }
        if (!array) {
            return undefined;
        }

    }

    checkIfPair(card1, card2) {

        this.pairsClicked += 1
        if (card1 === card2) {
            this.pairsGuessed += 1
            return true;
        } else {
            return false;
        }

    }

    checkIfFinished() {
        if (this.pairGuessed === this.cards.length / 2) {
            return true;
        } else {
            return false;
        }
    }
}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;