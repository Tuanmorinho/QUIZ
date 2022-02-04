import React from 'react'
import ExamListHChild from './ExamListHChild'

function ExamListH({ tests }) {
    return (
        <div className="SectionList_body">
            {tests.map((test, index) => (
                <ExamListHChild key={index} testContent={test} />
            ))}
        </div>
    )
}

export default ExamListH
