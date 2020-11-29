import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../../components/common/InputField';

describe('input fields', () => {
  it('It should render inputs field', done => {
    const wrapper = shallow(<InputField />);

    expect(wrapper.find('input').length).toEqual(1);
    done();
  });
});