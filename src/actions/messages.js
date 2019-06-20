import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {getUser} from "./users"
// action types
export const GET_MESSAGES            = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS    = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAIL       = "GET_MESSAGES_FAIL";
export const GET_MESSAGE             = "GET_MESSAGE";
export const GET_MESSAGE_SUCCESS     = "GET_MESSAGE_SUCCESS";
export const GET_MESSAGE_FAIL        = "GET_MESSAGE_FAIL";
export const CREATE_MESSAGE          = "CREATE_MESSAGES";
export const CREATE_MESSAGE_SUCCESS  = "CREATE_MESSAGES_SUCCESS";
export const CREATE_MESSAGE_FAIL     = "CREATE_MESSAGES_FAIL";
export const DELETE_MESSAGE          = "DELETE_MESSAGE";
export const DELETE_MESSAGE_SUCCESS  = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAIL     = "DELETE_MESSAGE_FAIL";



const url = domain + "/messages";

// action creators
export const getMessages = messageData => dispatch => {
  console.log('get Messages is running');
  //messageData should be an object with {limit:limit, offset:offset}
  dispatch({
    type: GET_MESSAGES
  });

  const limit = messageData.limit ? `limit=${messageData.limit}`: "" 
  const offset = messageData.offset ? `offset=${messageData.offset}`: ""
  const userId = messageData.userId ? `userId=${messageData.userId}`: ""
  const renderArr = [limit, offset, userId]
  let createdUrl = url+'?'
  for(let item of renderArr){
    if(item){
      createdUrl = createdUrl+item+"&"
    }
  }

  return fetch(createdUrl)
    .then(handleJsonResponse)
    .then(result => {
      return Promise.all(
        result.messages.map(message => {
        return dispatch(getUser({userId: message.userId}))}
      )).then(usersResult => {
        usersResult.forEach((action, i )=> {
          const message = result.messages[i]
          message.pictureLocation = action.payload.user.pictureLocation
          message.username = action.payload.user.username
        })
        return dispatch({
          type: GET_MESSAGES_SUCCESS,
          payload: result
        });
      }
      )
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_MESSAGES_FAIL, payload: err.message })
      );
    });
};

const getMessage = messageData => dispatch => {
  //messageData should be an object containing {id:messageId}
  dispatch({
    type: GET_MESSAGE
  });

  return fetch(url+"/"+messageData.id)
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_MESSAGE_FAIL, payload: err.message })
      );
    });
};

const createMessage = messageData => dispatch => {
  //messageData should be an object with {text:text}
  dispatch({
    type: CREATE_MESSAGE
  });

  return fetch(url, {
    method: "POST",
    headers: {...jsonHeaders, Authorization: `Bearer ${messageData.token}`},
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATE_MESSAGE_FAIL, payload: err.message })
      );
    });
};

const deleteMessage = messageData => dispatch => {
  //messageData is an object {id:messageid}
  dispatch({
    type: DELETE_MESSAGE
  });

  return fetch(url+'/'+messageData.id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${messageData.token}`
    }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETE_MESSAGE_FAIL, payload: err.message })
      );
    });
};

export const getMessagesAction = messageData => dispatch => {
  return dispatch(getMessages(messageData))
};
export const getMessageAction = messageData => dispatch => {
  return dispatch(getMessage(messageData))
};
export const createMessageAction = messageData => dispatch => {
  return dispatch(createMessage(messageData))
};
export const deleteMessageAction = messageData => dispatch => {
  return dispatch(deleteMessage(messageData))
};
 