export const removeCard = (id, deck) => {
  let updatedDeck = deck.filter(card => card.cardNumber !== id );
  return updatedDeck;
}

export const filterDeck = (deckChoice, allCards) => {
  let id = deckChoice === 'basics' ? 1 : 2;
  let updatedDeck = allCards.filter(card => card.categoryId === id);
  return updatedDeck;
}