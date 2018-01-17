import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';


const rootReducer = combineReducers({
form: formReducer,
auth: authReducer,
signUpReducer
});

export default rootReducer;