import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';

import Counter from './Counter';

describe('App', () => {
  const wrapper = mount(<App />);
  it('passes all props to Counter', () => {
    const counterWrapper = wrapper.find(Counter);

    expect(counterWrapper.find('div.count').text()).toBe('0');
  });
  it('increments the counter', () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('div.count').text()).toBe('1');
  });

  it('decrements the counter', () => {
    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('div.count').text()).toBe('0');
  });
});
