import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../Component/LoginRegisterPage/LoginPage';
import RegisterPage from '../Component/LoginRegisterPage/RegisterPage';
import PageNotFound from '../Component/PageNotFound';

export const LoginRoute = (logPath) => {
    return (
        <Route exact path={logPath.path} render={() => {
            if (localStorage.getItem("us") === null && localStorage.getItem("ps") === null) {
                return logPath.path === '/login' ? <LoginPage /> : <RegisterPage />
            } else {
                return <PageNotFound />
            }
        }} />
    )
}