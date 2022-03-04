import React, { useEffect, useState } from 'react';
import '../../../../Css/Grade.css';
import { useLocation } from 'react-router-dom';
import GradeList from './GradeList/GradeList';
import PopupLoading from '../../../Popup/PopupLoading/PopupLoading';
import TestApi from '../../../../API/testApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';
import GradeListSearch from './GradeSearch/GradeListSearch';

function Grade({ getLocation }) {

    const [testsTookPlace, setTestsTookPlace] = useState([]);
    const [testsTookPlaceSearch, setTestsTookPlaceSearch] = useState([]);
    const [displayResultTestTookPlace, setDisplayResultTestTookPlace] = useState('disableResult');

    const [triggerLoadingPopup, setTriggerLoadingPopup] = useState(true);

    let location = useLocation();

    useEffect(() => {
        getLocation(location.pathname);

        const resultGradeSearch = async () => {
            if (new URLSearchParams(location.search).get("p")) {
                setTriggerLoadingPopup(true);
                try {
                    const resultGrade = await TestApi.searchTestByExamCode(new URLSearchParams(location.search).get("p"));
                    if (resultGrade) {
                        setTriggerLoadingPopup(false);
                        localStorage.removeItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_S);
                        localStorage.setItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_S, JSON.stringify(resultGrade));
                        setTestsTookPlaceSearch(resultGrade);
                    } else {
                        setTriggerLoadingPopup(false);
                    }
                } catch (error) {
                    setTriggerLoadingPopup(false);
                    console.log('error search: ', error);
                }
                setDisplayResultTestTookPlace('');
            } else {
                setDisplayResultTestTookPlace('disableResult');
            }
        }

        const fetchTestTookPlace = async () => {
            setTriggerLoadingPopup(true);
            try {
                const resTestsTookPlace = await TestApi.getTestByStatus('took_place');
                if (resTestsTookPlace) {
                    setTriggerLoadingPopup(false);
                    localStorage.removeItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_G);
                    localStorage.setItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_G, JSON.stringify(resTestsTookPlace));
                    setTestsTookPlace(resTestsTookPlace);
                } else {
                    setTriggerLoadingPopup(false);
                }
            } catch (error) {
                setTriggerLoadingPopup(false);
                console.log('error fetch test took place: ', error);
            }
        }

        resultGradeSearch();
        fetchTestTookPlace();
    }, [location.search]);

    const displayTestTookPlace = () => {
        if (localStorage.getItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_G)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_G));
        } else {
            return testsTookPlace;
        }
    }

    const displayTestTookPlaceResultSearch = () => {
        if (localStorage.getItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_S)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_S));
        } else {
            return testsTookPlaceSearch;
        }
    }

    return (
        <React.Fragment>
            <PopupLoading trigger={triggerLoadingPopup} />
            <div className="Home_wrapper-grade">
                <div className={`SectionList_wrapper3 ${displayResultTestTookPlace}`} style={{ 'marginBottom': 50 }}    >
                    <div className="SectionList_headingWrap3">
                        <h2 className="SectionList_heading3">Bài đã thi tìm kiếm</h2>
                    </div>
                    <div className="SectionList_bodyWrap3">
                        <GradeListSearch grades={displayTestTookPlaceResultSearch()} />
                    </div>
                </div>
                <div className="SectionList_wrapper3">
                    <div className="SectionList_headingWrap3">
                        <h2 className="SectionList_heading3">Bài đã thi</h2>
                    </div>
                    <div className="SectionList_bodyWrap3">
                        <GradeList grades={displayTestTookPlace()} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Grade
