import React from 'react';
import { flashCards, catergories } from './api'
import App from './App';
import { shallow } from 'enzyme';


const mockRandomNumber = jest.fn();

const mockCard = {
  "categoryId": 1,
  "cardNumber": 103,
  "term": "JSX",
  "definition": "A mix of JavaScript and XML that facilitates rendering the appropriate HTML, lives inside a component"
}

describe('App', () => {
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
  //     currentCard: null });
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

  // it('should update the state of the question count on change', () => {

  //   expect(wrapper.state()).toEqual({ questionCount: 0, });
  //   wrapper.instance().updateCount( {target: {value: 7}} );
  //   expect(wrapper.state()).toEqual({ questionCount: 7});
  // });

});
