import React from 'react'

function GradeListHChild({ gradeContent }) {
    return (
        <section className="Home_examItem">
            <div className="examItem_wrapper">
                <div className="item_label orange">
                    <label>Mã bài thi:&ensp;<span>{gradeContent.id}</span></label>
                    <h1>{gradeContent.title} - {gradeContent.exam_code}</h1>
                </div>
                <div className="item_infomation itemGrade">
                    <div>
                        <span className="material-icons icon_teacher"> account_box </span>
                        <p>Giảng viên:</p><h5>{gradeContent.professor}</h5>
                    </div>
                </div>
                <div className="item_bottom orangeBottom">
                    <h1>{gradeContent.correctAnswer}/{gradeContent.noq}&ensp;-&ensp;({gradeContent.score}%)</h1>
                </div>
            </div>
        </section>
    )
}

export default GradeListHChild
