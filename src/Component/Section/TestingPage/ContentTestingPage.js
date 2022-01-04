import React, { useEffect, useState } from 'react'
import '../../../Css/TestingPage.css'

function ContentTestingPage({ question, index, checked }) {

    const [type, setType] = useState("radio");
    const [selectedCheckBox, setSelectedCheckBox] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState([{
        idQuestion: '',
        idAnswer: ''
    }]);

    useEffect(() => {
        const typeQuestion = () => {
            if (question.typeQuestion === 1) {
                setType("checkbox");
            } else {
                setType("radio");
            }
        }

        typeQuestion();
    }, [question.typeQuestion]);

    const handleChecked = (idAnswerSelected) => {
        for (let i = 0; i < question.answers.length; i++) {
            if (question.answers[i].idAnswer === idAnswerSelected && question.answers[i].your_choice === false) {
                question.answers[i].your_choice = true;
                break;
            }
            if (question.answers[i].idAnswer === idAnswerSelected && question.answers[i].your_choice === true) {
                question.answers[i].your_choice = false;
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
                question.answers[i].your_choice = false;
                if (question.answers[i].idAnswer === idAnswerSelected) {
                    question.answers[i].your_choice = true;
                    setSelectedRadio(prev => [...prev, {
                        idQuestion: question.idQuestion,
                        idAnswer: idAnswerSelected
                    }]);
                }
            }
        }

        checked(question.idQuestion, question.answers);
    }

    if (type === "radio") {
        return (
            <div className="QuestionContent_wrapper">
                <div className="Question_wrapper">
                    <div className="Question">
                        <h3>Câu {index}:&ensp;<span>({question.typeQuestionContent})</span></h3>
                        <br />
                        <label>{question.question}</label>
                    </div>
                    <div className="Answer">
                        <div className="answer_items">
                            {
                                question.answers.map((answer, index) => (
                                    <div key={index}>
                                        <input type="radio"
                                            checked={answer.your_choice === true}
                                            onChange={() => { handleChecked(answer.idAnswer) }}
                                        />&emsp;<label>{answer.answer}</label>
                                    </div>
                                ))
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
                        <h3>Câu {index}:&ensp;<span>({question.typeQuestionContent})</span></h3>
                        <br />
                        <label>{question.question}</label>
                    </div>
                    <div className="Answer">
                        <div className="answer_items">
                            {
                                question.answers.map((answer, index) => (
                                    <div key={index}>
                                        <input type="checkbox"
                                            checked={selectedCheckBox.includes(answer.idAnswer)}
                                            onChange={() => { handleChecked(answer.idAnswer) }}
                                        />&emsp;<label>{answer.answer}</label>
                                    </div>
                                ))
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
}

export default ContentTestingPage