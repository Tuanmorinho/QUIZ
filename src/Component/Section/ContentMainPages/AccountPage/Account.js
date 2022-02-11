import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../../../Css/Account.css';
import StudentApi from '../../../../API/studentApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';
import NotiPopup from '../../../Popup/NotiPopup/NotiPopup';
import NotiSuccessPopup from '../../../Popup/NotiPopup/NotiSuccessPopup';
import ErrorPopup from '../../../Popup/ErrorPopup/ErrorPopup';

function Account({ getLocation }) {

    const [account, setAccount] = useState({
        'fullname': '',
        'studentCode': '',
        'username': '',
        'password': ''
    });

    const [fullName, setFullName] = useState("");
    const [studentCode, setStudentCode] = useState("");
    const [newEmail, setNewEmail] = useState("")
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [triggerNotiPopup, setTriggerNotiPopup] = useState(false);
    const [triggerErrorPopup, setTriggerErrorPopup] = useState(false);
    const [triggerSuccessPopup, setTriggerSuccessPopup] = useState(false);

    let callbackFetchProfile = useRef(null);

    let location = useLocation();
    useEffect(() => {
        getLocation(location.pathname);

        const fetchProfile = async () => {
            try {
                const response = await StudentApi.getProfile();
                if (response) {
                    const userInfor = {
                        'fullname': response.fullname,
                        'studentCode': response.studentCode,
                        'username': response.username,
                        'password': response.password
                    }
                    localStorage.removeItem(APP_CONSTANTS.USER_BASIC_INFOR_A);
                    localStorage.setItem(APP_CONSTANTS.USER_BASIC_INFOR_A, JSON.stringify(userInfor));
                    setAccount(userInfor);
                }
            } catch (error) {
                console.log('Get profile error', error);
            }
        }

        fetchProfile();
    }, [getLocation, location.pathname, callbackFetchProfile.current]);

    const handleSubmit = async () => {
        if (isNotEmpty(account.fullname) && isNotEmpty(account.studentCode) && isNotEmpty(account.username) && isNotEmpty(account.password)) {
            const paramEditProfile = {
                "studentCode": studentCode,
                "fullname": fullName,
                "email": newEmail,
                "username": newUsername,
                "password": newPassword,
                "role": "student"
            }
            try {
                const response = await StudentApi.editProfile(paramEditProfile);
                if (response && response.code === 0) {
                    setTriggerSuccessPopup(true);
                    setTimeout(() => {
                        callbackFetchProfile.current = callbackFetchProfile.current + 1;
                        setTriggerSuccessPopup(false);
                        
                    }, 1200);
                } else {
                    setTriggerErrorPopup(true);
                }
            } catch (error) {
                console.log('error login: ', error);
                setTriggerErrorPopup(true);
            }
        } else {
            setTriggerNotiPopup(true);
        }
    }

    const displayInfor = () => {
        if ((localStorage.getItem(APP_CONSTANTS.USER_BASIC_INFOR_A))) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.USER_BASIC_INFOR_A));
        } else {
            return account;
        }
    }

    const isNotEmpty = (needCheck) => {
        return (needCheck !== '' && needCheck.length !== 0) ? true : false
    }

    return (
        <React.Fragment>
            <NotiPopup trigger={triggerNotiPopup} setTrigger={setTriggerNotiPopup}>
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
                <p style={{ 'fontSize': 19 }}>Vui lòng điền đầy đủ thông tin.</p>
            </NotiPopup>
            <ErrorPopup trigger={triggerErrorPopup} setTrigger={setTriggerErrorPopup}>
                <div style={{
                    'display': 'flex',
                    'alignItems': 'center'
                }}>
                    <span className="material-icons" style={{
                        'color': '#FC4F4F',
                        'fontSize': 38
                    }}> error </span>
                    <h1 style={{
                        'fontSize': 24,
                        'marginLeft': 10,
                        'marginTop': 2.5
                    }}>Lỗi</h1>
                </div>
                <p style={{ 'fontSize': 19 }}>Lỗi cập nhập thông tin tài khoản, vui lòng thử lại.</p>
            </ErrorPopup>
            <NotiSuccessPopup trigger={triggerSuccessPopup} setTrigger={setTriggerSuccessPopup}>
                <div style={{
                    'display': 'flex',
                    'alignItems': 'center'
                }}>
                    <span className="material-icons" style={{
                        'color': '#1AAD8A',
                        'fontSize': 38
                    }}> verified </span>
                    <h1 style={{
                        'fontSize': 24,
                        'marginLeft': 10,
                        'marginTop': 2.5
                    }}>Thành công</h1>
                </div>
                <p style={{ 'fontSize': 19 }}>Lưu thông tin tài khoản thành công.</p>
            </NotiSuccessPopup>
            <div className="auth-form4">
                <div className="auth-form_broad4">
                    <div className="auth-form_header4">
                        <h1 className="auth-form_heading4">Tài khoản của tôi</h1>
                    </div>
                    <div className="auth-form-item4">
                        <span className="material-icons account_circle2"> account_circle </span>
                        <div className="auth-form_infor4">
                            <h4 className="auth-form_name4">{displayInfor().fullname}</h4>
                            <label>@{displayInfor().studentCode}</label>
                        </div>
                    </div>
                    <div className="auth-form_form4">
                        <div className="auth-form_group4">
                            <div className="auth-form_label4">
                                <label>Thông tin cá nhân</label>
                            </div>
                            <div className="auth-form_input_wrapper4">
                                <label for="Hoten">Họ tên</label>
                                <div className="auth-form_input4">
                                    <span className="material-icons icon-accountMe"> person </span>
                                    <input
                                        type="text"
                                        className="Register_input4"
                                        spellCheck="false"
                                        placeholder="Họ tên sinh viên"
                                        defaultValue={account.fullname}
                                        onChange={(e) => setAccount(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="auth-form_input_wrapper4">
                                <label for="MSSV">MSSV</label>
                                <div className="auth-form_input4">
                                    <span className="material-icons icon-accountMe"> vpn_key </span>
                                    <input type="text"
                                        className="Register_input4"
                                        spellCheck="false"
                                        placeholder="Mã số sinh viên"
                                        defaultValue={account.studentCode}
                                        onChange={(e) => setStudentCode(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="auth-form_group4">
                            <div className="auth-form_label4">
                                <label>Thông tin đăng nhập</label>
                            </div>
                            <div className="auth-form_input_wrapper4">
                                <label for="Username">Username</label>
                                <div className="auth-form_input4">
                                    <span className="material-icons icon-accountMe"> person </span>
                                    <input type="text"
                                        className="Register_input4"
                                        spellCheck="false"
                                        placeholder="Tên đăng nhập mới"
                                        defaultValue={account.username}
                                    />
                                </div>
                            </div>
                            <div className="auth-form_input_wrapper4">
                                <label for="Passwork">Passwork </label>
                                <div className="auth-form_input4">
                                    <span className="material-icons icon-accountMe"> lock </span>
                                    <input
                                        type="password"
                                        className="Register_input4"
                                        spellCheck="false"
                                        placeholder="Mật khẩu"
                                        defaultValue={account.password}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="form-submit4" onClick={() => handleSubmit()}>Sửa thông tin</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Account
