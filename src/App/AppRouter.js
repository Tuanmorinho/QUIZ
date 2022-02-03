import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { RefreshRoute } from '../Route/RefreshRoute';
import { LoginRoute } from '../Route/LoginRoute';
import { ProtectedRoute } from '../Route/ProtectedRoute';
import { ProtectedTestRoute } from '../Route/ProtectedTestRoute';

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

        <ProtectedTestRoute path="/test/:id" />

        <ProtectedRoute path='/' />
        <ProtectedRoute path='/cover' />

      </Switch>
    </Router>
  )
}

export default AppRouter;
