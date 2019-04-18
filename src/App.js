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
    this.fetchData();
    let deck = localStorage.getItem("savedDeck") === null ? 
    this.state.allCards : 
    JSON.parse(localStorage.getItem('savedDeck'));
    console.log('deck: ', deck)
    this.updateDeck(deck)
    this.getRandomCard();
  }
  
  fetchData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/kzickmemoizedata/flashcards')
    .then(response => response.json())
    .then(data => this.setState({
      allCards: data.flashCards
    }))
    .catch(err => console.log(err, 'Uh oh! Something is broken, cannot retrieve flashcards'));
    console.log(this.state);
  }

  componentWillUpdate(nextState) {
    localStorage.setItem('savedDeck', JSON.stringify(nextState.currentDeck));
  }

  updateDeck = (newDeck) => {
    this.setState({
      currentDeck: newDeck
    })
    console.log('deck state: ', this.state.currentDeck)
  }

  updateCurrentCard = (newCard) => {
    this.setState({
      currentCard: newCard
    });
    console.log('current card called', this.state.currentCard)
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
        {this.props.currentCard !== null &&
        <FlashCards deck={currentDeck}
                    card={currentCard}
                    getRandomCard={this.getRandomCard}
                    removeFromDeck={this.removeFromDeck}
                  />}
      </main>
    );
  }
}
  

  