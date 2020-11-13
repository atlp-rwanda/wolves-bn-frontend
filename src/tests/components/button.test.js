import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/common/Button';

describe('button', () => {
  it('It should render common button', done => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find('button').length).toEqual(1);
    done();
  });
});