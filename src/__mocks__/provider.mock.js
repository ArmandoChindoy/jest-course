import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import reducer from '../reducers';
import initialState from '../initialState';

const store = createStore(reducer, initialState);

const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

module.exports = ProviderMock;
