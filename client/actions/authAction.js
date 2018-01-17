import axios from 'axios';
import {reset} from 'redux-form';


export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

import { 
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
}
from '../actions/types';

// export function authError(CONST, error) {
//   return {
//     type: CONST,
//     payload: error,
//   };
// }


const URL = 'https://quickstore-dev.herokuapp.com';

export function register(props) {
  return function (dispatch) {
    axios.post(`${URL}/auth/register`, props)
      .then((response) => {
        dispatch({ type: SIGNUP_SUCCESS,
        payload: response.data });
        dispatch(reset('register'));
      })
      .catch(error => dispatch({
        type: SIGNUP_FAILURE,
        payload: error.response
      }));
  }
}



export function loginAction({ email, password }, history) {
  return (dispatch) => { 
      axios.post(`${URL}/auth/login`, { email, password })
      .then((res)=>{
        localStorage.setItem('user', res.data.access_token);
        dispatch({ type: AUTHENTICATED });

      })
      .catch((error)=>{
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid email or password'
        });
      })
  };
}