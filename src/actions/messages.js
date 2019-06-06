import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const GET_MESSAGES            = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS    = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAIL       = "GET_MESSAGES_FAIL";
export const GET_MESSAGE             = "GET_MESSAGE";
export const GET_MESSAGE_SUCCESS     = "GET_MESSAGE_SUCCESS";
export const GET_MESSAGE_FAIL        = "GET_MESSAGE_FAIL";
export const CREATE_MESSAGES         = "CREATE_MESSAGES";
export const CREATE_MESSAGES_SUCCESS = "CREATE_MESSAGES_SUCCESS";
export const CREATE_MESSAGES_FAIL    = "CREATE_MESSAGES_FAIL";
export const DELETE_MESSAGE          = "DELETE_MESSAGE";
export const DELETE_MESSAGE_SUCCESS  = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAIL     = "DELETE_MESSAGE_FAIL";



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
