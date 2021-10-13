import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import '../../Css/Section.css'
import Sidebar from './SideBar/Sidebar'
import Home from './Content/HomePage/Home'
import Exam from './Content/ExamPage/Exam'
import Grade from './Content/GradePage/Grade'
import Account from './Content/AccountPage/Account'
import StartPage from '../StartPage/StartPage'

function Section() {
    return (
        <div class="App_withSidebar">
            <div className="App_sidebarWrap">
                <Sidebar />
                <div class="App_withSidebarContent">
                    <section class="Section_content">
                        <Home />
                        <Exam />
                        <Grade />
                        <Account />
                    </section>
                </div>
            </div>
            {/* StartPage dành cho phần đăng nhập sau */}
            {/* <StartPage /> */}
        </div>
    )
}

export default Section
