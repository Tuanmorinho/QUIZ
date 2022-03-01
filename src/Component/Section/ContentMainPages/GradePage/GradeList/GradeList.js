import React from 'react';
import GradeListChild from './GradeListChild';

function GradeList({grades}) {
    return (
        grades.map((grade, index) => (
            <GradeListChild key={index} gradeContent={grade} />
        ))
    );
}

export default GradeList;
