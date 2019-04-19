import React, { Component } from 'react';
import Header from './header/Header'
import FlashCards from './flashCards/FlashCards'
import { removeCard } from './lib/utils'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: [],
      currentDeck: [],
      currentCard: '',
      visibleMenu: true
    }
    this.removeFromDeck = this.removeFromDeck.bind(this);
    this.getRandomCard = this.getRandomCard.bind(this);
    this.updateDeck = this.updateDeck.bind(this);
  }
  
  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/kzickmemoizedata/flashcards')
    .then(data => data.json())
    .then(data => this.setState({allCards: data.flashCards}, () => {
      this.getCurrentDeck();
    }))
    .catch(err => console.log(err, 'Something has gone terribly wrong.'));
  }

  getCurrentDeck = () => {
    let deck = JSON.parse(localStorage.getItem('savedDeck')) || this.state.allCards;
    this.updateDeck(deck);
  }

  updateDeck = (newDeck) => {
    this.setState({currentDeck: newDeck}, () => {
      localStorage.setItem('savedDeck', JSON.stringify(this.state.currentDeck))
      console.log(this.state.currentDeck)
    });
  }

  updateCurrentCard = (newCard) => {
    this.setState({currentCard: newCard}, 
      // () => console.log(this.state.currentCard)
      );
  }
  
  removeFromDeck = (id) => {
    const { currentDeck } = this.state;
    const updatedDeck = removeCard(id, currentDeck);
    this.updateDeck(updatedDeck);
  }
  
  getRandomCard = () => {
    const { currentDeck } = this.state;
    const randomNum = Math.floor(Math.random() * currentDeck.length);
    this.updateCurrentCard(currentDeck[randomNum]);
    console.log(randomNum)
    return randomNum;
  }

  hideMenu = () => {
    this.setState({ visibleMenu: false })
  }
    
  render () {
    const { allCards, currentDeck, currentCard, visibleMenu } = this.state;
    return (
      <main className='appContainer'>
        {
          visibleMenu === true &&
          <Header allCards={allCards}
                  getRandomCard={this.getRandomCard}
                  updateDeck={this.updateDeck}
                  hideMenu={this.hideMenu}
                  />
        }
        {
          visibleMenu === false &&
        <FlashCards 
                    deck={currentDeck}
                    card={currentCard}
                    getRandomCard={this.getRandomCard}
                    removeFromDeck={this.removeFromDeck}
                    hideMenu={this.hideMenu}
                    updateDeck={this.updateDeck}/> 
        }
      </main>
    );
  }
}
  

  