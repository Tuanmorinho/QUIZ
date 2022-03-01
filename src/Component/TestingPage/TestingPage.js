import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import '../../Css/TestingPage.css'
import ContentTestingPage from './ContentTestingPage';
import SideBarTestingPage from './SideBarTestingPage'
import ResultPage from '../Popup/ResultTestPage/ResultTestPage';
import { useLocation } from 'react-router-dom';

import TestApi from '../../API/testApi';
import APP_CONSTANTS from '../../Constants/appConstants';
import PopupLoading from '../Popup/PopupLoading/PopupLoading';

function TestingPage({ getLocation }) {

    const [tests, setTests] = useState([]);
    const [test, setTest] = useState({});
    const [index, setIndex] = useState();
    const [choosedCount, setChoosedCount] = useState(0);
    const [showResultPage, setShowResultPage] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    let idStore = useRef([]);
    let idStore2 = useRef([]);
    let idAnswerChoiceFalse = useRef([]);

    let location = useLocation();

    useEffect(() => {
        getLocation(location.pathname);

        let query = new URLSearchParams(location.search);

        const fetchOpenTest = async () => {
            try {
                const response = await TestApi.openTest(query.get("id"));
                if (response) {
                    setTests(response);
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
                if (tests[i].questionId === value) {
                    setTest(tests[i]);
                    setIndex(i + 1);
                }
            }
        }
    }

    const submit = async () => {
        let query = new URLSearchParams(location.search);
        try {
            setShowLoading(true);
            const response = await TestApi.submitTest(query.get("id"), tests);
            if (response) {
                setShowLoading(false);
                setShowResultPage(true);
            }
        } catch (error) {
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
            showResultPage ? <ResultPage /> :
                <React.Fragment>
                    <PopupLoading trigger={showLoading} />
                    <div className="App_withSidebar">
                        <div className="App_sidebarWrap">
                            <SideBarTestingPage listQuestions={tests} getIndex={getIDListQuestion} countCheck={choosedCount} idCss={idStore.current} indexCss={index} submit={submit} />
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