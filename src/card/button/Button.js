import React, {Component} from 'react';

export default class Button extends Component {

  handleClick = (e) => {
    if (e.target.id === 'removeBtn') {
      this.props.removeFromDeck(this.props.cardId)
    }
  }
  render() {
    return (
      <>
        <button className='cardBtn' 
                id={this.props.type}
                onClick={this.handleClick}
        >
          {this.props.buttonText}
        </button>
        <label for={this.props.type} className='btnLabel'>
          {this.props.lable}
        </label>
      </>
    )
  }

}