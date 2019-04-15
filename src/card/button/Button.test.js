import React from 'react';
import Button from './Button';
import { mockCurrentCard } from '../../mockData/mockData'
import { shallow } from 'enzyme';

const mockRemoveFromDeck = jest.fn();
const mockGetRandomCard = jest.fn();


describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(

      <Button removeFromDeck={mockRemoveFromDeck}
              getRandomCard={mockGetRandomCard}
              cardId={mockCurrentCard.cardId}  />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});