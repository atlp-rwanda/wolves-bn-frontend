import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { FETCH_TRIPS_START, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_FAIL } from '../actionTypes';
import * as actions from './requests';

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('fetch trip requests actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('it should dispatch trips requests start', () => {
    expect(actions.fetchTripStart()).toEqual({
      type: FETCH_TRIPS_START
    });
  });

  it('it should dispatch trips requests success', () => {
    expect(actions.fetchTripSuccess()).toEqual({
      type: FETCH_TRIPS_SUCCESS
    });
  });

  it('it should dispatch trips requests fail', () => {
    expect(actions.fetchTripFail()).toEqual({
      type: FETCH_TRIPS_FAIL
    });
  });

  it('dispatch FETCH_TRIPS_SUCCESS after a successful API request', () => {
    mock.onGet('http://localhost:5000/api/trips').reply(200, { response: [{ item: 'item1' }, { item: 'item2' }] });
    store.dispatch(actions.fetchRequests()).then(() => {
      const expectedActions = [
        { type: 'FETCH_TRIPS_START' },
        {
          type: 'FETCH_TRIPS_SUCCESS',
          payload: [{ item: 'item1' }, { item: 'item2' }]
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    }).catch(error => {
      mock.onGet('http://localhost:5000/api/trips').reply(400, { error });

      store.dispatch(actions.fetchTripFail(error)).then(() => {
        const expectedActions = [
          { type: 'FETCH_TRIPS_START' },
          {
            type: 'FETCH_TRIPS_FAIL',
            payload: { error }
          }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      }).catch(err => err);
    });
  });
});
