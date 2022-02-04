import React from 'react'
import GradeListHChild from './GradeListHChild'

function GradeListH({ grades }) {
    return (
        <div className="SectionList_body">
            {grades.map((grade, index) => (
                <GradeListHChild key={index} gradeContent={grade} />
            ))}
        </div>
    )
}

export default GradeListH
