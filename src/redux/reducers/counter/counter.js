import { INCREMENT, DECREMENT } from '../../actions/actionTypes';
import INITIAL_STATE from '../../store/initialState';

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:

      return {
        ...state, count: state.count + 1,

      };

    case DECREMENT:

      return {
        ...state, count: state.count - 1,

      };

    default: return state;
  }
};

export default reducer;