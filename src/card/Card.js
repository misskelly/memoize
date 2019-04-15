import React, { Component } from 'react';
import flipArrow from '../Styles/flipArrow.png';
import trash from '../Styles/trash.png';
import Button from './button/Button'

export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // currentCard: null,
      termFaceUp: true,
    }
  }


  render() {

    return (
      
      <section className='featuredCard' id={this.props.cardId}>
        <article className='termSide card'>
          <h4 className='termText'>{this.props.term}</h4>
          <div className='iconBtnWrapper' >
            <img src={trash} alt='I am a little trash can! Click me to remove this card from the deck.' role='button' className='icon trash'/>
            <img src={flipArrow} alt='I am a curved arrow! Click me to filp the card over and see the answer.' role='button' className='icon arrow'/>
          </div>
        </article>
        <article className='definitionSide card'>
          <p className='definitionText'>{this.props.definition}</p>
          <form className='buttons'>
            <Button type='removeBtn'
                    buttonText='Nailed it!'
                    lable='Remove this flashcard, this one is memorized!'
                    removeFromDeck={this.props.removeFromDeck}
                    cardId={this.props.cardId} 
                    getRandomCard={this.props.getRandomCard}
                    />
            <Button type='almostBtn'
                    buttonText='So Close!'
                    lable='Better come back to that one later.' 
                    getRandomCard={this.props.getRandomCard}
                    />
            <Button type='wrongAnswerBtn'
                    buttonText='Not a clue.'
                    lable='Yikes, I need extra review on that one!' 
                    getRandomCard={this.props.getRandomCard}

                    // Better add a duplicate!'
                    // addDuplicate={props.addDuplicate} 
                    cardId={this.props.cardId} 
                    />
          </form>
        </article>
      </section>
    )

  }

}