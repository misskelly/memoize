import React from 'react';
import Card from '../card/Card'

export default function FlashCards (props) {
  return (
    <section className='flashCards'>
      <Card cardId={props.card.cardNumber}
            term={props.card.term}
            definition={props.card.definition}
            removeFromDeck={props.removeFromDeck}
            // addDuplicate={props.card.addDuplicate} 
            />
    </section>
  )
}