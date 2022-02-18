import React from 'react';
import ExamListChildSearch from './ExamListChildSearch';

function ExamListSearch({ tests }) {

    return (
        <ExamListChildSearch testWaitingContent={tests} />
    )
}

export default ExamListSearch
