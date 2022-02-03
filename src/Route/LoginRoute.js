import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../Component/LoginRegisterPage/LoginPage';
import RegisterPage from '../Component/LoginRegisterPage/RegisterPage';
import PageNotFound from '../Component/PageNotFound';
import APP_CONSTANTS from '../Constants/appConstants'

export const LoginRoute = (logPath) => {
    return (
        <Route exact path={logPath.path} render={() => {
            if (!localStorage.getItem(APP_CONSTANTS.USER_TOKEN)) {
                return logPath.path === '/login' ? <LoginPage /> : <RegisterPage />
            } else {
                return <PageNotFound />
            }
        }} />
    )
}