export const removeCard = (id, deck) => {
  let updatedDeck = deck.filter(card => card.cardNumber !== id );
  return updatedDeck;

}