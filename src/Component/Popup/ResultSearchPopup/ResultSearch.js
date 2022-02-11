import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Css/ResultSearchPage.css';

function ResultSearch(props) {
    return (props.trigger) ? (
        <div className='popupSearch'>
            <div className='popupSearch-inner'>
                <div className='result-of'>
                    <span className="material-icons icon-resultSearch"> search </span>
                    <label>Kết quả cho ID: '<span>{props.valueInput}</span>'</label>
                </div>
                <ConditionRender>{props}</ConditionRender>
            </div>
        </div>
    ) : '';
}

function ConditionRender(props) {
    const isWaiting = props.children.testResult && props.children.testResult.status === 'waiting';
    const isPending = props.children.testResult && props.children.testResult.status === 'pending';
    const isTookPlace = props.children.testResult && props.children.testResult.status === 'took_place';
    const isExam = props.children.testExam;


    if (isWaiting || isPending) {
        return <ResultTest>{props.children}</ResultTest>
    } else if (isTookPlace) {
        return <ResultGrade>{props.children}</ResultGrade>
    } else if (isExam) {
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
                <ResultTestChild data={props.children.testResult} />
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
                <ResultGradeChild data={props.children.testResult} />
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

            </div>
        </div>
    )
}

function ResultTestChild({ data }) {

    // const is= data.status === '';

    return (
        <section className="Exam_examItem4">
            <div className="examItem_wrapper4">
                <div className="green_retangle4"></div>
                <div className="item_label-red4">
                    <label>Mã bài thi:&ensp;<span>{data.id}</span></label>
                    <h1>{data.title}&ensp;-&ensp;{data.class}</h1>
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
                {/* <>
                    {
                        isWaitingTest ? (<button>Thi</button>) : (<button>Join</button>)
                    }
                </> */}
            </div>
        </section>
    );
}

function ResultGradeChild({ data }) {
    return (
        <section className="Exam_examItem4">
            <div className="examItem_wrapper4">
                <div className="green-orange-gradient_retangle2"></div>
                <div className="item_label-red4">
                    <label>Mã bài thi:&ensp;<span>{data.id}</span></label>
                    <h1>{data.title}&ensp;-&ensp;{data.class}</h1>
                </div>
                <div className="item_infomation4">
                    <div>
                        <span className="material-icons icon_teacher4"> account_box </span>
                        <h5>{data.professor}</h5>
                    </div>
                </div>
                <div className="bg_gradeInfomation-orange2">
                    <div className="grade_itemExam2">
                        <h1>{data.correctAnswer}/{data.noq}<br/>({data.score}%)</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResultSearch;