import React, { useEffect, useState } from 'react';
import ExamListChild from './ExamListChild';
import TestApi from '../../../../API/testApi';

function ExamList() {

    const [tests, setTests] = useState([
        {
            "id": "",
            "title": "",
            "startTime": "",
            "realTime": "",
            "submissionTime": "",
            "noq": "10",
            "correctAnswer": "",
            "score": "",
            "status": "",
            "time": "",
            "submittionTime": ""
        }
    ]);

    useEffect(() => {
        const fetchTestWaiting = async () => {
            try {
                const resTestWaiting = await TestApi.getTestByStatus('waiting');
                if (resTestWaiting) {
                    setTests(resTestWaiting);
                }
            } catch (error) {
                console.log('error fetch Test waiting: ', error);
            }
        }

        fetchTestWaiting();
    }, [])

    return (
        tests.map((test, index) => (
            <ExamListChild key={index} testContent={test} />
        ))
    )
}

export default ExamList
