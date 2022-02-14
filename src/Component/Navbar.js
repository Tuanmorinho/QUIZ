import React from 'react'
import { useState, useRef } from 'react';
import { useHistory } from 'react-router'
import '../Css/Navbar.css'
import { NavbarLogo } from '../resrouces/Img'
import NotiSuccessPopup from './Popup/NotiPopup/NotiSuccessPopup';

function Navbar({ getInputValue, valueInput, clearText, onSubmitSearch, disableForTesting}) {

    const [borderSearch, setBorderSearch] = useState('');
    const [triggerSuccessPopup, setTriggerSuccessPopup] = useState(false);

    const typingTimeoutRef = useRef(null);

    let history = useHistory();

    const handleSearch = (e) => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };
        typingTimeoutRef.current = setTimeout(() => {
            const id = e.target.value;
            onSubmitSearch(id);
        },500);
        getInputValue(e.target.value);
    }

    const handleLogOut = () => {
        localStorage.clear();
        setTriggerSuccessPopup(true);
        setTimeout(() => {
            setTriggerSuccessPopup(false);
            history.replace('/');
        }, 1200);
    }

    return (
        <React.Fragment>
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
                <p style={{ 'fontSize': 19 }}>Đăng xuất hệ thống QUIZ thành công.</p>
            </NotiSuccessPopup>
            <div className={`NavBar_wrapper ${disableForTesting}`}>
                {/* NavBar_logo */}
                <div className="NavBar_logo">
                    <div>
                        <img src={NavbarLogo} alt='...' />
                    </div>
                    <h4 className="NavBar_logoHeading">Hệ thống thi trực tuyến</h4>
                </div>
                {/* Navbar_body */}
                <div className='NavBar_body'>
                    <div>
                        <div className={`Search_wrapper ${borderSearch}`}>
                            <span className="material-icons icon-search"> search </span>
                            <input
                                className="Search_input"
                                type='text'
                                placeholder="Tìm kiếm kì thi theo ID"
                                value={valueInput}
                                onFocus={() => { setBorderSearch('border-red') }}
                                onBlur={() => { setBorderSearch('') }}
                                onChange={handleSearch}
                            />
                            <div onClick={() => { clearText() }}>
                                <span className={`material-icons close-btn ${valueInput ? 'display-btn' : ''}`}> close </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NavBar_actions */}
                <div className="NavBar_actions">
                    <button className="loginButton" onClick={handleLogOut}>Đăng xuất</button>
                    <span className="material-icons account_circle"> account_circle </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
