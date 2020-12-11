import { FETCH_DESTINATION } from '../actions/actionTypes';
import { pending, fulfilled, rejected } from '../../utils/action.utils';

const initialState = {
  accImage: '',
  destination: '',
  invalid: ''
};

const destinationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case fulfilled(FETCH_DESTINATION):
      return {
        ...state,
        accImage: payload.data.imgUrl,
        destination: payload.data.topDestination
      };

    case rejected(FETCH_DESTINATION):
      return {
        ...state,
        invalid: payload.response.data.error
      };
    default:
      return state;
  }
};

export default destinationReducer;