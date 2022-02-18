import React, { useEffect, useState } from 'react';
import ExamApi from '../../../../../API/examApi';
import { useHistory } from 'react-router-dom';
import ErrorPopup from '../../../../Popup/ErrorPopup/ErrorPopup';
import NotiSuccessPopup from '../../../../Popup/NotiPopup/NotiSuccessPopup';

function JoinListChildSearch({ exam }) {

    const [timeStartDisplay, setTimeStartDisplay] = useState('');
    const [joinedCss, setJoinedCss] = useState('joined');

    const [triggerErrorPopup, setTriggerErrorPopup] = useState(false);
    const [triggerSuccessPopup, setTriggerSuccessPopup] = useState(false);

    let history = useHistory();

    useEffect(() => {
        let startTime = new Date(exam.start_time);

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

            setTimeStartDisplay(String(String(startTime).slice(8, 10) + ' ' + String(startTime).slice(4, 7) + ' ' + String(startTime).slice(11, 15) + ', ' + hours + ':' + minute + ' ' + hoursDisplay));
        }

        displayTime();
    }, [exam.start_time]);

    const joinExam = async () => {
        try {
            const response = await ExamApi.joinExam(exam.examCode);
            if (response && response.code === 0) {
                setTriggerSuccessPopup(true);
                setTimeout(() => {
                    setTriggerSuccessPopup(false);
                    history.replace('/');
                }, 1200);
            } else {
                setTriggerErrorPopup(true);
            }
        } catch (error) {
            console.log('error join: ', error);
            setTriggerErrorPopup(true);
        }
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
                <p style={{ 'fontSize': 19 }}>Lỗi tham gia vào kì thi, vui lòng thử lại.</p>
            </ErrorPopup>
            <NotiSuccessPopup trigger={triggerSuccessPopup} setTrigger={setTriggerSuccessPopup}>
                <div style={{
                    'display': 'flex',
                    'alignItems': 'center'
                }}>
                    <span className="material-icons" style={{
                        'color': '#1AAD8A',
                        'fontSize': 38
                    }}> verified </span>
                    <h1 style={{
                        'fontSize': 24,
                        'marginLeft': 10,
                        'marginTop': 2.5
                    }}>Thành công</h1>
                </div>
                <p style={{ 'fontSize': 19 }}>Tham gia kì thi thành công.</p>
            </NotiSuccessPopup>
            <section className="Exam_examItem5">
                <div className="examItem_wrapper5">
                    <div className="green_retangle5"></div>
                    <div className="item_label-red5">
                        <label>Mã kì thi:&ensp;<span>{exam.examCode}</span></label>
                        <h1>{exam.title}</h1>
                    </div>
                    <div className="item_infomation5">
                        <div className='item_infomation5-professor'>
                            <span className="material-icons icon_teacher5"> account_box </span>
                            <p>Giảng viên:&nbsp;</p><h5>{exam.professor}</h5>
                        </div>
                        <div className='item_infomation5-longtime'>
                            <span className="material-icons icon_timer5"> alarm </span>
                            <p>Thời gian bắt đầu:&nbsp;</p><label className="font_weight-bold">{timeStartDisplay}&nbsp;</label>
                        </div>
                    </div>
                    <button className={`item_join ${joinedCss}`} onClick={joinExam}>Tham gia</button>
                </div>
            </section>
        </React.Fragment>
    )
}

export default JoinListChildSearch