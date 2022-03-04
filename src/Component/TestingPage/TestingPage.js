import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import '../../Css/TestingPage.css'
import ContentTestingPage from './ContentTestingPage';
import SideBarTestingPage from './SideBarTestingPage'
import ResultPage from '../Popup/ResultTestPage/ResultTestPage';
import { useLocation } from 'react-router-dom';

import TestApi from '../../API/testApi';
import PopupLoading from '../Popup/PopupLoading/PopupLoading';
import ErrorPopup from '../Popup/ErrorPopup/ErrorPopup';

function TestingPage({ getLocation }) {

    const [tests, setTests] = useState([]);
    const [test, setTest] = useState({});
    const [testInf, setTestInf] = useState({
        "id": "",
        "start": "",
        "end_test": "",
        "time": "",
        "real_time": ""
    });
    const [testResult, setTestResult] = useState();
    const [index, setIndex] = useState();
    const [choosedCount, setChoosedCount] = useState(0);
    const [showResultPage, setShowResultPage] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [triggerErrorPopup, setTriggerErrorPopup] = useState(false);

    let idStore = useRef([]);
    let idStore2 = useRef([]);
    let idAnswerChoiceFalse = useRef([]);
    let answersSubmit = [];

    let location = useLocation();

    useEffect(() => {
        getLocation(location.pathname);

        let query = new URLSearchParams(location.search);

        const fetchOpenTest = async () => {
            try {
                const response = await TestApi.openTest(query.get("id"));
                if (response) {
                    const responseTestInf = {
                        "id": response.id,
                        "start": response.start,
                        "end_test": response.end_test,
                        "time": response.time,
                        "real_time": response.real_time,
                        "status": response.status
                    };
                    setTestInf(responseTestInf);
                    setTests(response.questions);
                }
            } catch (error) {
                console.log('open test error: ', error);
            }
        }
        fetchOpenTest();

    }, []);

    const getIDListQuestion = (value) => {
        if (tests.length !== 0) {
            for (var i = 0; i < tests.length; i++) {
                if (tests[i].id === value) {
                    setTest(tests[i]);
                    setIndex(i + 1);
                }
            }
        }
    }

    const submit = async () => {
        for (var i = 0; i < tests.length; i++) {
            for (var j = 0; j < tests[j].answers.length; j++) {
                answersSubmit = [...answersSubmit, tests[i].answers[j]];
            }
        }

        let query = new URLSearchParams(location.search);
        
        setShowLoading(true);
        try {
            const response = await TestApi.submitTest(query.get("id"), answersSubmit);
            if (response) {
                setTestResult(response);
                setShowLoading(false);
                setShowResultPage(true);
            } else {
                setShowLoading(false);
                setTriggerErrorPopup(true);
            }
        } catch (error) {
            setShowLoading(false);
            setTriggerErrorPopup(true);
            console.log('error submit test: ', error);
        }
    }

    const getChecked = (id, question_choice) => {
        if (!idStore.current.includes(id)) {
            idStore.current = [...(idStore.current || []), id];
        }

        if (test.type === 1) {
            idAnswerChoiceFalse.current = question_choice.filter(item => item.choose === true);
            if (idAnswerChoiceFalse.current.length === 0 && !idStore2.current.includes(id)) {
                idStore.current = idStore.current.filter(item => item !== id);
            }
        }

        setChoosedCount(idStore.current.length);
    }

    if (tests.length !== 0) {
        return (
            showResultPage ? <ResultPage>{testResult}</ResultPage> :
                <React.Fragment>
                    <PopupLoading trigger={showLoading} />
                    <ErrorPopup trigger={triggerErrorPopup} setTrigger={setTriggerErrorPopup}>
                        <div style={{
                            'display': 'flex',
                            'alignItems': 'center'
                        }}>
                            <span className="material-icons" style={{
                                'color': '#FC4F4F',
                                'fontSize': 38
                            }}> error </span>
                            <h1 style={{
                                'fontSize': 24,
                                'marginLeft': 10,
                                'marginTop': 2.5
                            }}>Lỗi</h1>
                        </div>
                        <p style={{ 'fontSize': 19 }}>Lỗi nộp bài thi, vui lòng thử lại</p>
                    </ErrorPopup>
                    <div className="App_withSidebar">
                        <div className="App_sidebarWrap">
                            <SideBarTestingPage testInf={testInf} listQuestions={tests} getIndex={getIDListQuestion} countCheck={choosedCount} idCss={idStore.current} indexCss={index} submit={submit} />
                            <div className="App_withSidebarContent">
                                <section className="Section_content">
                                    <ContentTestingPage key={index} question={test} index={index} checked={getChecked} />
                                </section>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        )
    } else {
        return <PopupLoading trigger={true} />
    }
}

export default TestingPage;