import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '../../Css/Section.css'
import '../../Css/Sidebar.css'
import Home from './ContentMainPages/HomePage/Home'
import Exam from './ContentMainPages/ExamPage/Exam'
import Grade from './ContentMainPages/GradePage/Grade'
import Account from './ContentMainPages/AccountPage/Account'
import Join from './ContentMainPages/JoinPage/Join'
import ResultSearch from '../Popup/ResultSearchPopup/ResultSearch'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/exam',
        component: Exam
    },
    {
        path: '/grade',
        component: Grade
    },
    {
        path: '/join',
        component: Join
    },
    {
        path: '/account',
        component: Account
    }
]

function MainPagesRouterSidebar({searchTerms, clear}) {

    //State chứa trạng thái css active của sidebar khi chọn home/exam/grade/account
    const [ClassNameActive, setClassNameActive] = useState({
        home: 'active',
        exam: '',
        grade: '',
        join: '',
        account: ''
    });
    const [pathname, setPathname] = useState('/');



    const getLocation = (path) => {
        setPathname(path);
    }
    const location = useLocation();

    // Mỗi khi MainPagesRouterSidebar mounted sẽ kiểm tra xem url là gì để set thái trạng thái css active của sidebar
    // MainPagesRouterSidebar mounted khi nhập url tay hoặc setState
    useEffect(() => {
        if (pathname === '/home' || location.pathname === '/home') {
            setClassNameActive({
                home: 'active',
                exam: '',
                grade: '',
                join: '',
                account: ''
            })
        }
        if (pathname === '/exam') {
            setClassNameActive({
                home: '',
                exam: 'active',
                grade: '',
                join: '',
                account: ''
            })
        }
        if (pathname === '/grade') {
            setClassNameActive({
                home: '',
                exam: '',
                grade: 'active',
                join: '',
                account: ''
            })
        }
        if (pathname === '/join') {
            setClassNameActive({
                home: '',
                exam: '',
                grade: '',
                join: 'active',
                account: ''
            })
        }
        if (pathname === '/account') {
            setClassNameActive({
                home: '',
                exam: '',
                grade: '',
                join: '',
                account: 'active'
            })
        }
    }, [pathname, location.pathname]);

    // Thay đổi state để thay trạng thái ccs active
    const ActiveHome = () => {
        setClassNameActive({
            home: 'active',
            exam: '',
            grade: '',
            join: '',
            account: ''
        })
    }
    const ActiveExam = () => {
        setClassNameActive({
            home: '',
            exam: 'active',
            grade: '',
            join: '',
            account: ''
        })
    }
    const ActiveGrade = () => {
        setClassNameActive({
            home: '',
            exam: '',
            grade: 'active',
            join: '',
            account: ''
        })
    }
    const ActiveJoin = () => {
        setClassNameActive({
            home: '',
            exam: '',
            grade: '',
            join: 'active',
            account: ''
        })
    }
    const ActiveAccount = () => {
        setClassNameActive({
            home: '',
            exam: '',
            grade: '',
            join: '',
            account: 'active'
        })
    }

    const Active = (value) => {
        if (value === 0) {
            ActiveExam();
        }
        if (value === 1) {
            ActiveGrade();
        }
    }

    const isEmpty = (needCheck) => {
        return (needCheck !== '' && needCheck.length !== 0) ? true : false
    }

    return (
        <Router>
            <ResultSearch trigger={isEmpty(searchTerms)} valueInput={searchTerms} clearText={clear} />
            <div className="App_withSidebar">
                {/* SideBar */}
                <div className="App_sidebarWrap">
                    <div className="Sidebar_wrapper">
                        <div className="Sidebar_list">
                            <li className={ClassNameActive.home}>
                                <Link to='/home' onClick={ActiveHome}>
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
                            <li className={ClassNameActive.join}>
                                <Link to='/join' onClick={ActiveJoin}>
                                    <span className="material-icons icon_join"> join_inner </span>
                                    <span className="Sidebar_menu join">Join</span>
                                </Link>
                            </li>
                            <li className={ClassNameActive.account}>
                                <Link to='/account' onClick={ActiveAccount}>
                                    <span className="material-icons icon_me"> account_circle </span>
                                    <span className="Sidebar_menu me">Account</span>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>


                {/* APP Content */}
                <div className="App_withSidebarContent">
                    <section className="Section_content">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    exact path={route.path}
                                    children={<route.component route={Active} getLocation={getLocation} />}
                                />
                            ))}
                        </Switch>
                    </section>
                </div>
            </div>
        </Router>
    )
}

export default MainPagesRouterSidebar
