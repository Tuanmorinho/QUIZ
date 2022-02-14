import React from 'react';

function GradeListChild({ gradeContent }) {
    return (
        <section className="Grade_gradeItem">
            <div className="gradeItem_wrapper">
                <div className="green-orange-gradient_retangle"></div>
                <div className="item_label3">
                    <label>Mã bài thi:&ensp;<span>{gradeContent.id}</span></label>
                    <h1>{gradeContent.title} - {gradeContent.examcode}</h1>
                </div>
                <div className="item_infomation3">
                    <div>
                        <span className="material-icons icon_teacher"> account_box </span>
                        <p>Giảng viên:&nbsp;</p><h5>{gradeContent.professor}</h5>
                    </div>
                </div>
                <div className="bg_gradeInfomation-orange">
                    <div className="grade_itemExam">
                        <h1>{gradeContent.correct_answers}/{gradeContent.noq}&ensp;-&ensp;({gradeContent.score}%)</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GradeListChild;
