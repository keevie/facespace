import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app_container';


const Root = ({ store }) => {

  const isLoggedIn = () => {
    return !!store.getState().session.currentUser;
  };

  return (
    <Provider store = {store}>
      <Router history = { hashHistory }>
        <Route path = '/' component = { App } >
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
