export const removeCard = (id, deck) => {
  console.log('in utils/removeCard: ', deck)

  const targetCard = deck.find(card => card.cardNumber === id);
  const index = deck.indexOf(targetCard);
  return deck.splice(index, 1);
  // return deck.filter(card => card.id !== id )
}