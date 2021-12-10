import React from 'react'
import { useState, useEffect } from 'react';
import '../../../Css/TestingPage.css'
import ContentTestingPage from './ContentTestingPage';
import SideBarTestingPage from './SideBarTestingPage'

import { questions } from '../../MockupData';

function TestingPage() {

    const [tests, setTests] = useState([]);
    const [test, setTest] = useState(questions[0]);

    useEffect(() => {
        setTests(questions);
    },[])

    const getIndexListQuestion = (value) => {
        for(var i = 0; i < tests.length; i++) {
            if(tests[i].idQuestion === value) {
                setTest(tests[i]);
            }
        }
    }

    return (
        <div className="App_withSidebar">
            <div className="App_sidebarWrap">
                <SideBarTestingPage listQuestions={tests} getIndex={getIndexListQuestion} />
                <div className="App_withSidebarContent">
                    <section className="Section_content">
                        <ContentTestingPage question={test} />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default TestingPage;
