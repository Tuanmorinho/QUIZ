import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../../../Css/Join.css';
import JoinList from './JoinList/JoinList';
import JoinListSearch from './JoinListSearch/JoinListSearch';
import TestApi from '../../../../API/testApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';
import ExamApi from '../../../../API/examApi';
import PopupLoading from '../../../Popup/PopupLoading/PopupLoading';

function Join({ getLocation }) {

    const [joinedExam, setJoinedExam] = useState([]);
    const [searchExam, setSearchExam] = useState([]);

    const [displayResultExam, setDisplayResultExam] = useState('disableResult');

    const [triggerLoadingPopup, setTriggerLoadingPopup] = useState(true);

    let location = useLocation();
    useEffect(() => {
        getLocation(location.pathname);

        const resultExamSearch = async () => {
            if (new URLSearchParams(location.search).get("p")) {
                setTriggerLoadingPopup(true);
                try {
                    const resultExam = await ExamApi.searchExam(new URLSearchParams(location.search).get("p"));
                    if (resultExam) {
                        setTriggerLoadingPopup(false);
                        localStorage.removeItem(APP_CONSTANTS.INF_EXAM_SEARCH);
                        localStorage.setItem(APP_CONSTANTS.INF_EXAM_SEARCH, JSON.stringify(resultExam));
                        setSearchExam(resultExam)
                    }
                } catch (error) {
                    console.log('error search: ', error);
                }
                setDisplayResultExam('');
            } else {
                setDisplayResultExam('disableResult');
            }
        }

        const fetchAllTestForExam = async () => {
            setTriggerLoadingPopup(true);
            try {
                const resTestWaiting = await TestApi.getTestByStatus('waiting');
                const resTestTookPlace = await TestApi.getTestByStatus('took_place');

                if (resTestWaiting && resTestTookPlace) {
                    setTriggerLoadingPopup(false);
                    localStorage.removeItem(APP_CONSTANTS.INF_EXAM_JOINED);
                    localStorage.setItem(APP_CONSTANTS.INF_EXAM_JOINED, JSON.stringify(resTestWaiting.concat(resTestTookPlace)));
                    setJoinedExam(resTestWaiting.concat(resTestTookPlace));
                }
            } catch (error) {
                console.log('error fetch test: ', error);
            }
        }

        resultExamSearch();
        fetchAllTestForExam();
    }, [getLocation, location.pathname]);


    const displayExamJoined = () => {
        if (localStorage.getItem(APP_CONSTANTS.INF_EXAM_JOINED)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.INF_EXAM_JOINED));
        } else {
            return joinedExam;
        }
    }

    const displayExamSearch = () => {
        if (localStorage.getItem(APP_CONSTANTS.INF_EXAM_SEARCH)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.INF_EXAM_SEARCH));
        } else {
            return searchExam;
        }
    }


    return (
        <React.Fragment>
            <PopupLoading trigger={triggerLoadingPopup} />
            <div className="Home_wrapper-exam5">
                <div className={`SectionList_wrapper5 ${displayResultExam}`} style={{ 'marginBottom': 50 }}>
                    <div className="SectionList_headingWrap5">
                        <h2 className="SectionList_heading5">Kì thi tìm kiếm</h2>
                    </div>
                    <div className="SectionList_bodyWrap5">
                        <JoinListSearch exams={displayExamSearch()} />
                    </div>
                </div>
                <div className="SectionList_wrapper5">
                    <div className="SectionList_headingWrap5">
                        <h2 className="SectionList_heading5">Kì thi đã tham gia</h2>
                    </div>
                    <div className="SectionList_bodyWrap5">
                        <JoinList exams={displayExamJoined()} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Join;
