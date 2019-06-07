import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LOGIN          = "LOGIN";
export const LOGIN_SUCCESS  = "LOGIN_SUCCESS";
export const LOGIN_FAIL     = "LOGIN_FAIL";
export const LOGOUT         = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL    = "LOGOUT_FAIL";

const url = domain + "/auth";

// action creators
const login = loginData => dispatch => {
  //loginData is an object {username:username, password:password}
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

<<<<<<< HEAD
const logout = () => dispatch => {
=======
const logout = loginData => dispatch => {
>>>>>>> 79d39ebed01117b37ca4d1c14db84f3da285261d
  dispatch({
    type: LOGOUT
  });

<<<<<<< HEAD
  return fetch(url + "/logout", {})
=======
  return fetch(url + "/logout", {
    headers: {
      Authorization: `Bearer ${loginData.token}`
    }
  })
>>>>>>> 79d39ebed01117b37ca4d1c14db84f3da285261d
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGOUT_FAIL, payload: err.message })
      );
    });
}

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};

<<<<<<< HEAD
export const logoutLoggedInUser = () => dispatch => {
  return dispatch(logout()).then(() => dispatch(push("/")));
=======
export const logoutLoggedInUser = loginData => dispatch => {
  return dispatch(logout(loginData)).then(() => dispatch(push("/")));
>>>>>>> 79d39ebed01117b37ca4d1c14db84f3da285261d
}