import React, { useEffect, useState } from 'react'
import '../../../Css/TestingPage.css'

function SideBarTestingPage({ listQuestions, getIndex, active }) {

    let [choose, setChoose] = useState('status_select');

    useEffect(() => {
        const activeCSS = () => {
            if (active === 2) {
                setChoose('status_choosed');
            } else if (active === 1) {
                setChoose('status_select');
            } else {
                setChoose('status_unchoose');
            }
        };

        activeCSS();
    }, [active])

    let [choosedCount, setChoosedCount] = useState(0);

    const handleOnClickOrdinalNumQuestion = (idQuestionSelected) => {
        getIndex(idQuestionSelected);
    }

    const handleSubmit = () => {
        // submit bài thi ở đây
    }

    return (
        <div className="Sidebar_wrapperTest">
            <div className="Sidebar_ListTest">

                <div className="Testing_infor">
                    <div className="Infor_wrapper">
                        <label>Mã bài thi:&ensp;<span className="IDTest">654321</span></label>
                        <h3>Bài TH3 môn LTUDM - 63IT2</h3>
                        <div>
                            <span className="material-icons icon_teacher"> account_box </span>
                            <p>Giảng viên:&ensp;<span className="TeacherTest">Lê Đức Quang</span></p>
                        </div>
                    </div>
                </div>

                <div className="Testing_time_actions">
                    <div className="Time_Actions_wrapper">
                        <div className="time_wrapper">
                            <h4>Thời gian:&nbsp;<span>02</span>&nbsp;giờ&nbsp;<span>40</span>&nbsp;phút&nbsp;<span>12</span>&nbsp;giây</h4>
                        </div>
                        <div className="actions_wrapper">
                            <button className="status_unfinish" onClick={handleSubmit}>Nộp bài</button>
                        </div>
                    </div>
                </div>

                <div className="Testing_questionList">
                    <div className="QuestionList_wrapper">
                        <h4>Danh sách câu hỏi</h4>
                        <div className="ordinalNumQuestion_wrapper">
                            {
                                listQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        className={`ordinalNumQuestion_square ${choose}`}
                                        onClick={() => {handleOnClickOrdinalNumQuestion(question.idQuestion)}}
                                    >{index + 1}</button>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="Testing_countQuestion">
                    <div className="countQuestion_wrapper">
                        <h4>Tổng số câu:&ensp;<span className="sumQuestion">{listQuestions.length}</span></h4>
                        <h4>Số câu đã chọn:&ensp;<span className="choosedQuestion">{choosedCount}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarTestingPage
