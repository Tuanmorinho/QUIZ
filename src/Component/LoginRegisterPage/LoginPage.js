import React from 'react'
import '../../Css/LoginPage.css'

function LoginPage() {
    return (
        <div class="auth-form_broad">
            <div class="auth-form_header">
                <a href="../HomePage/HomePage.html">
                    <img src="../asset/LogoHeading.png" />
                </a>
                <h1 class="auth-form_heading">Đăng nhập vào QUIZ</h1>
            </div>
            <div class="auth-form_form">
                <div class="auth-form_group">
                    <div class="auth-form_input">
                        <span class="material-icons icon-login"> person </span>
                        <input type="text" class="Login_input" spellcheck="false" placeholder="Tên đăng nhập" />
                    </div>
                </div>
                <div class="auth-form_group">
                    <div class="auth-form_input">
                        <span class="material-icons icon-login"> lock </span>
                        <input type="text" class="Login_input" spellcheck="false" placeholder="Mật khẩu" /> 
                    </div>
                </div>
                <button type="submit" class="form-submit">Đăng nhập</button>
            </div>
            <div class="auth-form_aside">
                <h5 class="auth-form_policy-text ">
                    Bạn chưa có tài khoản?
                    <a href="../RegisterPage/RegisterPage.html" class="auth-form_policy-link ">Đăng ký</a>
                </h5>
            </div>
        </div>
    )
}

export default LoginPage
