import React from 'react';
import { removeCard } from './utils';
import { mockCards, mockCurrentCard
} from './mockData';
import { shallow } from 'enzyme';






describe('removeCard', () => {

  it('should target the correct card', () => {
    const id = 103;
    const targetCardId = mockCurrentCard.cardNumber;
    expect(targetCardId).toEqual(id);
    
  })
  
  it('should remove target card from the deck', () => {
    const id = 103;
    const deck = mockCards;
    const result = removeCard(id, deck);
    expect(deck).toHaveLength( 4 );
    expect(result).toHaveLength( 3 );
  });


});

