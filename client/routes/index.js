import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Auth from '../components/auth/Auth.jsx';

export default () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path ="/auth" component={Auth} />
  </Switch>
  </BrowserRouter>
)