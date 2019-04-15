import React from 'react';
import Card from './Card';
import { mockCurrentCard } from '../mockData/mockData'
import { shallow } from 'enzyme';


const mockRemoveFromDeck = jest.fn();
const mockGetRandomCard = jest.fn();

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card cardId={mockCurrentCard.cardNumber}
            term={mockCurrentCard.term}
            definition={mockCurrentCard.definition}
            getRandomCard={mockGetRandomCard}
            removeFromDeck={mockRemoveFromDeck} />
            // addDuplicate={mockCurrentCard.addDuplicate} />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});