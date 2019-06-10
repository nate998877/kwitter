<<<<<<< HEAD
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };

=======
import { CREATE_USER, CREATE_USER_FAIL, CREATE_USER_SUCCESS } from "../actions";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        userCreatedLoading: true,
        userCreatedError: null
      };
    case CREATE_USER_SUCCESS:
      return { ...state, userCreated: action.payload, userCreatedLoading: false };
    case CREATE_USER_FAIL:
      return { ...state, userCreatedError: action.payload, userCreatedLoading: false };
>>>>>>> FUNCTIONALITY-LoginPage_CreateUser
    default:
      return state;
  }
};
