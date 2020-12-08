/* eslint-disable no-restricted-globals */
import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/auth/login/login';

const props = {
  location
};
const wrapper = shallow(<Login {...props}/>);

describe('Social Login', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { assign: jest.fn(), replace: jest.fn(), reload: jest.fn() };
  });

  test('render the social login buttons', () => {
    expect(wrapper.find('.social-btn').exists()).toBe(true);
  });
});

describe('when the google button is clicked', () => {
  test('should redirect to google callback', () => {
    const googleCall = jest.spyOn(wrapper.instance(), 'signInWithGoogle');
    wrapper.instance().forceUpdate();
    wrapper.find('.google').simulate('click', googleCall);
    expect(googleCall).toHaveBeenCalled();
  });
});

describe('when the fb button is clicked', () => {
  test('should redirect to facebook callback', () => {
    const fbCall = jest.spyOn(wrapper.instance(), 'signInWithFacebook');
    wrapper.instance().forceUpdate();
    wrapper.find('.facebook').simulate('click', fbCall);
    expect(fbCall).toHaveBeenCalled();
  });
});
