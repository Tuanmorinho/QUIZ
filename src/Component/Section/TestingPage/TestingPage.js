import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import '../../../Css/TestingPage.css'
import ContentTestingPage from './ContentTestingPage';
import SideBarTestingPage from './SideBarTestingPage'

import { questions } from '../../MockupData';
//import { Route, Switch } from 'react-router-dom';

function TestingPage() {

    const [tests, setTests] = useState([]);
    const [test, setTest] = useState(questions[0]);
    const [index, setIndex] = useState(1);
    const [choosedCount, setChoosedCount] = useState(0);

    let idStore = useRef([]);
    let idStore2 = useRef([]);
    let idAnswerChoiceFalse = useRef([]);

    // 0: unchoose - xám
    // 1: selected - cam
    // 2: choosed  - xanh lá

    useEffect(() => {
        setTests(questions);
    }, [])

    const getIDListQuestion = (value) => {
        for (var i = 0; i < tests.length; i++) {
            if (tests[i].idQuestion === value) {
                setTest(tests[i]);
                setIndex(i + 1);
            }
        }
    }

    const submit = () => {
        console.log(tests);
    }

    const getChecked = (id, question_choice) => {
        if (!idStore.current.includes(id)) {
            idStore.current = [...(idStore.current || []), id];
        }

        if (test.typeQuestion === 1) {
            idAnswerChoiceFalse.current = question_choice.filter(item => item.your_choice === true);
            if (idAnswerChoiceFalse.current.length === 0 && !idStore2.current.includes(id)) {
                idStore.current = idStore.current.filter(item => item !== id);
            }
        }

        setChoosedCount(idStore.current.length);
    }

    return (
        <div className="App_withSidebar">
            <div className="App_sidebarWrap">
                <SideBarTestingPage listQuestions={tests} getIndex={getIDListQuestion} countCheck={choosedCount} idCss={idStore.current} submit={submit} />
                <div className="App_withSidebarContent">
                    <section className="Section_content">
                        <ContentTestingPage question={test} index={index} checked={getChecked} />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default TestingPage;
