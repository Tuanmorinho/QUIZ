import React, { useState } from 'react';
import '../../Css/RegisterPage.css';
import { NavbarLogo } from '../../resrouces/Img';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Popup from '../Popup/NotiPopup/Popup';

function RegisterPage() {

    const [fullName, setFullName] = useState('');
    const [studentCode, setStudentCode] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [checkedGender, setCheckedGender] = useState(1);
    const [checkedRole, setCheckedRole] = useState(0);

    const [triggerPopup, setTriggerPopup] = useState(false);

    let history = useHistory();

    // Cần API để xác thực thông tin điền vào đã tồn tại hay chưa

    const handleRegister = () => {
        if (isEmpty(fullName) && isEmpty(studentCode) && isEmpty(dateOfBirth) && isEmpty(address) && isEmpty(email) && isEmpty(newUsername) && isEmpty(newPassword)) {

            localStorage.clear();
            localStorage.setItem("us", newUsername);
            localStorage.setItem("ps", newPassword);

            history.replace('/');
        } else {
            // alert('Please enter full information!');
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
                <p style={{ 'fontSize': 19 }}>Vui lòng điền đầy đủ thông tin đăng ký tài khoản!</p>
            </Popup>
            <div className="auth-form3">
                <div className="auth-form-broad3">
                    <div className="auth-form-header3">
                        <a href="/">
                            <img src={NavbarLogo} alt='............' />
                        </a>
                        <h1 className="auth-form-heading3">Đăng ký tài khoản QUIZ</h1>
                    </div>
                    <div className="auth-form-form3">
                        <div className="auth-form-group3">
                            <div className="auth-form-label3">
                                <label>Thông tin sinh viên</label>
                            </div>
                            <div className="auth-form-input3">
                                <span className="material-icons icon-register3"> person </span>
                                <input
                                    type="text"
                                    className="Register_input3"
                                    spellCheck="false"
                                    placeholder="Họ tên sinh viên"
                                    onChange={(e) => { setFullName(e.target.value) }}
                                />
                            </div>
                            <div className="auth-form-input3">
                                <span className="material-icons icon-register3"> vpn_key </span>
                                <input
                                    type="text"
                                    className="Register-input3"
                                    spellCheck="false"
                                    placeholder="Mã số sinh viên"
                                    onChange={(e) => { setStudentCode(e.target.value) }}
                                />
                            </div>
                            <div className="auth-form-input3">
                                <span className="material-icons icon-register3"> event </span>
                                <input
                                    type="text"
                                    className="Register-input3"
                                    spellCheck="false"
                                    placeholder="Ngày sinh"
                                    onChange={(e) => { setDateOfBirth(e.target.value) }}
                                />
                            </div>
                            <div className="auth-form-input3">
                                <span className="material-icons icon-register3"> home </span>
                                <input
                                    type="text"
                                    className="Register-input3"
                                    spellCheck="false"
                                    placeholder="Địa chỉ"
                                    onChange={(e) => { setAddress(e.target.value) }}
                                />
                            </div>
                            <div className="inputRadio">
                                <div className="inputRadio_wrapper">
                                    <input
                                        type="radio"
                                        checked={checkedGender === 1}
                                        onChange={() => { setCheckedGender(1) }}
                                    /><label>Giới tính nam</label>
                                </div>
                                <div className="inputRadio_wrapper">
                                    <input
                                        type="radio"
                                        checked={checkedGender === 0}
                                        onChange={() => { setCheckedGender(0) }}
                                    /><label>Giới tính nữ</label>
                                </div>
                            </div>
                        </div>
                        <div className="auth-form-group3">
                            <div className="auth-form-label3">
                                <label>Thông tin đăng nhập</label>
                            </div>
                            <div className="auth-form-input3">
                                <span className="material-icons icon-register3"> alternate_email </span>
                                <input
                                    type="text"
                                    className="Register-input3"
                                    spellCheck="false"
                                    placeholder="Email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div className="auth-form-input3">
                                <span className="material-icons icon-register3"> person </span>
                                <input
                                    type="text"
                                    className="Register-input3"
                                    spellCheck="false"
                                    placeholder="Tên đăng nhập mới"
                                    onChange={(e) => { setNewUsername(e.target.value) }}
                                />
                            </div>
                            <div className="auth-form-input3">
                                <span className="material-icons icon-register3"> lock </span>
                                <input
                                    type="text"
                                    className="Register-input3"
                                    spellCheck="false"
                                    placeholder="Mật khẩu"
                                    onChange={(e) => { setNewPassword(e.target.value) }}
                                />
                            </div>
                            <div className="inputRadio">
                                <div className="inputRadio_wrapper">
                                    <input
                                        type="radio"
                                        checked={checkedRole === 0}
                                        onChange={() => { setCheckedRole(0) }}
                                    /><label>Sinh viên</label>
                                </div>
                                <div className="inputRadio_wrapper">
                                    <input
                                        type="radio"
                                        checked={checkedRole === 1}
                                        onChange={() => { setCheckedRole(1) }}
                                    /><label>Giáo viên</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="form-submit3" onClick={handleRegister}>Đăng ký</button>
                    </div>
                    <div className="auth-form-aside3">
                        <h5 className="auth-form-policy-text3">
                            Bạn đã có tài khoản?&ensp;
                            <Link to="/login" className="auth-form-policy-link3">Đăng nhập</Link>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegisterPage
