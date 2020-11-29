/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it('should have a div element rendered', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
