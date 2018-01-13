import {UNAUTHENTICATED} from './authAction';

export function signOutAction() {
  return dispatch=>{
    localStorage.clear();
    dispatch({
      type: UNAUTHENTICATED
    });
  }
}