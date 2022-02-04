import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExamListH from './ExamListHome/ExamListH'
import GradeListH from './GradeListHome/GradeListH'
import TestApi from '../../../../../API/testApi';

function HomeContent({ route }) {

    const [testWaiting, setTestWaiting] = useState([
        {
            "id": "",
            "title": "",
            "startTime": "",
            "realTime": "",
            "submissionTime": "",
            "noq": "",
            "correctAnswer": "",
            "score": "",
            "status": "",
            "time": "",
            "submittionTime": ""
        }
    ]);
    // const [testGoingOn, setTestGoingOn] = useState({'1':'0'});
    const [testTookPlace, setTestTookPlace] = useState([
        {
            "id": "",
            "title": "",
            "startTime": "",
            "realTime": "",
            "submissionTime": "",
            "noq": "",
            "correctAnswer": "",
            "score": "",
            "status": "",
            "time": "",
            "submittionTime": ""
        }
    ]);

    useEffect(() => {
        const fetchTestWaiting = async () => {
            try {
                const resTestWaiting = await TestApi.getTestByStatus('waiting');
                if (resTestWaiting) {
                    setTestWaiting(resTestWaiting);
                }
            } catch (error) {
                console.log('error fetch Test waiting: ', error);
            }
        }

        // const fetchTestGoingOn = async () => {
        //     try {
        //         const resTestGoingOn = await TestApi.getTestByStatus('going_on');
        //         if (resTestGoingOn) {
        //             setTestGoingOn(resTestGoingOn);
        //         }
        //     } catch (error) {
        //         console.log('error fetch Test going_on: ', error);
        //     }
        // }

        const fetchTestTookPlace = async () => {
            try {
                const resTestTookPlace = await TestApi.getTestByStatus('took_place');
                if (resTestTookPlace) {
                    setTestTookPlace(resTestTookPlace);
                }
            } catch (error) {
                console.log('error fetch Test took_place: ', error);
            }

        }


        fetchTestWaiting();
        // fetchTestGoingOn();
        fetchTestTookPlace();
    }, [])

    return (
        <div className="Home_wrapper-student">
            <div className="SectionList_wrapper">
                <div className="SectionList_headingWrap">
                    <h2 className="SectionList_heading">Bài thi sắp diễn ra</h2>
                    <Link to='/exam' onClick={() => { route(0) }}>Xem tất cả <span className="material-icons icon_seeAll">
                        chevron_right </span></Link>
                </div>
                <div id="scrollHorizontally" className="SectionList_bodyWrap">
                    <ExamListH tests={testWaiting} />
                </div>
            </div>

            <div className="SectionList_wrapper">
                <div className="SectionList_headingWrap">
                    <h2 className="SectionList_heading">Bài đã thi</h2>
                    <Link to='/grade' onClick={() => { route(1) }}>Xem tất cả <span className="material-icons icon_seeAll">
                        chevron_right </span></Link>
                </div>
                <div id="hoover_scrollButton2" className="SectionList_bodyWrap">
                    <GradeListH grades={testTookPlace} />
                </div>
            </div>
        </div>
    )
}

export default HomeContent
