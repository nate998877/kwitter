import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LIKE           = "LIKE";
export const LIKE_SUCCESS   = "LIKE_SUCCESS";
export const LIKE_FAIL      = "LIKE_FAIL";
export const UNLIKE         = "UNLIKE";
export const UNLIKE_SUCCESS = "UNLIKE_SUCCESS";
export const UNLIKE_FAIL    = "UNLIKE_FAIL";


const url = domain + "/likes";

// action creators
const like = likeData => dispatch => {
  dispatch({
    type: LIKE
  });

  return fetch(url + "/likes", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(likeData)
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result)
      return dispatch({
        type: LIKE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LIKE_FAIL, payload: err.message })
      );
    });
};

export const toggleLikeOnPost = likeData => dispatch => {
  return dispatch(like(likeData)).then(() => dispatch(push("/likes")));
};