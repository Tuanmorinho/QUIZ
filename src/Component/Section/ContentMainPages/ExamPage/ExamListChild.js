import React, { useEffect, useState } from 'react'

function ExamListChild({ testContent }) {
    const [disable, setDisable] = useState('disable_countdown');

    useEffect(() => {
        if (testContent.status === "waiting") {
            setDisable('countdown2');
        }
    }, [testContent.status])

    return (
        <section className="Exam_examItem2">
            <div className="examItem_wrapper2">
                <div className="green_retangle2"></div>
                <div className="item_label-red2">
                    <label>Mã bài thi:&ensp;<span>{testContent.id}</span></label>
                    <h1>{testContent.title}&ensp;-&ensp;{testContent.class}</h1>
                </div>
                <div className="item_infomation2">
                    <div>
                        <span className="material-icons icon_teacher2"> account_box </span>
                        <p>Giảng viên:&nbsp;</p><h5>{testContent.teacher}</h5>
                    </div>
                    <div>
                        <span className="material-icons icon_timer2"> alarm </span>
                        <label className="font_weight-bold2">{testContent.time}&nbsp;phút</label>
                    </div>
                </div>
                <button>Bắt đầu thi</button>
                <div className={disable}>
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
    );
}

export default ExamListChild;
