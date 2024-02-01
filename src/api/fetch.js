export const fetchDeck = async () => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    const data = await res.json();
    return data;
}

export const getCards = async (deckId, count) => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
    const data = await res.json();
    return data;
}