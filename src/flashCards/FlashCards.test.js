import React from 'react';
import FlashCards from './FlashCards';
import { mockCards, mockCurrentCard } from '../lib/mockData'
import { shallow } from 'enzyme';

const mockRemoveFromDeck = jest.fn();
const mockGetRandomCard = jest.fn();
const mockUpdateDeck = jest.fn();

describe('FlashCards', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FlashCards deck={mockCards}
                  card={mockCurrentCard}
                  getRandomCard={mockGetRandomCard}
                  removeFromDeck={mockRemoveFromDeck}
                  updateDeck={mockUpdateDeck}/>
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});