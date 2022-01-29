import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import App from '../App/App';

export const RefreshRoute = (refreshPath) => {
    return (
        <Route exact path={refreshPath.path} render={() => {
            if (localStorage.getItem("us") !== null && localStorage.getItem("ps") !== null) {
                return <App />
            } else {
                return <Redirect to='/cover' />
            }
        }} />
    )
}