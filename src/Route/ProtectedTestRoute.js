import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TestingPage from '../Component/TestingPage/TestingPage';
import APP_CONSTANTS from '../Constants/appConstants'

export const ProtectedTestRoute = (procTestPath) => {
    console.log(procTestPath);
    return (
        <Route exact path={procTestPath.location.pathname} render={() => {
            if (localStorage.getItem(APP_CONSTANTS.USER_TOKEN)) {
                return <TestingPage />               
            } else {
                return <Redirect to='/cover' />
            }
        }} />
    )
}