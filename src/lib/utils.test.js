import React from 'react';
import { removeCard, filterDeck } from './utils';
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



describe('filterDeck', () => {

  it('should filter deck by react basics or react testing', () => {
    
    filterDeck('basics', mockCards);

    expect.arrayContaining({
      'categoryId': 1
    });
    expect.not.arrayContaining({
      'categoryId': 2
    });

    filterDeck('testing', mockCards);

      expect.arrayContaining({
        'categoryId': 2
      });
      expect.not.arrayContaining({
        'categoryId': 1
      });

  })
})

// describe('arrayContaining', () => {
//   const expected = ['Alice', 'Bob'];
//   it('matches even if received contains additional elements', () => {
//     expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
//   });
// });