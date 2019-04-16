import React, { Component } from 'react';
import { flashCards } from './api'
import Header from './header/Header'
import Menu from './menu/Menu'
import FlashCards from './flashCards/FlashCards'
import { removeCard } from './lib/utils'

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


  // componentDidMount() {
      // this.setState({ 
      //   allCards: flashCards
      //  })
  //   if(nothingInStorage) {
  //     this.fetchData();
  //   }
  //   this.addImgs();
  // }

  // componentWillMount() {
  //   localStorage.getItem('studiosRendered') && this.setState({
  //     rendered: JSON.parse(localStorage.getItem('studiosRendered'))
  //   })
  //   localStorage.getItem('types') && this.setState({
  //     yogaTypes: JSON.parse(localStorage.getItem('types'))
  //   })
  //   localStorage.getItem('studios') && this.setState({
  //     studios: JSON.parse(localStorage.getItem('studios'))
  //   })
  // }

  removeFromDeck = (id) => {
    const { allCards } = this.state
    const updatedDeck = removeCard(id, allCards)
    this.updateDeck(updatedDeck)
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
  

  