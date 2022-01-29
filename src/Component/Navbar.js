import React, { useEffect } from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router'
import '../Css/Navbar.css'
import { NavbarLogo } from '../resrouces/Img'
import ResultSearch from './Popup/ResultSearchPopup/ResultSearch';

function Navbar() {

    const [borderSearch, setBorderSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const [triggerResultSearch, setTriggerResultSearch] = useState(true);

    let history = useHistory();

    // useEffect(() => {

    // }, []);


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleLogOut = () => {
        localStorage.clear();
        history.replace('/');
    }


    return (
        // NavBar
        <React.Fragment>
            <ResultSearch trigger={true} />
            <div className="NavBar_wrapper">
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
                                placeholder="Tìm kiếm lớp / bài thi"
                                value={searchTerm}
                                onFocus={() => { setBorderSearch('border-red') }}
                                onBlur={() => { setBorderSearch('') }}
                                onChange={handleSearch}
                            />
                            <div onClick={() => { setSearchTerm('') }}>
                                <span className={`material-icons close-btn ${searchTerm !== '' ? 'display-btn' : ''}`}> close </span>
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
