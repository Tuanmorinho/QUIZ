import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExamListH from './ExamListHome/ExamListH'
import GradeListH from './GradeListHome/GradeListH'

import { tests } from '../../../../../resrouces/MockupData';

function HomeContent({ route }) {

    const [test, setTest] = useState(tests);
    const [grade, setGrade] = useState([]);

    useEffect(() => {
        const getData = () => {
            for (let i = 0; i < tests.length; i++) {
                if (tests[i].status === 0 || tests[i].status === 1) {
                    setTest([tests[i]]);
                } else {
                    setGrade([tests[i]]);
                }
            }   
        }

        getData();
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
                    <ExamListH tests={test} />
                </div>
            </div>

            <div className="SectionList_wrapper">
                <div className="SectionList_headingWrap">
                    <h2 className="SectionList_heading">Bài đã thi</h2>
                    <Link to='/grade' onClick={() => { route(1) }}>Xem tất cả <span className="material-icons icon_seeAll">
                        chevron_right </span></Link>
                </div>
                <div id="hoover_scrollButton2" className="SectionList_bodyWrap">
                    <GradeListH grades={grade} />
                </div>
            </div>
        </div>
    )
}

export default HomeContent
