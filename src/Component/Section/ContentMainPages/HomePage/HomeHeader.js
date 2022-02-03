import React, { useEffect, useState } from 'react'
import '../../../../Css/Home.css'
import { BackgroundImg, LogoHUCE } from '../../../../resrouces/Img'
import StudentApi from '../../../../API/studentApi';

function HomeHeader() {
    const [account, setAccount] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await StudentApi.getProfile();
                console.log(response);
                setAccount(response.data);
            } catch(error) {
                console.log('Get profile error', error);
            }
        }

        fetchProfile();
    },[]);

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
                        <p>Welcome, {account.name} - {account.id}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
