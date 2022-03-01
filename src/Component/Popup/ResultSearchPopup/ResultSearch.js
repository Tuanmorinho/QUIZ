import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../Css/ResultSearchPage.css';
import APP_CONSTANTS from '../../../Constants/appConstants';

function ResultSearch(props) {

    const [isWaiting, setIsWaiting] = useState(false);
    const [isTookPlace, setIsTookPlace] = useState(false);
    const [isExam, setIsExam] = useState(false);

    useEffect(() => {
        const checkResult = () => {
            if (props.testResult && props.testResult.status === 'waiting') {
                setIsWaiting(true);
            } else {
                setIsWaiting(false);
            }
            if (props.testResult && props.testResult.status === 'took_place') {
                setIsTookPlace(true);
            } else {
                setIsTookPlace(false);
            }
            if (props.examResult && props.examResult.examCode !== null) {
                setIsExam(true);
            } else {
                setIsExam(false);
            }
        }

        checkResult();
    }, [props.testResult, props.examResult])

    return (props.trigger) ? (
        <div className='popupSearch'>
            <div className='popupSearch-inner'>
                <div className='result-of'>
                    <span className="material-icons icon-resultSearch"> search </span>
                    <label>Kết quả cho ID: '<span>{props.valueInput}</span>'</label>
                </div>
                <ConditionRender triggWaiting={isWaiting} triggTookPlace={isTookPlace} triggExam={isExam}>{props}</ConditionRender>
            </div>
        </div>
    ) : '';
}

function ConditionRender(props) {
    if (props.triggWaiting && props.triggExam) {
        return (
            <>
                <ResultTest>{props.children}</ResultTest>
                <ResultExam>{props.children}</ResultExam>
            </>
        )
    }
    if (props.triggWaiting) {
        return <ResultTest>{props.children}</ResultTest>
    }
    if (props.triggTookPlace) {
        return <ResultGrade>{props.children}</ResultGrade>
    }
    if (props.triggExam) {
        return <ResultExam>{props.children}</ResultExam>
    } else {
        return ''
    }
}

function ResultTest(props) {
    return (
        <div className='result_wrapper'>
            <div className='result_wrapper-header'>
                <label>BÀI THI</label>
                <Link
                    style={{
                        'textDecorationLine': 'none',
                        'color': 'gray'
                    }}
                    to={{
                        pathname: '/test',
                        search: `p=${props.children.valueInput}`
                    }}
                    onClick={() => props.children.clearText()}
                ><p className='link-searchPage'>Xem thêm</p></Link>
            </div>
            <hr width="100%" align="center" />
            <div className='result'>
                <ResultTestChild data={props.children.testResult} data2={props.children.examResult} clearText={props.children.clearText}/>
            </div>
        </div>
    )
}

function ResultGrade(props) {
    return (
        <div className='result_wrapper'>
            <div className='result_wrapper-header'>
                <label>BÀI ĐÃ THI</label>
                <Link
                    style={{
                        'textDecorationLine': 'none',
                        'color': 'gray'
                    }}
                    to={{
                        pathname: '/grade',
                        search: `p=${props.children.valueInput}`
                    }}
                    onClick={() => props.children.clearText()}
                ><p className='link-searchPage'>Xem thêm</p></Link>
            </div>
            <hr width="100%" align="center" />
            <div className='result'>
                <ResultGradeChild data={props.children.testResult} data2={props.children.examResult} clearText={props.children.clearText} />
            </div>
        </div>
    )
}

function ResultExam(props) {
    return (
        <div className='result_wrapper'>
            <div className='result_wrapper-header'>
                <label>GHI DANH</label>
                <Link
                    style={{
                        'textDecorationLine': 'none',
                        'color': 'gray'
                    }}
                    to={{
                        pathname: '/join',
                        search: `p=${props.children.valueInput}`
                    }}
                    onClick={() => props.children.clearText()}
                ><p className='link-searchPage'>Xem thêm</p></Link>
            </div>
            <hr width="100%" align="center" />
            <div className='result'>
                <ResultExamChild data={props.children.examResult} clearText={props.children.clearText} />
            </div>
        </div>
    )
}

function ResultTestChild({ data, data2, clearText }) {
    return (
        <Link
            style={{
                'textDecorationLine': 'none',
                'color': 'gray'
            }}
            to={{
                pathname: '/test',
                search: `p=${data2.examCode}`
            }}
            onClick={() => clearText('')}
        >
            <section className="Exam_examItem4">
                <div className="examItem_wrapper4">
                    <div className="green_retangle4"></div>
                    <div className="item_label-red4">
                        <label>Mã bài thi:&ensp;<span>{data.id}</span></label>
                        <h1>{data.title}&ensp;-&ensp;{data2.examCode}</h1>
                    </div>
                    <div className="item_infomation4">
                        <div>
                            <span className="material-icons icon_teacher4"> account_box </span>
                            <h5>{data.professor}</h5>
                        </div>
                        <div>
                            <span className="material-icons icon_timer4"> alarm </span>
                            <label className="font_weight-bold4">{data.time}&nbsp;phút</label>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    );
}

function ResultGradeChild({ data, data2, clearText }) {
    return (
        <Link
            style={{
                'textDecorationLine': 'none',
                'color': 'gray'
            }}
            to={{
                pathname: '/grade',
                search: `p=${data2.examCode}`
            }}
            onClick={() => clearText('')}
        >
            <section className="Exam_examItem4">
                <div className="examItem_wrapper4">
                    <div className="green-orange-gradient_retangle2"></div>
                    <div className="item_label-red4">
                        <label>Mã bài thi:&ensp;<span>{data.id}</span></label>
                        <h1>{data.title}&ensp;-&ensp;{data2.examCode}</h1>
                    </div>
                    <div className="item_infomation4">
                        <div>
                            <span className="material-icons icon_teacher4"> account_box </span>
                            <h5>{data.professor}</h5>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    );
}

function ResultExamChild({ data, clearText }) {
    return (
        <Link
            style={{
                'textDecorationLine': 'none',
                'color': 'gray'
            }}
            to={{
                pathname: '/join',
                search: `p=${data.examCode}`
            }}
            onClick={() => clearText('')}
        >
            <section className="Exam_examItem4">
                <div className="examItem_wrapper4">
                    <div className="green_retangle6"></div>
                    <div className="item_label-red4">
                        <label>Mã kì thi:&ensp;<span>{data.examCode}</span></label>
                        <h1>{data.title}&ensp;</h1>
                    </div>
                    <div className="item_infomation4">
                        <div>
                            <span className="material-icons icon_teacher4"> account_box </span>
                            <h5>{data.professor}</h5>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    );
}

export default ResultSearch;