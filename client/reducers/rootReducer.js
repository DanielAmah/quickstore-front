import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';
import categoriesReducer from './categoriesReducer';


const rootReducer = combineReducers({
form: formReducer,
auth: authReducer,
signUpReducer,
categoriesReducer
});

export default rootReducer;