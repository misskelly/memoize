import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Button />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});