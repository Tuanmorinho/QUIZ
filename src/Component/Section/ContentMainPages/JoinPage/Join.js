import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../../../Css/Join.css';
import JoinList from './JoinList';
import TestApi from '../../../../API/testApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';

function Join({ getLocation }) {

    const [joinedExam, setJoinedExam] = useState([]);

    let location = useLocation();
    useEffect(() => {
        getLocation(location.pathname);

        const fetchAllTestForExam = async () => {
            try {
                const resTestWaiting = await TestApi.getTestByStatus('waiting');
                const resTestTookPlace = await TestApi.getTestByStatus('took_place');
                
                if (resTestWaiting && resTestTookPlace) {
                    localStorage.removeItem(APP_CONSTANTS.INF_EXAM_JOINED);
                    localStorage.setItem(APP_CONSTANTS.INF_EXAM_JOINED, JSON.stringify(resTestWaiting.concat(resTestTookPlace)));
                    setJoinedExam(resTestWaiting.concat(resTestTookPlace));
                }
            } catch (error) {
                console.log('error fetch test: ', error);
            }
        }


        fetchAllTestForExam();
    }, [getLocation, location.pathname]);


    const displayExam = () => {
        if (localStorage.getItem(APP_CONSTANTS.INF_EXAM_JOINED)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.INF_EXAM_JOINED));
        } else {
            return joinedExam;
        }
    }


    return (
        <div className="Home_wrapper-exam5">
            <div className="SectionList_wrapper5">
                <div className="SectionList_headingWrap5">
                    <h2 className="SectionList_heading5">Kì thi đã tham gia</h2>
                </div>
                <div className="SectionList_bodyWrap5">
                    <JoinList exams={displayExam()} />
                </div>
            </div>
        </div>
    );
}

export default Join;
