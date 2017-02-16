import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app_container';
import Wall from './wall';


const Root = ({ store }) => {

  const isLoggedIn = () => {
    return !!store.getState().session.currentUser;
  };

  return (
    <Provider store = {store}>
      <Router history = { browserHistory }>
        <Route path = '/' component = { App } >
          <Route path = '/:profile_url' component = { Wall } />
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
