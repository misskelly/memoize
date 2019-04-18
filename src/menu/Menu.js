import React, { Component } from 'react';
import Button from '../button/Button';
import { filterDeck } from '../lib/utils';



export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: 'Friend',
    }
    this.selectDeck = this.selectDeck.bind(this);
  }

  updateStudent = (e) => {
    let name = e.target.value;
    this.setState({
      student: name
    })
  } 
  
  selectDeck = (chosenDeck) => {
    const { allCards, updateDeck } = this.props;
    const updatedDeck = filterDeck(chosenDeck, allCards);
    updateDeck(updatedDeck);
    console.log('chosen:', chosenDeck, 'updated:',updatedDeck)
  }
  
  handleSubmit = (e) => {
    const { student } = this.state;
    e.preventDefault();
    console.log(this.state)
    const greeting = document.querySelector('.greetingHeading');
    const input = document.querySelector('.nameInput');
    greeting.innerText = `Hello ${student}!`;
    input.value = '';
  }
  
  //  TODO : update student method
  
  render () {
    const { allCards, updateDeck, getRandomCard } = this.props;
    return (
      <section className='mainMenu'>
        <h3 className='greetingHeading'>Hello Friend!</h3>
        <form className='menuForm' onSubmit={this.handleSubmit}>
          <label  className='nameInputLabel'
                  htmlFor='nameInput'>
                  Student Name
          </label>
          <input  type='text'
                  id='nameInput'
                  className='nameInput' placeholder='Your name here.....'
                  onChange={this.updateStudent}/>
          <button type='submit' 
                  className='updateNameButton'
                  autoComplete = "fname" 
                  autoFocus>
                  
          </button>
          <h4 className='chooseDeckHeading'>
            Which terms would you like to review?
          </h4>

          <Button type='basicsDeckBtn'
                  buttonText='React Basics'
                  label=''
                  selectDeck={this.selectDeck}
                  getRandomCard={getRandomCard}
                  updateDeck={updateDeck}/>
                  
          <Button type='testingDeckBtn'
                  buttonText='React Testing'
                  label=''
                  selectDeck={this.selectDeck}/>
          <Button type='previousDeck'
                  buttonText='Keep Going'
                  label=''
                  getRandomCard={getRandomCard}
                  updateDeck={updateDeck}
                  // TODO: local Storage!!!!                  
                  // selectDeck={storedDeck}
                  />
          <Button type='fullDeck'
                  buttonText='Everything'
                  label=''
                  getRandomCard={getRandomCard}
                  allTerms={this.updateDeck}
                  allCards={allCards}/>

        </form>
      
      </section>
    )
  }


}