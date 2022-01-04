import React, { useEffect } from 'react'
import '../../../../Css/Exam.css';
import { useLocation } from 'react-router-dom';
import ExamList from './ExamList';

function Exam({ getLocation }) {

    let location = useLocation();
    useEffect(() => {
        getLocation(location.pathname);
    }, [getLocation, location.pathname]);

    return (
        <div className="Home_wrapper-exam2">
            <div className="SectionList_wrapper2">
                <div className="SectionList_headingWrap2">
                    <h2 className="SectionList_heading2">Bài thi sắp diễn ra</h2>
                </div>
                <div className="SectionList_bodyWrap2">
                    <ExamList />
                </div>
            </div>
        </div>
    )
}

export default Exam
