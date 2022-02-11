import React, { useEffect, useState } from 'react';
import '../../../../Css/Grade.css';
import { useLocation } from 'react-router-dom';
import GradeList from './GradeList';
import TestApi from '../../../../API/testApi';
import APP_CONSTANTS from '../../../../Constants/appConstants';

function Grade({getLocation}) {

    const [testsTookPlace, setTestsTookPlace] = useState([]);

    let location = useLocation();

    useEffect(() => {
        getLocation(location.pathname);

        const fetchTestTookPlace = async () => {
            try {
                const resTestsTookPlace = await TestApi.getTestByStatus('took_place');
                if (resTestsTookPlace) {
                    localStorage.removeItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_G);
                    localStorage.setItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_G, JSON.stringify(resTestsTookPlace));
                    setTestsTookPlace(resTestsTookPlace);
                }
            } catch (error) {
                console.log('error fetch test waiting: ', error);
            }
        }

        fetchTestTookPlace();
    },[getLocation, location.pathname]);

    const displayTestTookPlace = () => {
        if (localStorage.getItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_G)) {
            return JSON.parse(localStorage.getItem(APP_CONSTANTS.TOOK_PLACE_TEST_INF_G));
        } else {
            return testsTookPlace;
        }
    }

    return (
        <div className="Home_wrapper-grade">
            <div className="SectionList_wrapper3">
                <div className="SectionList_headingWrap3">
                    <h2 className="SectionList_heading3">Bài đã thi</h2>
                </div>
                <div className="SectionList_bodyWrap3">
                    <GradeList grades={ displayTestTookPlace()} />
                </div>
            </div>
        </div>
    )
}

export default Grade
