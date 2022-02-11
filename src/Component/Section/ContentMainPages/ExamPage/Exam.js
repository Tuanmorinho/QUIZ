import React, { useEffect, useState } from 'react'
import '../../../../Css/Exam.css';
import { useLocation } from 'react-router-dom';
import ExamList from './ExamList';
import TestApi from '../../../../API/testApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';

function Exam({ getLocation }) {

    const [testsWaiting, setTestsWaiting] = useState([]);

    let location = useLocation();

    useEffect(() => {
        getLocation(location.pathname);

        const fetchTestsWaiting = async () => {
            try {
                const resTestsWaiting = await TestApi.getTestByStatus('waiting');
                if (resTestsWaiting) {
                    localStorage.removeItem(APP_CONSTANTS.WAITING_TEST_INF_T);
                    localStorage.setItem(APP_CONSTANTS.WAITING_TEST_INF_T, JSON.stringify(resTestsWaiting));
                    setTestsWaiting(resTestsWaiting);
                }
            } catch (error) {
                console.log('error fetch test waiting: ', error);
            }
        }

        fetchTestsWaiting();
    }, [getLocation, location.pathname]);

    const displayTestWaiting = () => {
        if (localStorage.getItem(APP_CONSTANTS.WAITING_TEST_INF_T)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.WAITING_TEST_INF_T));
        } else {
            return testsWaiting;
        }
    }

    return (
        <div className="Home_wrapper-exam2">
            <div className="SectionList_wrapper2">
                <div className="SectionList_headingWrap2">
                    <h2 className="SectionList_heading2">Bài thi sắp diễn ra</h2>
                </div>
                <div className="SectionList_bodyWrap2">
                    <ExamList tests={displayTestWaiting()} />
                </div>
            </div>
        </div>
    )
}

export default Exam
