import React from 'react';
import ExamListChild from './ExamListChild';

function ExamList({tests}) {
    return (
        tests.map((testWaiting, index) => (
            <ExamListChild key={index} testWaitingContent={testWaiting} />
        ))
    )
}

export default ExamList
