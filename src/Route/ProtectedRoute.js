import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CoverPage from '../Component/CoverPage';
import PageNotFound from '../Component/PageNotFound';
import APP_CONSTANTS from '../Constants/appConstants'

export const ProtectedRoute = (procPath) => {
    return (procPath.location.pathname === "/" || procPath.location.pathname === '/cover') ? (
        <Route exact path={procPath.location.pathname} render={() => {
            if (localStorage.getItem(APP_CONSTANTS.USER_TOKEN)) {
                if (procPath.location.pathname === '/') {
                    return <Redirect to='/home' />
                }
                if (procPath.location.pathname === '/cover') {
                    return <Redirect to='/' />
                } else {
                    return <PageNotFound />
                }
            } else {
                return <CoverPage />
            }
        }} />
    ) : (
        <Route path="*" component={PageNotFound} />
    )
}