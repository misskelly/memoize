import React from 'react';
import Button from './Button';
import { mockCurrentCard, mockCards } from '../lib/mockData'
import { shallow } from 'enzyme';

const mockHandleClick = jest.fn();

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
       <Button  onClick={mockHandleClick}/>

      // <Button allCards={mockCards}
      //         updateDeck={mockUpdateDeck}
      //         selectDeck={mockSelectDeck}
      //         removeFromDeck={mockRemoveFromDeck}
      //         getRandomCard={mockGetRandomCard}
      //         cardId={mockCurrentCard.cardId}  />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call handleClick when button is clicked', () => {
  //   wrapper.find('#almostBtn').simulate('click');
  //   expect(mockHandleClick).toHaveBeenCalled();
  // })


});



