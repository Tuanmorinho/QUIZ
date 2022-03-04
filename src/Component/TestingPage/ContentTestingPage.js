import React, { useEffect, useState } from 'react'

function ContentTestingPage({ question, index, checked }) {

    const [type, setType] = useState("radio");
    const [typeQuestionContent, setTypeQuestionContent] = useState('')

    const [selectedCheckBox, setSelectedCheckBox] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState([{
        idQuestion: '',
        idAnswer: ''
    }]);

    useEffect(() => {
        const typeQuestion = () => {
            if (question.type === 1) {
                setType("checkbox");
                setTypeQuestionContent('Chọn một hoặc nhiều đáp án')
            } else {
                setType("radio");
                setTypeQuestionContent('Chọn một đáp án')
            }
        }

        typeQuestion();
    }, [question.type]);


    const handleChecked = (idAnswerSelected) => {
        for (let i = 0; i < question.answers.length; i++) {
            if (question.answers[i].id === idAnswerSelected && question.answers[i].choose === false) {
                question.answers[i].choose = true;
                break;
            }
            if (question.answers[i].id === idAnswerSelected && question.answers[i].choose === true) {
                question.answers[i].choose = false;
                break;
            }
        }
        if (type === "checkbox") {
            setSelectedCheckBox(prev => {
                const isSelected = selectedCheckBox.includes(idAnswerSelected);
                if (isSelected) {
                    return selectedCheckBox.filter(item => item !== idAnswerSelected);
                } else {
                    return [...prev, idAnswerSelected]
                }
            });
        }

        if (type === "radio") {
            for (let i = 0; i < question.answers.length; i++) {
                question.answers[i].choose = false;
                if (question.answers[i].id === idAnswerSelected) {
                    question.answers[i].choose = true;
                    setSelectedRadio(prev => [...prev, {
                        idQuestion: question.id,
                        idAnswer: idAnswerSelected
                    }]);
                }
            }
        }

        checked(question.id, question.answers);
    }

    if (question && Object.keys(question).length !== 0) {
        if (type === "radio") {
            return (
                <div className="QuestionContent_wrapper">
                    <div className="Question_wrapper">
                        <div className="Question">
                            <h3>Câu {index}:&ensp;<span>({typeQuestionContent})</span></h3>
                            <br />
                            <label>{question.title}</label>
                        </div>
                        <div className="Answer">
                            <div className="answer_items">
                                {
                                    Object.entries(question).length !== 0 ? question.answers.map((answer, index) => (
                                        <div key={index}>
                                            <input type="radio"
                                                checked={answer.choose === true}
                                                onChange={() => { handleChecked(answer.id) }}
                                            />&emsp;<label>{answer.content}</label>
                                        </div>
                                    )) : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="Image_wrapper">
                        <div className="image_place">
                            <span className="material-icons-outlined"> image </span>
                        </div>
                    </div>
                </div>
            )
        }

        if (type === "checkbox") {
            return (
                <div className="QuestionContent_wrapper">
                    <div className="Question_wrapper">
                        <div className="Question">
                            <h3>Câu {index}:&ensp;<span>(typeQuestionContent)</span></h3>
                            <br />
                            <label>{question.title}</label>
                        </div>
                        <div className="Answer">
                            <div className="answer_items">
                                {
                                    Object.entries(question).length !== 0 ? question.answers.map((answer, index) => (
                                        <div key={index}>
                                            <input type="checkbox"
                                                checked={selectedCheckBox.includes(answer.id)}
                                                onChange={() => { handleChecked(answer.id) }}
                                            />&emsp;<label>{answer.content}</label>
                                        </div>
                                    )) : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="Image_wrapper">
                        <div className="image_place">
                            <span className="material-icons-outlined"> image </span>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className="QuestionContent_wrapper2">
                <h2 className="guide">Chọn câu hỏi để hiển thị</h2>
            </div>
        )
    }
}

export default ContentTestingPage