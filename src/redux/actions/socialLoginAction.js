// import { SOCIAL_LOGIN_SUCCESS, SET_TOKEN } from "./actionTypes";
// import { setJwtToLocalStorage } from "../../services/authServices";

// export const setToken = (token) => ({ type: SET_TOKEN, token });

// export const socialAuthSuccess = (payload) => ({ type: SOCIAL_LOGIN_SUCCESS, payload });

// export const socialAuthAction = (payload) => async (dispatch) => {
//   await setJwtToLocalStorage(payload.token);
//   await dispatch(setToken(payload.token));
//   await dispatch(socialAuthSuccess(payload));
//   window.location.assign("/home");
// };