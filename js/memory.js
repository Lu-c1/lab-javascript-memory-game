class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }

    shuffleCards(array) {

            this.cards.forEach((array) => {

                if (!array) {
                    return undefined;
                } else {
                    return Math.floor(Math.random() * 24);
                }

            });

        }
        // -- --why is not returning, according to test, the suffled(mixed) array of cards ? -- -- >
    checkIfPair(card1, card2) {
        if (card1.dataset.cardname === card2.dataset.cardname) {
            this.pairsGuessed += 1
            card1.removeEventListener("click", flipcard)
            card2.removeEventListener("click", flipcard)
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