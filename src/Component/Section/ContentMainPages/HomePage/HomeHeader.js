import React, { useEffect, useState } from 'react'
import '../../../../Css/Home.css'
import { BackgroundImg, LogoHUCE } from '../../../../resrouces/Img'
import StudentApi from '../../../../API/studentApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';

function HomeHeader() {

    // const [account, setAccount] = useState({
    //     'fullname': '',
    //     'studentCode': ''
    // });

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         try {
    //             const response = await StudentApi.getProfile();
    //             if (response) {
    //                 const basicUserInfor = {
    //                     'fullname': response.fullname,
    //                     'studentCode': response.studentCode
    //                 }
    //                 localStorage.removeItem(APP_CONSTANTS.USER_BASIC_INFOR);
    //                 localStorage.setItem(APP_CONSTANTS.USER_BASIC_INFOR, JSON.stringify(basicUserInfor));
    //                 setAccount(basicUserInfor);
    //             }
    //         } catch (error) {
    //             console.log('Get profile error', error);
    //         }
    //     }

    //     fetchProfile();
    // }, []);

    // const displayInfor = () => {
    //     if ((localStorage.getItem(APP_CONSTANTS.USER_BASIC_INFOR))) {
    //         return JSON.parse(localStorage.getItem(APP_CONSTANTS.USER_BASIC_INFOR));
    //     } else {
    //         return account;
    //     }
    // }

    return (
        <div className="Home_header-student">
            <div className="Header_wrapper-student">
                <img className="BackgroundImg-student" src={BackgroundImg} alt='QuangTuan' />
                <div className="White_broad-student">
                    <img src={LogoHUCE} alt='LogoHUCE' />
                    <div className="Header_information-student">
                        <div className="information-student">
                            <h1>Hệ thống thi trực tuyến - QUIZ</h1>
                            <h3>Trường Đại học Xây dựng Hà Nội</h3>
                        </div>
                        <p>Welcome, {JSON.parse(localStorage.getItem(APP_CONSTANTS.USER_BASIC_INFOR)).fullname} - {JSON.parse(localStorage.getItem(APP_CONSTANTS.USER_BASIC_INFOR)).studentCode}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
