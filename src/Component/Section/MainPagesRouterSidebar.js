import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '../../Css/Section.css'
import '../../Css/Sidebar.css'
import Home from './ContentMainPages/HomePage/Home'
import Exam from './ContentMainPages/ExamPage/Exam'
import Grade from './ContentMainPages/GradePage/Grade'
import Account from './ContentMainPages/AccountPage/Account'

// StartPage dành cho phần đăng nhập sau
// import StartPage from '../StartPage/StartPage'

const routes = [
    {
        path: '/',
        exact: true,
        CSSclassName: 'activeHome',
        component: () => <Home />
    },
    {
        path: '/exam',
        component: () => <Exam />
    },
    {
        path: '/grade',
        component: () => <Grade />
    },
    {
        path: '/acount',
        component: () => <Account />
    }
]

function MainPagesRouterSidebar() {
    //State chứa trạng thái css active của sidebar khi chọn home/exam/grade/account
    const [ClassNameActive, setClassNameActive] = useState({
        home: 'active',
        exam: '',
        grade: '',
        account: ''
    });

    // Thay đổi state để thay trạng thái ccs active
    const ActiveHome = () => {
        setClassNameActive({
            home: 'active',
            exam: '',
            grade: '',
            account: ''
        })
    }
    const ActiveExam = () => {
        setClassNameActive({
            home: '',
            exam: 'active',
            grade: '',
            account: ''
        })
    }
    const ActiveGrade = () => {
        setClassNameActive({
            home: '',
            exam: '',
            grade: 'active',
            account: ''
        })
    }
    const ActiveAccount = () => {
        setClassNameActive({
            home: '',
            exam: '',
            grade: '',
            account: 'active'
        })
    }

    return (
        <Router>
            <div className="App_withSidebar">
                {/* SideBar */}
                <div classNameName="App_sidebarWrap">
                    <div className="Sidebar_wrapper">
                        <div className="Sidebar_list">
                            <li className={ClassNameActive.home}>
                                <Link to='/' onClick={ActiveHome}>
                                    <span className="material-icons icon_home"> account_balance </span>
                                    <span className="Sidebar_menu home">Home</span>
                                </Link>
                            </li>
                            <li className={ClassNameActive.exam}>
                                <Link to='/exam' onClick={ActiveExam}>
                                    <span className="material-icons icon_exam"> school </span>
                                    <span className="Sidebar_menu exam">Exam</span>
                                </Link>
                            </li>
                            <li className={ClassNameActive.grade}>
                                <Link to='/grade' onClick={ActiveGrade}>
                                    <span className="material-icons icon_grade"> card_membership </span>
                                    <span className="Sidebar_menu grade">Grade</span>
                                </Link>
                            </li>
                            <li className={ClassNameActive.account}>
                                <Link to='/account' onClick={ActiveAccount}>
                                    <span className="material-icons icon_me"> account_circle </span>
                                    <span className="Sidebar_menu me">Me</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>\


                {/* APP Content */}
                <div className="App_withSidebarContent">
                    <section className="Section_content">
                        <Switch>
                            {routes.forEach((route) => {
                                <Route path={route.path} exact={route.exact} component={<route.component />} />
                            })}
                        </Switch>
                    </section>
                </div>
            </div>
        </Router>
    )
}

export default MainPagesRouterSidebar
