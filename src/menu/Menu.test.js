import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

import { mockCards, mockCurrentCard } from '../lib/mockData'

const mockUpdateDeck = jest.fn;

describe('Menu', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Menu allCards={mockCards}
            updateDeck={mockUpdateDeck}/>     
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
      expect(wrapper.state()).toEqual({
       student: 'Friend'
      });
   });
   
   it('should update student name state', () => {
     
      expect(wrapper.state()).toEqual({
       student: 'Friend'
      });
       
      wrapper.find('#nameInput').simulate('change', { target: { value: 'Bob'} });
      
      expect(wrapper.state()).toEqual({
         student: 'Bob'
      })
  
    });

});