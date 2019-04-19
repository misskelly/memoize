import React, {Component} from 'react';

export default class Button extends Component {

  handleClick = (e) => {
    e.preventDefault();
    const { selectDeck, removeFromDeck, updateDeck, deck, getRandomCard, allTerms, allCards, cardId } = this.props;
    
    switch (e.target.id) {
      case 'basicsDeckBtn':
        selectDeck('basics');
        break;
      case 'testingDeckBtn':
        selectDeck('testing');
        break;
      case 'previousDeck':
        console.log('You need to hook up local storage here')
        break
      case 'fullDeck':
        allTerms(allCards);
        break
      case 'removeBtn':
        removeFromDeck(cardId);
        break
      case 'almostBtn':
        updateDeck(deck)
        console.log('So close');
        break
        case 'wrongAnswerBtn':
        updateDeck(deck)
        console.log('Whomp whomp.  Also you should add that duplicate card functionality here....');
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