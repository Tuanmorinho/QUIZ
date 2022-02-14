import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { RefreshRoute } from '../Route/RefreshRoute';
import { LoginRoute } from '../Route/LoginRoute';
import { ProtectedRoute } from '../Route/ProtectedRoute';

function AppRouter() {
  return (
    <Router>
      <Switch>

        <RefreshRoute path='/home' />
        <RefreshRoute path='/test' />
        <RefreshRoute path='/grade' />
        <RefreshRoute path='/join' />
        <RefreshRoute path='/account' />
        <RefreshRoute path='/testing' />

        <LoginRoute path='/login' />
        <LoginRoute path='/register' />

        <ProtectedRoute path='/' />
        <ProtectedRoute path='/cover' />

      </Switch>
    </Router>
  )
}

export default AppRouter;
