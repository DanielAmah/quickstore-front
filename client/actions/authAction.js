import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = 'https://quickstore-dev.herokuapp.com';

export function loginAction({ email, password }, history) {
  return (dispatch) => {
    // try {
    //   const res = await 
      axios.post(`${URL}/auth/login`, { email, password })
      .then((res)=>{
        localStorage.setItem('user', res.data.access_token);
        dispatch({ type: AUTHENTICATED });
        // history.push('/secret');
      })
      .catch((error)=>{
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid email or password'
        });
      })

    // } catch(error) {
    // }
  };
}