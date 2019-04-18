import React from 'react';
import { flashCards, catergories } from './api'
import { mockCards, mockCurrentCard } from './lib/mockData'

import App from './App';
import { shallow } from 'enzyme';



describe('App', () => {

  const mockRandomNumber = jest.fn();
  const mockRemoveFromDeck = jest.fn();
  const mockGetRandomCard = jest.fn();
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should have the proper default state', () => {
  //   expect(wrapper.state()).toEqual({
  //     allCards: flashCards,
  //     currentCard:flashCards[0] });
  // });



  // it('should update the current card', () => {
  //   expect(wrapper.state()).toEqual({
  //     allCards: flashCards,
  //     currentCard: null
  //   });
  //     wrapper.instance().updateCurrentCard(mockCard);
  //   expect(wrapper.state()).toEqual({
  //     allCards: flashCards,
  //     currentCard: mockCard});

  // });

  


});
