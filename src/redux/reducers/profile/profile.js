import {
  VIEW_PROFILE_PENDING,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS
} from '../../actions/actionTypes';

const initialState = {
  user: {},
  viewProfileError: '',
  res: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VIEW_PROFILE_PENDING:

      return {
        ...state
      };

    case VIEW_PROFILE_SUCCESS:

      return {
        ...state,
        user: payload.user

      };

    case VIEW_PROFILE_ERROR:

      return {
        ...state,
        viewProfileError: payload.error

      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        res: { payload }
      };

    default: return state;
  }
};

export default reducer;