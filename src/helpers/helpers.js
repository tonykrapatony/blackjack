export const winnerCheck = async (playerPoints, pcPoints, setWinner, setDisabled, enough) => {
    if (playerPoints > 21) {
        setWinner('PC win!');
        setDisabled(true);
    } else if (enough) {
        if (playerPoints === 21) {
            setWinner('Player win')
        } else if (playerPoints > pcPoints && playerPoints < 21) {
            setWinner('Player win')
        } else if (pcPoints > 21) {
            setWinner('Player win')
        } else if (pcPoints === 21) {
            setWinner('PC win')
        } else if (pcPoints > playerPoints && pcPoints < 21) {
            setWinner('PC win')
        }
        setDisabled(true);
    }
}

export const countPoints = (cards) => {
    let sum = 0;
    let cardsPoints = cards.cards.map((card) => {
        if (card.value === 'ACE') {
            return 1;
        } else if (card.value.length > 1 ) {
            return 10;
        } else {
            return Number(card.value);
        }
    })
    if (cardsPoints.length === 2 && cardsPoints[0] === 1 && cardsPoints[1] === 1) {
        sum = 21
        return sum;
    } else {
        cardsPoints.forEach(element => {
            sum += element;
        });
        return sum;
    }
}