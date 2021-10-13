import React from 'react'
import '../../Css/RegisterPage.css'

function RegisterPage() {
    return (
        <div class="auth-form_broad">
            <div class="auth-form_header">
                <a href="../HomePage/HomePage.html">
                    <img src="../asset/LogoHeading.png" />
                </a>
                <h1 class="auth-form_heading">Đăng ký tài khoản QUIZ</h1>
            </div>
            <div class="auth-form_form">
                <div class="auth-form_group">
                    <div class="auth-form_label">
                        <label>Thông tin sinh viên</label>
                    </div>
                    <div class="auth-form_input">
                        <span class="material-icons icon-register"> person </span>
                        <input type="text" class="Register_input" spellcheck="false" placeholder="Họ tên sinh viên" />
                    </div>
                    <div class="auth-form_input">
                        <span class="material-icons icon-register"> vpn_key </span>
                        <input type="text" class="Register_input" spellcheck="false" placeholder="Mã số sinh viên" />
                    </div>
                </div>
                <div class="auth-form_group">
                    <div class="auth-form_label">
                        <label>Thông tin đăng nhập</label>
                    </div>
                    <div class="auth-form_input">
                        <span class="material-icons icon-register"> person </span>
                        <input type="text" class="Register_input" spellcheck="false" placeholder="Tên đăng nhập mới" />
                    </div>
                    <div class="auth-form_input">
                        <span class="material-icons icon-register"> lock </span>
                        <input type="text" class="Register_input" spellcheck="false" placeholder="Mật khẩu" />
                    </div>
                </div>
                <button type="submit" class="form-submit">Đăng nhập</button>
            </div>
            <div class="auth-form_aside">
                <h5 class="auth-form_policy-text ">
                    Bạn đã có tài khoản?
                    <a href="../LoginPage/LoginPage.html" class="auth-form_policy-link ">Đăng nhập</a>
                </h5>
            </div>
        </div>
    )
}

export default RegisterPage
