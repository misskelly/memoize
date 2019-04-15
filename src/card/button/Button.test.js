import React from 'react';
import Button from './Button';
import { mockCurrentCard } from '../../mockData/mockData'
import { shallow } from 'enzyme';

const mockRemoveFromDeck = jest.fn();

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Button removeFromDeck={mockRemoveFromDeck}
              cardId={mockCurrentCard.cardId}  />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});