import React from 'react';
import FlashCards from './FlashCards';
import { shallow } from 'enzyme';


describe('FlashCards', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FlashCards />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});