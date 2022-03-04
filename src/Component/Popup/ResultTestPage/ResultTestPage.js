import React from 'react'
import '../../../Css/ResultTestPage.css'
import {Link} from 'react-router-dom'

function ResultTestPage(props) {
    return (
        <div className="auth-form">
            <div className="auth-form_broad">
                <div className="auth-form_header">
                    <h1 className="auth-form_heading">Đã hoàn thành bài thi</h1>
                </div>
                <div className="auth-form_aside">
                    <h5 className="auth-form_policy-link">Kết quả</h5>
                </div>
                <div className="auth-form_text">
                    <h2 className="auth-form_policy-text">{props.children.correctAnswer}/{props.children.noq}</h2>
                </div>
                <div className="auth-form_number">
                    <h3 className="auth-form_policy-number">{`(${(props.children.correctAnswer/props.children.noq)*100}% - ${props.children.score})`}</h3>
                </div>
                <div className="auth-form_form">
                    <Link to='/home'>
                        <button className="form-submit">Trở về trang chính</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResultTestPage
