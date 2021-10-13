import React from 'react'
import '../../Css/LogRes.css'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

function LogRes() {
    return (
        <div class="auth-form">
            <LoginPage />
            <RegisterPage />
        </div>
    )
}

export default LogRes
