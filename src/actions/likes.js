import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LIKE         = "LIKE";
export const LIKE_SUCCESS = "LIKE_SUCCESS";
export const LIKE_FAILURE = "LIKE_FAILURE";
export const DELETE_LIKE  = "LIKE_DELETE";

const url = domain + "/likes";

// action creators
const like = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result)
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message })
      );
    });
};

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};
