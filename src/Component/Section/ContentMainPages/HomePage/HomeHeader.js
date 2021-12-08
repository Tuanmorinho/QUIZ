import React from 'react'
import '../../../../Css/Home.css'

function HomeHeader() {
    return (
        <div className="Home_header-student">
            <div className="Header_wrapper">
                <img className="BackgroundImg-student" src="../asset/BackgroundImg.png" alt='QuangTuan'/>
                <div className="White_broad-student">
                    <img src="../asset/LogoHUCE.png" alt='...'/>
                    <div className="Header_information-student">
                        <div className="information-student">
                            <h1>Hệ thống thi trực tuyến - QUIZ</h1>
                            <h3>Trường Đại học Xây dựng Hà Nội</h3>
                        </div>
                        <p>Welcome, Lê Quang Tuấn - 1547463</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
