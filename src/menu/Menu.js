import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: 'Friend',
      selectedDeck: props.allCards
    }
  }

  render () {
    const { allCards } = this.props;
    const { student, selectedDeck } = this.state;
    return (
      <section className='mainMenu'>
        <form className='menuForm'>
          <label  className='nameInputLabel'
                  htmlFor='nameInput'>
                  Student
          </label>
          <input  type='text'
                  id='nameInput'
                  className='nameInput' placeholder='Your name here.....'/>
          <h3 className='chooseDeckHeading'>
            Which terms would you like to review?
          </h3>

        </form>
      
      </section>
    )
  }


}