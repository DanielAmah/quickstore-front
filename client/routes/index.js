import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Login from '../components/login/login.jsx';

export default () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path ="/login" component={Login} />
  </Switch>
  </BrowserRouter>
)