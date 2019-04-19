import React, { Component } from 'react';
import Menu from '../menu/Menu'

// import Menu from 'menu';




export default class Header extends Component {
  constructor(props) {
    super();
  }


  
  render () {
    const { allCards, updateDeck, getRandomCard, hideMenu } = this.props;
    return (
      <header className='welcomePage'>
        <section className='mainHeading'>
          <h1 className='memoizeHeading'>Memoize</h1>
          <h2 className='subHeading'>
          Time to learn some stuff.
          </h2>
        </section>
      <Menu allCards={allCards}
            getRandomCard={getRandomCard}
            updateDeck={updateDeck}
            hideMenu={hideMenu}
              />
      </header>
    )
  }
  }
