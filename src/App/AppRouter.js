import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CoverPage from '../Component/CoverPage';
import TestingPage from '../Component/TestingPage/TestingPage';
import PageNotFound from '../Component/PageNotFound';
import { RefreshRoute } from '../Route/RefreshRoute';
import { LoginRoute } from '../Route/LoginRoutes';

function AppRouter() {
  return (
    <Router>
      <Switch>

        <Route exact path='/' render={() => {
          if (localStorage.getItem("us") !== null && localStorage.getItem("ps") !== null) {
            return <Redirect to='/home' />
          } else {
            return <CoverPage />
          }
        }} />

        <Route exact path='/cover' render={() => {
          if (localStorage.getItem("us") !== null && localStorage.getItem("ps") !== null) {
            return <Redirect to='/' />
          } else {
            return <CoverPage />
          }
        }} />

        <RefreshRoute path='/home' />
        <RefreshRoute path='/exam' />
        <RefreshRoute path='/grade' />
        <RefreshRoute path='/join' />
        <RefreshRoute path='/account' />

        <LoginRoute path='/login' />
        <LoginRoute path='/register' />

        <Route exact path="/test/:id" component={TestingPage} />

        <Route path="*" component={PageNotFound} />

      </Switch>
    </Router>
  )
}

export default AppRouter;
