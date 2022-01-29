import React, { useState } from 'react';
import '../../Css/LoginPage.css';
import { NavbarLogo } from '../../resrouces/Img';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Popup from '../Popup/NotiPopup/Popup';

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [triggerPopup, setTriggerPopup] = useState(false);

    let history = useHistory();

    const handleLogIn = () => {
        if (isEmpty(username) && isEmpty(password)) {
            // gọi api đăng nhập, lưu access token vào local storage
            localStorage.clear();

            localStorage.setItem("us", username);
            localStorage.setItem("ps", password);


            history.replace('/');
        } else {
            setTriggerPopup(true);
        }
    }

    const isEmpty = (needCheck) => {
        return (needCheck !== '' && needCheck.length !== 0) ? true : false
    }


    return (
        <React.Fragment>
            <Popup trigger={triggerPopup} setTrigger={setTriggerPopup}>
                <div style={{
                    'display': 'flex',
                    'alignItems': 'center'
                }}>
                    <span className="material-icons" style={{
                        'color': '#77ACF1',
                        'fontSize': 38
                    }}> info</span>
                    <h1 style={{
                        'fontSize': 24,
                        'marginLeft': 10,
                        'marginTop': 2.5
                    }}>Thông báo</h1>
                </div>
                <p style={{ 'fontSize': 19 }}>Vui lòng điền đầy đủ thông tin đăng nhập!</p>
            </Popup>
            <div className="auth-form2">
                <div className="auth-form-broad2">
                    <div className="auth-form-header2">
                        <a href="/">
                            <img src={NavbarLogo} alt='........' />
                        </a>
                        <h1 className="auth-form-heading2">Đăng nhập vào QUIZ</h1>
                    </div>
                    <div className="auth-form-form2">
                        <div className="auth-form-group2">
                            <div className="auth-form-input2">
                                <span className="material-icons icon-login2"> person </span>
                                <input
                                    type="text"
                                    className="Login-input2"
                                    spellCheck="false"
                                    placeholder="Tên đăng nhập"
                                    onChange={(e) => { setUsername(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="auth-form-group2">
                            <div className="auth-form-input2">
                                <span className="material-icons icon-login2"> lock </span>
                                <input
                                    type="text"
                                    className="Login-input2"
                                    spellCheck="false"
                                    placeholder="Mật khẩu"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                        </div>
                        <button type="submit" className="form-submit2" onClick={handleLogIn}>Đăng nhập</button>
                    </div>
                    <div className="auth-form-aside2">
                        <h5 className="auth-form-policy-text2">
                            Bạn chưa có tài khoản?&ensp;
                            <Link to="/register" className="auth-form-policy-link2">Đăng ký</Link>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage
