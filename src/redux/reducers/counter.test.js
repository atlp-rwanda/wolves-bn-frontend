import userReducer from './counter';
import * as actionTypes from '../actions/actionTypes';
import mockedResponse from '../../-mocks-/mock';
import initialState from '../store/initialState';

describe('counter Reducers', () => {
  it('should return initialState when there is no action', () => {
    const res = userReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state of the increment counter', () => {
    const res = userReducer(initialState, {
      type: actionTypes.INCREMENT,
    });
    expect(res).toMatchObject({ count: 1 });
  });
  it('should return an updated state of the increment counter', () => {
    const res = userReducer(initialState, {
      type: actionTypes.DECREMENT,
    });
    expect(res).toMatchObject({ count: -1 });
  });
});