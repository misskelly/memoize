import React from 'react';
import { mockCards, mockCurrentCard } from './lib/mockData'

import App from './App';
import { shallow } from 'enzyme';



describe('App', () => {

  const mockRemoveFromDeck = jest.fn();
  const mockGetRandomCard = jest.fn();
  const mockUpdateDeck = jest.fn();

  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({
      allCards: [],
      currentDeck: [],
      currentCard: '',
      visibleMenu: true
    });
  });


  it('should update the current card', () => {
    
    expect(wrapper.state()).toEqual({
      allCards: [],
      currentDeck: [],
      currentCard: '',
      visibleMenu: true
    });
    
    wrapper.instance().updateCurrentCard(mockCurrentCard);
    
    expect(wrapper.state()).toEqual({
      allCards: [],
      currentDeck: [],
      currentCard: mockCurrentCard,
      visibleMenu: true
    });
    
  });
  
  it('should update the current deck', () => {
    
    expect(wrapper.state()).toEqual({
      allCards: [],
      currentDeck: [],
      currentCard: '',
      visibleMenu: true
    });
    
    wrapper.instance().updateDeck(mockCards);
    
    expect(wrapper.state()).toEqual({
      allCards: [],
      currentDeck: mockCards,
      currentCard: '',
      visibleMenu: true
    });
    
  });
  
  it('should generate a random number', () => {
    expect(typeof wrapper.instance().getRandomCard()).toEqual('number');
  });

  it('should return a number between 0 and 30', () => {
    const returnedNum = wrapper.instance().getRandomCard();
    expect(returnedNum).toBeGreaterThanOrEqual(0);
    expect(returnedNum).toBeLessThan(30);
  });
  


  


});
