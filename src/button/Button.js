import React, {Component} from 'react';

export default class Button extends Component {

  handleClick = (e) => {
    const { selectDeck, removeFromDeck, getRandomCard, updateDeck, allCards, cardId } = this.props;
    
    switch (e.target.id) {
      case 'basicsDeckBtn':
        selectDeck('basics');
        break;
      case 'testingDeckBtn':
        selectDeck('testing');
        break;
      case 'removeBtn':
        removeFromDeck(cardId);
        break
      default:
        updateDeck(allCards)
      }
      
    getRandomCard();
  }
  render() {
    const { type, buttonText, label } = this.props;
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