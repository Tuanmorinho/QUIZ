import React from 'react'
import '../Css/Navbar.css'
import { NavbarLogo } from './Img'

function Navbar() {
    return (
        // NavBar
        <div className="NavBar_wrapper">
            {/* NavBar_logo */}
            <div className="NavBar_logo">
                <a href="/">
                    <img src={NavbarLogo} alt='...' />
                </a>
                <h4 className="NavBar_logoHeading">Hệ thống thi trực tuyến</h4>
            </div>
            {/* Navbar_body */}
            <div className="NavBar_body hidden">
                <div>
                    <div className="Search_wrapper">
                        <span className="material-icons icon-search"> search </span>
                        <input className="Search_input" spellcheck="false" placeholder="Tìm kiếm bài thi" />
                    </div>
                </div>
            </div>
            {/* NavBar_actions */}
            <div className="NavBar_actions">
                <button className="loginButton">Đăng xuất</button>
                <button className="registerButton disable">Đăng nhập</button>
                <span className="material-icons account_circle"> account_circle </span>
            </div>
        </div>
    )
}

export default Navbar
