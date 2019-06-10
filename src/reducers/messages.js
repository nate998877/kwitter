import { 
GET_MESSAGES,
GET_MESSAGES_SUCCESS,
GET_MESSAGES_FAIL,
GET_MESSAGE,
GET_MESSAGE_SUCCESS,
GET_MESSAGE_FAIL,
CREATE_MESSAGE,
CREATE_MESSAGE_SUCCESS,
CREATE_MESSAGE_FAIL,
DELETE_MESSAGE,
DELETE_MESSAGE_SUCCESS,
DELETE_MESSAGE_FAIL,
} from "../actions";



const initialState = {
  messageLoading: false,
  message: null,
  messageError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        getMessagesLoading: true,
        getMessagesError: null
      };
    case GET_MESSAGES_SUCCESS:
      return { ...state, getMessages: action.payload, getMessagesLoading: false };
    case GET_MESSAGES_FAIL:
      return { ...state, getMessagesError: action.payload, getMessagesLoading: false };
      
    case GET_MESSAGE:
      return {
        ...state,
        getMessageLoading: true,
        getMessageError: null
      };
    case GET_MESSAGE_SUCCESS:
      return { ...state, getMessage: action.payload, getMessageLoading: false };
    case GET_MESSAGE_FAIL:
        return { ...state, getMessageError: action.payload, getMessageLoading: false };
      
    case CREATE_MESSAGE:
      return {
        ...state,
        createMessageLoading: true,
        createMessageError: null
      };
    case CREATE_MESSAGE_SUCCESS:
      return { ...state, createMessage: action.payload, createMessageLoading: false };
    case CREATE_MESSAGE_FAIL:
      return { ...state, createMessageError: action.payload, createMessageLoading: false };

    case DELETE_MESSAGE:
      return {
        ...state,
        deleteMessageLoading: true,
        deleteMessageError: null
      };
    case DELETE_MESSAGE_SUCCESS:
      return { ...state, deleteMessage: action.payload, deleteMessageLoading: false };
    case DELETE_MESSAGE_FAIL:
      return { ...state, deleteMessageError: action.payload, deleteMessageLoading: false };
      

    default:
      return state;
  }
};
