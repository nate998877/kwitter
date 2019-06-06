import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const GET_USERS                 = "GET_USERS";
export const GET_USERS_SUCCESS         = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL            = "GET_USERS_FAIL";
export const GET_USER                  = "GET_USER";
export const GET_USER_SUCCESS          = "GET_USER_SUCCESS";
export const GET_USER_FAIL             = "GET_USER_FAIL";
export const GET_USER_PHOTO            = "GET_USER_PHOTO";
export const GET_USER_PHOTO_SUCCESS    = "GET_USER_PHOTO_SUCCESS";
export const GET_USER_PHOTO_FAIL       = "GET_USER_PHOTO_FAIL";
export const CREATE_USER               = "CREATE_USER";
export const CREATE_USER_SUCCESS       = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL          = "CREATE_USER_FAIL";
export const UPDATE_USER_PHOTO         = "UPDATE_USER_PHOTO";
export const UPDATE_USER_PHOTO_SUCCESS = "UPDATE_USER_PHOTO_SUCCESS";
export const UPDATE_USER_PHOTO_FAIL    = "UPDATE_USER_PHOTO_FAIL";
export const UPDATE_USER               = "UPDATE_USER";
export const UPDATE_USER_SUCCESS       = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL          = "UPDATE_USER_FAIL";
export const DELETE_USER               = "DELETE_USER";
export const DELETE_USER_SUCCESS       = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL          = "DELETE_USER_FAIL";




const url = domain + "/auth";

// action creators
const login = loginData => dispatch => {
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
