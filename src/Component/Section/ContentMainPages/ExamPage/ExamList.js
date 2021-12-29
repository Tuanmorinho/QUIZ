import React from 'react'

function ExamList() {
    return (
        <React.Fragment>
            <section class="Exam_examItem2" >
                <div class="examItem_wrapper2">
                    <div class="green_retangle2"></div>
                    <div class="item_label-red2">
                        <label>Mã bài thi:&ensp;<span>654321</span></label>
                        <h1>Bài TH3 môn LTUDM - 63IT2</h1>
                    </div>
                    <div class="item_infomation2">
                        <div>
                            <a class="material-icons icon_teacher2"> account_box </a>
                            <p>Giảng viên:&nbsp;<span>Lê Đức Quang</span></p>
                        </div>
                        <div>
                            <a class="material-icons icon_timer2"> alarm </a>
                            <label class="font_weight-bold2">180&nbsp;phút</label>
                        </div>
                    </div>
                    <button>Bắt đầu thi</button>
                </div>
            </section >

            <section class="Exam_examItem2">
                <div class="examItem_wrapper2">
                    <div class="green_retangle2"></div>
                    <div class="item_label-red2">
                        <label>Mã bài thi:&ensp;<span>654321</span></label>
                        <h1>Bài TH3 môn LTUDM - 63IT2</h1>
                    </div>
                    <div class="item_infomation2">
                        <div>
                            <a class="material-icons icon_teacher2"> account_box </a>
                            <p>Giảng viên:&nbsp;<span>Lê Đức Quang</span></p>
                        </div>
                        <div>
                            <a class="material-icons icon_timer2"> alarm </a>
                            <label class="font_weight-bold2">180&nbsp;phút</label>
                        </div>
                    </div>
                    <button>Bắt đầu thi</button>
                    <div class="disable_countdown2">
                        <div class="Bg_countdown-white2">
                            <div class="Timer_wrapper2">
                                <div class="Timer count_days2">
                                    <h1>05</h1>
                                    <label>Days</label>
                                </div>
                                <div class="Timer count_hours2">
                                    <h1>11</h1>
                                    <label>Hours</label>
                                </div>
                                <div class="Timer count_minutes2">
                                    <h1>56</h1>
                                    <label>Minutes</label>
                                </div>
                                <div class="Timer count_seconds2">
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
