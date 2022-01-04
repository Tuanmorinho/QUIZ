import React, { useEffect, useState } from 'react'

function ExamListHChild({testContent}) {
    const [disable, setDisable] = useState('disable_countdown');

    useEffect(() => {
        if(testContent.status === 0) {
            setDisable('countdown');
        }
    },[testContent.status])

    return (
        <section className="Home_examItem">
            <div className="examItem_wrapper">
                <div className="item_label red">
                    <label>Mã bài thi:&ensp;<span>{testContent.idTest}</span></label>
                    <h1>{testContent.nameTest}&ensp;-&ensp;{testContent.class}</h1>
                </div>
                <div className="item_infomation">
                    <div>
                        <span className="material-icons icon_teacher"> account_box </span>
                        <p>Giảng viên:</p><h5>{testContent.teacher}</h5>
                    </div>
                    <div>
                        <span className="material-icons icon_timer"> alarm </span>
                        <label className="font_weight-bold">{testContent.time}&nbsp;phút</label>
                    </div>
                </div>
                <div className="item_bottom greenBottom">
                    <button>Bắt đầu thi</button>
                </div>
                <div className={disable}>
                    <div className="Bg_countdown-white">
                        <div className="Timer_wrapper">
                            <div className="Timer count_days">
                                <h1>05</h1>
                                <label>Days</label>
                            </div>
                            <div className="Timer count_hours">
                                <h1>11</h1>
                                <label>Hours</label>
                            </div>
                            <div className="Timer count_minutes">
                                <h1>56</h1>
                                <label>Minutes</label>
                            </div>
                            <div className="Timer count_seconds">
                                <h1>20</h1>
                                <label>Seconds</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExamListHChild
