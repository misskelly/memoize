import React, { Component } from 'react';
import Button from '../button/Button'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: 'Friend',
      selectedDeck: props.allCards
    }
  }


  //  TODO : update student method
  updateStudent = (name) => {
  this.setState({
    student: name
  })
  } 

  //handleNameInput

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
                  className='nameInput' placeholder='Your name here.....'
                  onChange='handleNameInput'/>
          <h3 className='chooseDeckHeading'>
            Which terms would you like to review?
          </h3>

          <Button type='reactDeckBtn'
            buttonText='React Basics'
            label=''/>
          
                
                  


        </form>
      
      </section>
    )
  }


}