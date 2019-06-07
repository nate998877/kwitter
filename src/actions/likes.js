import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LIKE = "LIKE";
export const LIKE_SUCCESS = "LIKE_SUCCESS";
export const LIKE_FAIL = "LIKE_FAIL";
export const UNLIKE = "UNLIKE";
export const UNLIKE_SUCCESS = "UNLIKE_SUCCESS";
export const UNLIKE_FAIL = "UNLIKE_FAIL";


const url = domain + "/likes";

// action creators
const like = likeData => dispatch => {
  //likeData is an object {messageId:messageId}
  dispatch({
    type: LIKE
  });

  return fetch(url, {
    method: "POST",
<<<<<<< HEAD
    headers: jsonHeaders,
=======
    headers: {
      Authorization: `Bearer ${likeData.token}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
>>>>>>> 79d39ebed01117b37ca4d1c14db84f3da285261d
    body: JSON.stringify(likeData)
  })
    .then(handleJsonResponse)
    .then(result => {
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

const unlike = likeData => dispatch => {
  //likeData is an object {id:likeId} likeids have to be retrieved from a message object
  dispatch({
    type: UNLIKE
  });

  return fetch(url + "/" + likeData.id, {
<<<<<<< HEAD
    method: "DELETE"
=======
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${likeData.token}`
    }
>>>>>>> 79d39ebed01117b37ca4d1c14db84f3da285261d
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UNLIKE_SUCCESS,
        payload: result //OK
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UNLIKE_FAIL, payload: err.message })
      );
    });
};

export const likePost = likeData => dispatch => {
  return dispatch(like(likeData))
};

export const unlikePost = likeData => dispatch => {
  return dispatch(unlike(likeData))
};