import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentCard: null,
      termFaceUp: true,
    }
  }
}