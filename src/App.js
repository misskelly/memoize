import React, { Component } from 'react';
import Header from './header/Header'
import Menu from './menu/Menu'
import FlashCards from './flashCards/FlashCards'
import { removeCard } from './lib/utils'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: [],
      currentDeck: [],
      currentCard: ''
    }
    this.removeFromDeck = this.removeFromDeck.bind(this);
    this.getRandomCard = this.getRandomCard.bind(this);
    this.updateDeck = this.updateDeck.bind(this);
  }

  
  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/kzickmemoizedata/flashcards')
    .then(data => data.json())
    .then(data => this.setState({allCards: data.flashCards}, () => {
      this.getDeck();
    }))
    .catch(err => console.log(err));
  }

  getDeck = () => {
    let deck = JSON.parse(localStorage.getItem('savedDeck')) || this.state.allCards;
    this.updateDeck(deck);
  }

  updateDeck = (newDeck) => {
    this.setState({currentDeck: newDeck}, () => {
      // console.log(this.state.allCards, this.state.currentDeck)
    });
  }

  updateCurrentCard = (newCard) => {
    this.setState({currentCard: newCard}, () => console.log(this.state.currentCard));
    
  }
  
  removeFromDeck = (id) => {
    const { currentDeck } = this.state
    const updatedDeck = removeCard(id, currentDeck)
    this.updateDeck(updatedDeck)
  }

  getRandomCard = () => {
    const randomNum = Math.floor(Math.random() * this.state.currentDeck.length);
    this.updateCurrentCard(this.state.currentDeck[randomNum]);
    console.log('randomCard called')
    return randomNum;
  }
    
  render () {
    const { allCards, currentDeck, currentCard } = this.state;
    console.log('current card:', currentCard)
    return (
      <main className='appContainer'>
        <Header />
        <Menu allCards={allCards}
              getRandomCard={this.getRandomCard}
              updateDeck={this.updateDeck}/>
        {currentDeck.length &&
        <FlashCards deck={currentDeck}
                    card={currentCard}
                    getRandomCard={this.getRandomCard}
                    removeFromDeck={this.removeFromDeck}
        /> }
      </main>
    );
  }
}
  

  