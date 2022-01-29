import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/PageNotFound.css'

function PageNotFound() {
    return (
        <div className="container">
            <h1 className="first-four">4</h1>
            <div className="cog-wheel1">
                <div className="cog1">
                    <div className="top"></div>
                    <div className="down"></div>
                    <div className="left-top"></div>
                    <div className="left-down"></div>
                    <div className="right-top"></div>
                    <div className="right-down"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>

            <div className="cog-wheel2">
                <div className="cog2">
                    <div className="top"></div>
                    <div className="down"></div>
                    <div className="left-top"></div>
                    <div className="left-down"></div>
                    <div className="right-top"></div>
                    <div className="right-down"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
            <h1 className="second-four">4</h1>
            <div className="wrong-para">
                <p>Awww... Trang này không tồn tại :(</p>
                <br></br><br></br>
                <label>Hãy thử làm mới trang</label>
                <br></br><br></br>
                <label>Nếu bạn nhập địa chỉ theo cách thủ công, hãy kiểm tra đường dẫn xem có chính xác không?</label>
                <br></br><br></br>
                <Link to="/"><span>Quay trở lại trang chính</span></Link>
            </div>
        </div>
    )
}

export default PageNotFound;
