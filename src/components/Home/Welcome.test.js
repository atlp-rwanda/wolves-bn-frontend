import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('home component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  it('should have an h1 element rendered', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
