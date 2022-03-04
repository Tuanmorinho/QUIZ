import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import ErrorPopup from '../../../../Popup/ErrorPopup/ErrorPopup';
import APP_CONSTANTS from '../../../../../Constants/appConstants';

function ExamListChildSearch({ testWaitingContent }) {

    const [disable, setDisable] = useState('countdown2');
    const [timeDisplay, setTimeDisplay] = useState('');

    const [triggerErrorPopup, setTriggerErrorPopup] = useState(false);

    let timeOutTest = useRef(null);

    useEffect(() => {
        let startTime = new Date(testWaitingContent.startTest);
        let realTime = new Date(testWaitingContent.realTime);

        const displayTime = () => {
            let hours = startTime.toString().slice(16, 18);
            let minute = startTime.toString().slice(19, 21);

            let hoursDisplay = '';

            if (hours >= 0 && hours <= 12) {
                hoursDisplay = 'AM'
            } else {
                hours = hours % 12;
                hoursDisplay = 'PM'
            }

            return String(String(startTime).slice(8, 10) + ' ' + String(startTime).slice(4, 7) + ' ' + String(startTime).slice(11, 15) + ', ' + hours + ':' + minute + ' ' + hoursDisplay);
        }

        const differentTime = () => {
            if (startTime - realTime >= 0) { return startTime - realTime };
        }

        const setTimeOutOpenTest = () => {
            setTimeDisplay(displayTime());
            if (timeOutTest.current) {
                clearTimeout(timeOutTest.current);
            };
            timeOutTest.current = setTimeout(() => {
                setDisable('disable_countdown2');
            }, differentTime());
        }

        if (realTime.toString().slice(29, 31) === '07') {
            setTimeOutOpenTest();
        } else {
            setTimeDisplay('Vui lòng chỉnh lại múi giờ');
            setTriggerErrorPopup(true);
        }
    }, [testWaitingContent.status, testWaitingContent.realTime, testWaitingContent.startTest])

    const storeInfTesting = () => {
        const inf = {
            'idTest': testWaitingContent.id,
            'title': testWaitingContent.title,
            'class': testWaitingContent.examCode,
            'professor': testWaitingContent.professor
        }
        localStorage.removeItem(APP_CONSTANTS.INF_TESTING_TITLE);
        localStorage.setItem(APP_CONSTANTS.INF_TESTING_TITLE, JSON.stringify(inf));
    }

    return (
        <React.Fragment>
            <ErrorPopup trigger={triggerErrorPopup} setTrigger={setTriggerErrorPopup}>
                <div style={{
                    'display': 'flex',
                    'alignItems': 'center'
                }}>
                    <span className="material-icons" style={{
                        'color': '#FC4F4F',
                        'fontSize': 38
                    }}> error </span>
                    <h1 style={{
                        'fontSize': 24,
                        'marginLeft': 10,
                        'marginTop': 2.5
                    }}>Lỗi</h1>
                </div>
                <p style={{ 'fontSize': 19 }}>Múi giờ hiện tại bị sai, vui lòng chỉnh lại múi giờ.</p>
            </ErrorPopup>
            <section className="Exam_examItem2">
                <div className="examItem_wrapper2">
                    <div className="green_retangle2"></div>
                    <div className="item_label-red2">
                        <label>Mã bài thi:&ensp;<span>{testWaitingContent.id}</span></label>
                        <h1>{testWaitingContent.title}&ensp;-&ensp;{testWaitingContent.examCode}</h1>
                    </div>
                    <div className="item_infomation2">
                        <div className='item_infomation2-professor'>
                            <span className="material-icons icon_teacher2"> account_box </span>
                            <p>Giảng viên:&nbsp;</p><h5>{testWaitingContent.professor}</h5>
                        </div>
                        <div className='item_infomation2-time'>
                            <span className="material-icons icon_timer2"> alarm </span>
                            <label className="font_weight-bold2">{testWaitingContent.time}&nbsp;phút</label>
                        </div>
                    </div>
                    <Link
                        to={{
                            pathname: '/testing',
                            search: `id=${testWaitingContent.id}`
                        }}
                        onClick={storeInfTesting}
                    >
                        <button>Bắt đầu thi</button>
                    </Link>
                    <div className={disable}>
                        <div className="Bg_countdown-white2">
                            <div className="Timer_wrapper2">
                                <h1>Bài thi sẽ được mở lúc:</h1>
                                <label>{timeDisplay}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ExamListChildSearch;
