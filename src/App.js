import React, { Component } from 'react';
import './App.css';
import Header from './header/Header'
import Menu from './menu/Menu'
import FlashCards from './flashCards/FlashCards'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: []
    }
  }
  render() {
    return (
      <main className="App">
        <Header />
        <Menu />
        <FlashCards />
        
      </main>
    );
  }
}

export default App;
