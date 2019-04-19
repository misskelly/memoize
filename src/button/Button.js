import React, {Component} from 'react';

export default class Button extends Component {

  handleClick = (e) => {
    e.preventDefault();
    const { flipCard, selectDeck, removeFromDeck, updateDeck, deck, getRandomCard, allTerms, allCards, cardId } = this.props;
    
    switch (e.target.id) {
      case 'basicsDeckBtn':
        selectDeck('basics');
        break;
      case 'testingDeckBtn':
        selectDeck('testing');
        break;
      case 'previousDeck':
        console.log('Deck from local storage')
        break
      case 'fullDeck':
        allTerms(allCards);
        break
      case 'removeBtn':
        removeFromDeck(cardId);
        flipCard();
        break
      case 'almostBtn':
        updateDeck(deck)
        flipCard();
        console.log('So close');
        break
        case 'wrongAnswerBtn':
        updateDeck(deck);
        flipCard();
        console.log('Whomp whomp.  Also you should add that duplicate card functionality here....');
        // setTimeout(() => flipCard, 1000)
        break
      default:
        console.log('Uh Oh, we have a button problem....')
      }
    getRandomCard();
  }

  render() {
    const { type, buttonText, label, className } = this.props;
    return (
      <div className='cardBtnWrapper'>
        <button className='cardBtn' 
                id={type}
                onClick={this.handleClick}>
          {buttonText}
        </button>
        <label  htmlFor={type} 
                className='btnLabel'>
          {label}
        </label>
      </div>
    )
  }

}