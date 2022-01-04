import React from 'react'

function GradeListHChild() {
    return (
        <section className="Home_examItem">
            <div className="examItem_wrapper">
                <div className="item_label orange">
                    <label>Mã bài thi:&ensp;<span>654321</span></label>
                    <h1>Bài TH3 môn LTUDM - 63IT2</h1>
                </div>
                <div className="item_infomation itemGrade">
                    <div>
                        <span className="material-icons icon_teacher"> account_box </span>
                        <p>Giảng viên:</p><h5>Lê Đức Quang</h5>
                    </div>
                </div>
                <div className="item_bottom orangeBottom">
                    <h1>17/20&ensp;-&ensp;(85.00%)</h1>
                </div>
            </div>
        </section>
    )
}

export default GradeListHChild
