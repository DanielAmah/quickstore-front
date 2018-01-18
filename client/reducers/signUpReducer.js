import {  SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types/index';

export default function(state={
  registered:false,
  signUpMessage:'',
  error:{}
}, action) {
  switch(action.type) {
    case SIGNUP_SUCCESS:
      return { 
        ...state, 
        registered: true, 
        signUpMessage:action.payload.message,
        error: {} 
      };
    case SIGNUP_FAILURE:
      return { 
        ...state, 
        registered: false, 
        signUpMessage:'',
        error: 
      action.payload.data
      };
      default:
      return state;
  }
  return state;
}