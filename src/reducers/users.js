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
    default:
      return state;
  }
};
