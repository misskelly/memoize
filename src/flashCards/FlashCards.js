import React from 'react';
import Card from '../card/Card'

export default function FlashCards(props) {
  const { getRandomCard, removeFromDeck, deck, card, updateDeck } = props;
  return (
    <section className='flashCards'>
      {
        !deck.length &&
        <article className='noCardsContainer'>
          <h5 className='noCardsMessage'>You made it through the entire deck! Want to review some more?</h5>
          <button type='submit'
                  className='refreshBtn'>
            Mo' Memoize Mo' Better
          </button>
        </article>
      }
      {
        deck.length !== 0 &&
        <Card cardId={card.cardNumber}
        term={card.term}
        deck={deck}
        definition={card.definition}
        getRandomCard={getRandomCard}
        removeFromDeck={removeFromDeck}
        updateDeck={updateDeck}
        
      // addDuplicate={props.card.addDuplicate} 
      />
    }
          
    </section>
  )
}