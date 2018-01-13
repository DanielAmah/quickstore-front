import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AUTHENTICATED } from './actions/authAction';

import Auth from './components/auth/Auth.jsx';
import Secret from './components/Secret.jsx';
import App from './components/App.jsx';
import Home from './components/Home.jsx';

import reducers from './reducers/rootReducer';
import requireAuth from './components/hoc/RequireAuth.jsx';
import noRequireAuth from './components/hoc/NoRequireAuth.jsx';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/auth" component={noRequireAuth(Auth)} />
    <Route path="/signout" component={requireAuth(Home)} />
    <Route path="/secret" component={requireAuth(Home)} />
  </div>
  </Router>
  </Provider>,
  document.querySelector('#root')
);