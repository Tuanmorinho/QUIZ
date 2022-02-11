import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExamListH from './ExamListHome/ExamListH'
import GradeListH from './GradeListHome/GradeListH'
import TestApi from '../../../../../API/testApi';
import APP_CONSTANTS from '../../../../../Constants/appConstants';

function HomeContent({ route }) {

    const [testWaiting, setTestWaiting] = useState([]);
    const [testTookPlace, setTestTookPlace] = useState([]);

    useEffect(() => {
        let testWaitingStore = [];
        let testTookPlaceStore = [];

        const fetchAllTest = async () => {
            try {
                const resAllTest = await TestApi.getAllTest();
                if (resAllTest) {
                    for (let i = 0; i < resAllTest.length; i++) {
                        if (resAllTest[i].status === 'waiting') {
                            testWaitingStore = [...testWaitingStore, resAllTest[i]];
                            localStorage.removeItem(APP_CONSTANTS.WAITING_TEST_INF_H);
                            localStorage.setItem(APP_CONSTANTS.WAITING_TEST_INF_H, JSON.stringify(testWaitingStore));
                            setTestWaiting(testWaitingStore);
                        } else {
                            testTookPlaceStore = [...testTookPlaceStore, resAllTest[i]];
                            localStorage.removeItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_H);
                            localStorage.setItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_H, JSON.stringify(testTookPlaceStore));
                            setTestTookPlace(testTookPlaceStore);
                        }
                    }
                }
            } catch (error) {
                console.log('error fetch test: ', error);
            }
        }


        fetchAllTest();
    }, [])

    const displayTest = () => {
        if (localStorage.getItem(APP_CONSTANTS.WAITING_TEST_INF_H) && localStorage.getItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_H)) {
            return {
                'testsWaiting': JSON.parse(localStorage.getItem(APP_CONSTANTS.WAITING_TEST_INF_H)),
                'testsTookPlace': JSON.parse(localStorage.getItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_H))
            }
        } else {
            return {
                'testsWaiting': testWaiting,
                'testsTookPlace': testTookPlace
            };
        }
    }

    return (
        <div className="Home_wrapper-student">
            <div className="SectionList_wrapper">
                <div className="SectionList_headingWrap">
                    <h2 className="SectionList_heading">Bài thi sắp diễn ra</h2>
                    <Link to='/exam' onClick={() => { route(0) }}>Xem tất cả <span className="material-icons icon_seeAll">
                        chevron_right </span></Link>
                </div>
                <div id="scrollHorizontally" className="SectionList_bodyWrap">
                    <ExamListH tests={displayTest().testsWaiting} />
                </div>
            </div>

            <div className="SectionList_wrapper">
                <div className="SectionList_headingWrap">
                    <h2 className="SectionList_heading">Bài đã thi</h2>
                    <Link to='/grade' onClick={() => { route(1) }}>Xem tất cả <span className="material-icons icon_seeAll">
                        chevron_right </span></Link>
                </div>
                <div id="hoover_scrollButton2" className="SectionList_bodyWrap">
                    <GradeListH grades={displayTest().testsTookPlace} />
                </div>
            </div>
        </div>
    )
}

export default HomeContent
