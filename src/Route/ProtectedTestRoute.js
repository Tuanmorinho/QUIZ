import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TestingPage from '../Component/TestingPage/TestingPage';
import APP_CONSTANTS from '../Constants/appConstants'

export const ProtectedTestRoute = (props) => {
    return (
        <Route exact path={props.location.pathname} render={() => {
            if (localStorage.getItem(APP_CONSTANTS.USER_TOKEN)) {
                return <TestingPage getLocation={props.getLocation} />               
            } else {
                return <Redirect to='/cover' />
            }
        }} />
    )
}