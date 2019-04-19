import React from 'react';
import Card from '../card/Card'

export default function FlashCards(props) {
  const { getRandomCard, removeFromDeck, deck, card, updateDeck } = props;
  return (
    <section className='flashCards'>
    
      
      <Card cardId={card.cardNumber}
            term={card.term}
            deck={deck}
            definition={card.definition}
            getRandomCard={getRandomCard}
            removeFromDeck={removeFromDeck}
            updateDeck={updateDeck}

            // addDuplicate={props.card.addDuplicate} 
            />
          
    </section>
  )
}