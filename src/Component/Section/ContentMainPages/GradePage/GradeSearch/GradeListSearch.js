import React from 'react';
import GradeListChildSearch from './GradeListChildSearch';

function GradeListSearch({ grades }) {
    return (
        <GradeListChildSearch gradeContent={grades} />
    );
}

export default GradeListSearch;