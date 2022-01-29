import React from 'react';
import { BackgroundImg, LogoHUCE } from '../resrouces/Img';
import '../Css/CoverPage.css';
import { Link } from 'react-router-dom';

function CoverPage() {
    return (
        <div className="App_withSidebar3">
            <div className="App_withSidebarContent3">
                <section className="Section_Content3">
                    <div className="Home_header">
                        <div className="Header_wrapper">
                            <img className="BackgroundImgCoverPage" src={BackgroundImg} alt="......" />
                            <div className="White_broad">
                                <img src={LogoHUCE} alt='............' />
                                <div className="Header_information">
                                    <div className="information">
                                        <h1>Hệ thống thi trực tuyến - QUIZ</h1>
                                        <h3>Trường Đại học Xây dựng Hà Nội</h3>
                                    </div>
                                    <p>Đăng ký tài khoản, đăng nhập để truy cập hệ thống</p>
                                    <div className="login-register">
                                        <Link to='/register'><button>Đăng ký</button></Link>
                                        <span>&emsp;hoặc&emsp;</span>
                                        <Link to='/login'><button>Đăng nhập</button></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="Home_wrapper">
                                <div className="Link_wrapper">
                                    <div className="Link_item">
                                        <div className="Item_icon">HUCE</div>
                                        <div className="Item_link-green">
                                            <a href="https://www.nuce.edu.vn/">huce.edu.vn</a>
                                        </div>
                                    </div>
                                    <div className="Link_item">
                                        <div className="Item_icon">DAOTAO</div>
                                        <div className="Item_link-green">
                                            <a href="https://daotao.nuce.edu.vn/">daotao.nuce.edu.vn</a>
                                        </div>
                                    </div>
                                    <div className="Link_item">
                                        <div className="Item_icon">CMS</div>
                                        <div className="Item_link-green">
                                            <a href="https://cms.nuce.edu.vn">cms.nuce.edu.vn</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CoverPage;
