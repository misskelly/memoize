import React, {Component} from 'react';

export default class Button extends Component {

  handleClick = (e) => {
    if (e.target.id === 'removeBtn') {
      this.props.removeFromDeck(this.props.cardId)
    } 
    // else if (e.target.id === 'wrongAnswerBtn'){
    // }
  }
  render() {
    return (
      <>
        <button className='cardBtn' 
                id={this.props.type}
                onClick={this.handleClick}>
          {this.props.buttonText}
        </button>
        <label  htmlFor={this.props.type} 
                className='btnLabel'>
          {this.props.lable}
        </label>
      </>
    )
  }

}