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
        <div class="Home_wrapper-exam2">
            <div class="SectionList_wrapper2">
                <div class="SectionList_headingWrap2">
                    <h2 class="SectionList_heading2">Bài thi sắp diễn ra</h2>
                </div>
                <div class="SectionList_bodyWrap2">
                    <ExamList />
                </div>
            </div>
        </div>
    )
}

export default Exam
