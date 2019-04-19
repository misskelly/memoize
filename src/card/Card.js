import React, { Component } from 'react';
import flipArrow from '../Styles/flipArrow.png';
import trash from '../Styles/trash.png';
import Button from '../button/Button'

export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      termFaceUp: true
    }
    this.flipCard = this.flipCard.bind(this);

  }

  flipCard = (e) => {
    const { termFaceUp } =  this.state 
    // console.log('flip')
    let flip = !termFaceUp
    this.setState({
      termFaceUp: flip
    });

    console.log(this.state.termFaceUp)
  }

  handleTrashClick = () => {
    const { removeFromDeck, cardId, getRandomCard } = this.props;
    removeFromDeck(cardId);
    getRandomCard();
     console.log('trash')
  }

  render() {
      const { getRandomCard, updateDeck, removeFromDeck, cardId, deck, term, definition } = this.props
      const { termFaceUp } =  this.state 

      
    return (
      <section className='featuredCard' id={cardId}>
      {
        termFaceUp &&
        <article className='termSide card'>
          <h4 className='termText'>{term}</h4>
          <div className='iconBtnWrapper' >
            <img src={trash} 
                  alt='I am a little trash can! Click me to remove this card from the deck.' 
                  role='button' 
                  className='icon trash' 
                  onClick={this.handleTrashClick}/>
            <img src={flipArrow} 
                  alt='I am a curved arrow! Click me to filp the card over and see the answer.' 
                  role='button' 
                  className='icon arrow'
                  onClick={this.flipCard}/>
          </div>
        </article>
      }
      {
        termFaceUp === false &&
        <article className='definitionSide card'>
          <p className='definitionText'>{definition}</p>
          <form className='buttons'>
            <Button type='removeBtn'
                    buttonText='Nailed it!'
                    label='Remove this one, I&apos;ve got it memorized!'
                    flipCard={this.flipCard}
                    removeFromDeck={removeFromDeck}
                    cardId={cardId} 
                    getRandomCard={getRandomCard}
                    />
            <Button type='almostBtn'
                    buttonText='So Close!'
                    label='Better come back to that one later.'
                    deck={deck}
                    flipCard={this.flipCard}
                    updateDeck={updateDeck} 
                    getRandomCard={getRandomCard}
                    />
            <Button type='wrongAnswerBtn'
                    buttonText='Not a clue.'
                    label='Yikes, I need extra review on that one!' 
                    deck={deck}
                    flipCard={this.flipCard}
                    updateDeck={updateDeck} 
                    getRandomCard={getRandomCard}
                    
                    // Better add a duplicate!'
                    // addDuplicate={props.addDuplicate} 
                    cardId={cardId} 
                    />
          </form>
        </article>
      }
      </section>
    )

  }

}