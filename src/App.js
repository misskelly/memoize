import React, { Component } from 'react';
import { flashCards} from './api'
import Header from './header/Header'
import Menu from './menu/Menu'
import FlashCards from './flashCards/FlashCards'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: flashCards,
      currentCard: flashCards[0]
    }
    this.removeFromDeck = this.removeFromDeck.bind(this);
    this.getRandomCard = this.getRandomCard.bind(this);
  }

  updateDeck = (newDeck) => {
    this.setState({
      allCards: newDeck
    })
  }

  updateCurrentCard = (newCard) => {
    this.setState({
      currentCard: newCard
    })
  }

  removeFromDeck = (id) => {
    const cards = this.state.allCards;
    const targetCard = cards.find(card => card.cardNumber === id);
    const index = cards.indexOf(targetCard);
    cards.splice(index, 1);
    this.updateDeck(cards);
    console.log(cards)
    }

    getRandomCard = () => {
      const randomNum = Math.floor(Math.random() * this.state.allCards.length);
      this.updateCurrentCard(this.state.allCards[randomNum])
    }
    
    render () {
      console.log(this.state.allCards.length)
      return (
        <main className='appContainer'>
          {/* <Header /> */}
          {/* <Menu /> */}
          <FlashCards deck={this.state.allCards}
                      card={this.state.currentCard}
                      getRandomCard={this.state.getRandomCard}
                      removeFromDeck={this.removeFromDeck}
                    />
        </main>
    );
  }
}
  

  