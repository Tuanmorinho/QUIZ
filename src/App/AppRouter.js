import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CoverPage from '../Component/CoverPage';
import TestingPage from '../Component/TestingPage/TestingPage';
import PageNotFound from '../Component/PageNotFound';
import { RefreshRoute } from '../Route/RefreshRoute';
import { LoginRoute } from '../Route/LoginRoute';
import { ProtectedRoute } from '../Route/ProtectedRoute';
import APP_CONSTANTS from '../Constants/appConstants';

function AppRouter() {
  return (
    <Router>
      <Switch>

        <RefreshRoute path='/home' />
        <RefreshRoute path='/exam' />
        <RefreshRoute path='/grade' />
        <RefreshRoute path='/join' />
        <RefreshRoute path='/account' />

        <LoginRoute path='/login' />
        <LoginRoute path='/register' />

        <ProtectedRoute path='/' />
        <ProtectedRoute path='/cover' />

        <Route exact path="/test/:id" component={TestingPage} />

      </Switch>
    </Router>
  )
}

export default AppRouter;
