import { LIKE, LIKE_SUCCESS, LIKE_FAIL, UNLIKE, UNLIKE_SUCCESS, UNLIKE_FAIL } from "../actions";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        likeLoading: true,
        likeError: null
      };
    case LIKE_SUCCESS:
      return { ...state, like: action.payload, likeLoading: false };
    case LIKE_FAIL:
      return { ...state, likeError: action.payload, likeLoading: false };

    case UNLIKE:
      return {
        ...state,
        unlikeLoading: true,
        unlikeError: null
      };
    case UNLIKE_SUCCESS:
      return { ...state, unlike: action.payload, unlikeLoading: false };
    case UNLIKE_FAIL:
      return { ...state, unlikeError: action.payload, unlikeLoading: false };

    default:
      return state;
  }
};
