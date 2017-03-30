import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Notification from './pages/Notification';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import './App.scss';

const app = document.getElementById('app');
const token = localStorage.getItem('token');

function redirectLogin(nextState, replace) {
  if (!token) {
    replace('/login');
  }
}

function redirectDashboard(nextState, replace) {
  if (token) {
    replace('/dashboard');
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="login" component={Login} onEnter={redirectDashboard} />
      <Route path="/" component={Layout} onEnter={redirectLogin}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="notification" component={Notification} />
        <Route path="ranking" component={Ranking} />
      </Route>
    </Router>
  </Provider>, app);
