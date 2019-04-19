import React, { Component } from 'react';
import flipArrow from '../Styles/flipArrow.png';
import trash from '../Styles/trash.png';
import Button from '../button/Button'

export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // currentCard: null,
      termFaceUp: true,
    }
  }


  render() {
      const { getRandomCard, updateDeck, removeFromDeck, cardId, deck, term, definition } = this.props
      // const { termFaceUp } =  this.state 
    return (
      <section className='featuredCard' id={cardId}>
        <article className='termSide card'>
          <h4 className='termText'>{term}</h4>
          <div className='iconBtnWrapper' >
            <img src={trash} alt='I am a little trash can! Click me to remove this card from the deck.' role='button' className='icon trash'/>
            <img src={flipArrow} alt='I am a curved arrow! Click me to filp the card over and see the answer.' role='button' className='icon arrow'/>
          </div>
        </article>
        <article className='definitionSide card'>
          <p className='definitionText'>{definition}</p>
          <form className='buttons'>
            <Button type='removeBtn'
                    buttonText='Nailed it!'
                    label='Remove this one, I&apos;ve got it memorized!'
                    removeFromDeck={removeFromDeck}
                    cardId={cardId} 
                    getRandomCard={getRandomCard}
                    />
            <Button type='almostBtn'
                    buttonText='So Close!'
                    label='Better come back to that one later.'
                    deck={deck}
                    updateDeck={updateDeck} 
                    getRandomCard={getRandomCard}
                    />
            <Button type='wrongAnswerBtn'
                    buttonText='Not a clue.'
                    label='Yikes, I need extra review on that one!' 
                    deck={deck}
                    updateDeck={updateDeck} 
                    getRandomCard={getRandomCard}

                    // Better add a duplicate!'
                    // addDuplicate={props.addDuplicate} 
                    cardId={cardId} 
                    />
          </form>
        </article>
      </section>
    )

  }

}