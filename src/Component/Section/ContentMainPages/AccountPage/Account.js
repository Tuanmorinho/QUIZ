import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../../../Css/Account.css';
import StudentApi from '../../../../API/studentApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';
import NotiPopup from '../../../Popup/NotiPopup/NotiPopup';
import NotiSuccessPopup from '../../../Popup/NotiPopup/NotiSuccessPopup';
import ErrorPopup from '../../../Popup/ErrorPopup/ErrorPopup';
import PopupLoading from '../../../Popup/PopupLoading/PopupLoading';

function Account({ getLocation }) {

    const [account, setAccount] = useState({
        'username': '',
        'password': '',
        'studentCode': '',
        'fullname': '',
        'dob': '',
        'address': '',
        'gender': '',
        'email': '',
        'role': 'student'
    });

    const [newFullname, setNewFullname] = useState("");
    const [newDob, setNewDob] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [checkedGender, setCheckedGender] = useState();

    const [triggerNotiPopup, setTriggerNotiPopup] = useState(false);
    const [triggerErrorPopup, setTriggerErrorPopup] = useState(false);
    const [triggerSuccessPopup, setTriggerSuccessPopup] = useState(false);
    const [triggerLoadingPopup, setTriggerLoadingPopup] = useState(false);

    let location = useLocation();
    useEffect(() => {
        getLocation(location.pathname);

        fetchProfile();
    }, [getLocation, location.pathname]);

    const fetchProfile = async () => {
        setTriggerLoadingPopup(true);
        try {
            const response = await StudentApi.getProfile();
            if (response) {
                setTriggerLoadingPopup(false);
                const userInfor = {
                    'username': response.username,
                    'password': response.password,
                    'studentCode': response.studentCode,
                    'fullname': response.fullname,
                    'dob': response.dob.slice(0, 10),
                    'address': response.address,
                    'gender': response.gender,
                    'email': response.email,
                    'role': 'student'
                }

                const basicInfor = {
                    'studentCode': response.studentCode,
                    'fullname': response.fullname,
                }
                localStorage.removeItem(APP_CONSTANTS.USER_BASIC_INFOR);
                localStorage.setItem(APP_CONSTANTS.USER_BASIC_INFOR, JSON.stringify(basicInfor));
                setCheckedGender(userInfor.gender);
                setNewFullname(userInfor.fullname);
                setNewDob(userInfor.dob);
                setNewAddress(userInfor.address);
                setNewEmail(userInfor.email);
                setAccount(userInfor);
            } else {
                setTriggerLoadingPopup(false);
            }
        } catch (error) {
            setTriggerLoadingPopup(false);
            console.log('Get profile error', error);
        }
    }

    const handleSubmit = async () => {
        if (isNotEmpty(newFullname) || isNotEmpty(newDob) || isNotEmpty(checkedGender) || isNotEmpty(newAddress) || isNotEmpty(newEmail)) {
            const paramEditProfile = {
                "studentCode": account.studentCode,
                "fullname": newFullname,
                "dob": `${newDob}T00:00:00.000+00:00`,
                "address": newAddress,
                "gender": checkedGender,
                "email": newEmail,
                "username": account.username,
                "password": account.password,
                "role": "student"
            }
            console.log(paramEditProfile)
            setTriggerLoadingPopup(true);
            try {
                const response = await StudentApi.editProfile(paramEditProfile);
                if (response && response.code === 0) {
                    fetchProfile();
                    setTriggerLoadingPopup(false);
                    setTriggerSuccessPopup(true);
                    setTimeout(() => {
                        setTriggerSuccessPopup(false);
                    }, 1200);
                } else {
                    setTriggerLoadingPopup(false);
                    setTriggerErrorPopup(true);
                }
            } catch (error) {
                console.log('error login: ', error);
                setTriggerLoadingPopup(false);
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
            <PopupLoading trigger={triggerLoadingPopup} />
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
                <p style={{ 'fontSize': 19 }}>Vui lòng điền đầy đủ thông tin cá nhân.</p>
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
                <p style={{ 'fontSize': 19 }}>Lỗi cập nhập thông tin cá nhân, vui lòng thử lại.</p>
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
                <p style={{ 'fontSize': 19 }}>Lưu thông tin cá nhân thành công.</p>
            </NotiSuccessPopup>
            <div className="auth-form4">
                <div className="auth-form_broad4">
                    <div className="auth-form_header4">
                        <h1 className="auth-form_heading4">Thông tin của tôi</h1>
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
                                        onChange={(e) => setNewFullname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="auth-form_input_wrapper4">
                                <label for="Hoten">Ngày sinh</label>
                                <div className="auth-form_input4">
                                    <span className="material-icons icon-accountMe"> person </span>
                                    <input
                                        type="text"
                                        className="Register_input4"
                                        spellCheck="false"
                                        placeholder="Họ tên sinh viên"
                                        defaultValue={account.dob}
                                        onChange={(e) => setNewDob(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="inputRadio10">
                                <div className="inputRadio_wrapper10">
                                    <input
                                        type="radio"
                                        checked={checkedGender === 1}
                                        onChange={() => { setCheckedGender(1) }}
                                    /><label>Giới tính nam</label>
                                </div>
                                <div className="inputRadio_wrapper10">
                                    <input
                                        type="radio"
                                        checked={checkedGender === 0}
                                        onChange={() => { setCheckedGender(0) }}
                                    /><label>Giới tính nữ</label>
                                </div>
                            </div>
                            <div className="auth-form_input_wrapper4">
                                <label for="Hoten">Địa chỉ</label>
                                <div className="auth-form_input4">
                                    <span className="material-icons icon-accountMe"> person </span>
                                    <input
                                        type="text"
                                        className="Register_input4"
                                        spellCheck="false"
                                        placeholder="Địa chỉ"
                                        defaultValue={account.address}
                                        onChange={(e) => setNewAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="auth-form_input_wrapper4">
                                <label for="Hoten">Email</label>
                                <div className="auth-form_input4">
                                    <span className="material-icons icon-accountMe"> person </span>
                                    <input
                                        type="text"
                                        className="Register_input4"
                                        spellCheck="false"
                                        placeholder="Email"
                                        defaultValue={account.email}
                                        onChange={(e) => setNewEmail(e.target.value)}
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
