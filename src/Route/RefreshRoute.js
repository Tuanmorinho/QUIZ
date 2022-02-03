import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import StudentApp from '../App/StudentApp';
import APP_CONSTANTS from '../Constants/appConstants'

export const RefreshRoute = (refreshPath) => {
    return (
        <Route exact path={refreshPath.path} render={() => {
            if (localStorage.getItem(APP_CONSTANTS.USER_TOKEN)) {
                return <StudentApp />
            } else {
                return <Redirect to='/cover' />
            }
        }} />
    )
}