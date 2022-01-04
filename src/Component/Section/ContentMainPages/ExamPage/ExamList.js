import React from 'react'

function ExamList() {
    return (
        <React.Fragment>
            <section className="Exam_examItem2" >
                <div className="examItem_wrapper2">
                    <div className="green_retangle2"></div>
                    <div className="item_label-red2">
                        <label>Mã bài thi:&ensp;<span>654321</span></label>
                        <h1>Bài TH3 môn LTUDM - 63IT2</h1>
                    </div>
                    <div className="item_infomation2">
                        <div>
                            <span className="material-icons icon_teacher2"> account_box </span>
                            <p>Giảng viên:&nbsp;</p><h5>Lê Đức Quang</h5>
                        </div>
                        <div>
                            <span className="material-icons icon_timer2"> alarm </span>
                            <label className="font_weight-bold2">180&nbsp;phút</label>
                        </div>
                    </div>
                    <button>Bắt đầu thi</button>
                </div>
            </section >

            <section className="Exam_examItem2">
                <div className="examItem_wrapper2">
                    <div className="green_retangle2"></div>
                    <div className="item_label-red2">
                        <label>Mã bài thi:&ensp;<span>654321</span></label>
                        <h1>Bài TH3 môn LTUDM - 63IT2</h1>
                    </div>
                    <div className="item_infomation2">
                        <div>
                            <span className="material-icons icon_teacher2"> account_box </span>
                            <p>Giảng viên:&nbsp;</p><h5>Lê Đức Quang</h5>
                        </div>
                        <div>
                            <span className="material-icons icon_timer2"> alarm </span>
                            <label className="font_weight-bold2">180&nbsp;phút</label>
                        </div>
                    </div>
                    <button>Bắt đầu thi</button>
                    <div className="disable_countdown2">
                        <div className="Bg_countdown-white2">
                            <div className="Timer_wrapper2">
                                <div className="Timer count_days2">
                                    <h1>05</h1>
                                    <label>Days</label>
                                </div>
                                <div className="Timer count_hours2">
                                    <h1>11</h1>
                                    <label>Hours</label>
                                </div>
                                <div className="Timer count_minutes2">
                                    <h1>56</h1>
                                    <label>Minutes</label>
                                </div>
                                <div className="Timer count_seconds2">
                                    <h1>20</h1>
                                    <label>Seconds</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ExamList
