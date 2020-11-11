import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const wrapper = shallow(<App />);

describe('Simple component test', () => {
  it('should render App Component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
