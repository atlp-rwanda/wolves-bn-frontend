import requestsReducer from './requests';
import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  tripsRequest: [],
  fetchError: null,
  loading: false,
  role: ''
};

describe('requests Reducers', () => {
  it('should return initialState when there is no action', () => {
    const res = requestsReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });

  it('should return an updated state when fetching process starts', () => {
    const res = requestsReducer(initialState, {
      type: actionTypes.FETCH_TRIPS_START,
    });
    expect(res).toMatchObject({ loading: true });
  });

  it('should return an updated state when trips requests are fetched successfully', () => {
    const res = requestsReducer(initialState, {
      type: actionTypes.FETCH_TRIPS_SUCCESS,
    });
    expect(res).toMatchObject({ fetchError: null });
  });

  it('should return an updated state when trips requests fail to be fetched', () => {
    const res = requestsReducer(initialState, {
      type: actionTypes.FETCH_TRIPS_FAIL,
    });
    expect(res).toMatchObject({ tripsRequest: [] });
  });
});
