import {
  VIEW_PROFILE_PENDING,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR
} from '../../actions/actionTypes';

const initialState = {
  user: {},
  viewProfileError: '',
  updateProfileError: '',
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
      console.log(payload.user.firstName);
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
        res: payload.response
      };

    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        updateProfileError: payload.error
      };

    default: return state;
  }
};

export default reducer;