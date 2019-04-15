import React from 'react';
import FlashCards from './FlashCards';
import { mockCards, mockCurrentCard } from '../mockData/mockData'
import { shallow } from 'enzyme';

const mockRemoveFromDeck = jest.fn();
const mockGetRandomCard = jest.fn();

describe('FlashCards', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FlashCards deck={mockCards}
                  card={mockCurrentCard}
                  getRandomCard={mockGetRandomCard}
                  removeFromDeck={mockRemoveFromDeck}/>
    )
  });

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});