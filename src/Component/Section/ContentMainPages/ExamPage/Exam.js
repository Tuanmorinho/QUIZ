import React, { useEffect, useState } from 'react'
import '../../../../Css/Exam.css';
import { useLocation } from 'react-router-dom';
import ExamList from './ExamList/ExamList';
import ExamListSearch from './ExamSearch/ExamListSearch';
import TestApi from '../../../../API/testApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';
import PopupLoading from '../../../Popup/PopupLoading/PopupLoading';

function Exam({ getLocation }) {

    const [testsWaiting, setTestsWaiting] = useState([]);
    const [testsWaitingSearch, setTestsWaitingSearch] = useState([]);
    const [displayResultTest, setDisplayResultTest] = useState('disableResult');

    const [triggerLoadingPopup, setTriggerLoadingPopup] = useState(true);

    let location = useLocation();

    useEffect(() => {
        getLocation(location.pathname);

        const resultTestSearch = async () => {
            if (new URLSearchParams(location.search).get("p")) {
                setTriggerLoadingPopup(true);
                try {
                    const resultTest = await TestApi.searchTestByExamCode(new URLSearchParams(location.search).get("p"));
                    if (resultTest) {
                        setTriggerLoadingPopup(false);
                        localStorage.removeItem(APP_CONSTANTS.WAITING_TEST_INF_S);
                        localStorage.setItem(APP_CONSTANTS.WAITING_TEST_INF_S, JSON.stringify(resultTest));
                        setTestsWaitingSearch(resultTest);
                    }
                } catch (error) {
                    console.log('error search: ', error);
                }
                setDisplayResultTest('');
            } else {
                setDisplayResultTest('disableResult');
            }
        }

        const fetchTestsWaiting = async () => {
            try {
                const resTestsWaiting = await TestApi.getTestByStatus('waiting');
                if (resTestsWaiting) {
                    setTriggerLoadingPopup(false);
                    localStorage.removeItem(APP_CONSTANTS.WAITING_TEST_INF_T);
                    localStorage.setItem(APP_CONSTANTS.WAITING_TEST_INF_T, JSON.stringify(resTestsWaiting));
                    setTestsWaiting(resTestsWaiting);
                }
            } catch (error) {
                console.log('error fetch test waiting: ', error);
            }
        }

        resultTestSearch();
        fetchTestsWaiting();
    }, [location.search]);

    const displayTestWaiting = () => {
        if (localStorage.getItem(APP_CONSTANTS.WAITING_TEST_INF_T)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.WAITING_TEST_INF_T));
        } else {
            return testsWaiting;
        }
    }

    const displayTestResult = () => {
        if (localStorage.getItem(APP_CONSTANTS.WAITING_TEST_INF_S)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.WAITING_TEST_INF_S));
        } else {
            return testsWaitingSearch;
        }
    }

    return (
        <React.Fragment>
            <PopupLoading trigger={triggerLoadingPopup} />
            <div className="Home_wrapper-exam2">
                <div className={`SectionList_wrapper2 ${displayResultTest}`} style={{ 'marginBottom': 50 }}>
                    <div className="SectionList_headingWrap2">
                        <h2 className="SectionList_heading2">Bài thi tìm kiếm</h2>
                    </div>
                    <div className="SectionList_bodyWrap2">
                        <ExamListSearch tests={displayTestResult()} />
                    </div>
                </div>
                <div className="SectionList_wrapper2">
                    <div className="SectionList_headingWrap2">
                        <h2 className="SectionList_heading2">Bài thi sắp diễn ra</h2>
                    </div>
                    <div className="SectionList_bodyWrap2">
                        {/* <ExamList tests={displayTestWaiting()} /> */}
                        <ExamList tests={testsWaiting} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Exam
