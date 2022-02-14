import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import APP_CONSTANTS from '../../../../../../Constants/appConstants';

function ExamListHChild({ testContent }) {
    const [disable, setDisable] = useState('countdown');
    const [timeDisplay, setTimeDisplay] = useState('');

    let timeOutTest = useRef(null);

    useEffect(() => {
        let startTime = new Date(testContent.start_time);
        let realTime = new Date(testContent.realTime);

        const displayTime = () => {
            let hours = startTime.toString().slice(16, 18);
            let minute = startTime.toString().slice(19, 21);
            // let second = startTime.toString().slice(22,24);

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
                setDisable('disable_countdown');
            }, differentTime());
        }

        displayTime();
        setTimeOutOpenTest();

    }, [testContent.status, testContent.realTime, testContent.start_time]);

    const storeInfTesting = () => {
        const inf = {
            'idTest': testContent.id,
            'title': testContent.title,
            'class': testContent.examCode,
            'professor': testContent.professor
        }
        localStorage.removeItem(APP_CONSTANTS.INF_TESTING_TITLE);
        localStorage.setItem(APP_CONSTANTS.INF_TESTING_TITLE, JSON.stringify(inf));
    }

    return (
        <section className="Home_examItem">
            <div className="examItem_wrapper">
                <div className="item_label red">
                    <label>Mã bài thi:&ensp;<span>{testContent.id}</span></label>
                    <h1>{testContent.title}&ensp;-&ensp;{testContent.examCode}</h1>
                </div>
                <div className="item_infomation">
                    <div>
                        <span className="material-icons icon_teacher"> account_box </span>
                        <p>Giảng viên:</p><h5>{testContent.professor}</h5>
                    </div>
                    <div>
                        <span className="material-icons icon_timer"> alarm </span>
                        <label className="font_weight-bold">{testContent.time}&nbsp;phút</label>
                    </div>
                </div>
                <div className="item_bottom greenBottom">
                    <Link to={{
                        pathname: '/testing',
                        search: `id=${testContent.id}`
                    }}
                        onClick={storeInfTesting}
                    >
                        <button>Bắt đầu thi</button>
                    </Link>
                </div>
                <div className={disable}>
                    <div className="Bg_countdown-white">
                        <div className="Timer_wrapper">
                            <h1>Bài thi sẽ được mở lúc:</h1>
                            <label>{timeDisplay}</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExamListHChild
