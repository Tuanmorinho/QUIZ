import React, { useState } from 'react'
import '../../../Css/TestingPage.css'

function ContentTestingPage({ question, index }) {
    return (
        <div className="QuestionContent_wrapper">
            <div className="Question_wrapper">
                <div className="Question">
                    <h3>Câu {index}:&ensp;<span>({question.typeQuestion})</span></h3>
                    <br />
                    <label>{question.question}</label>
                </div>
                <div className="Answer">
                    <div className="answer_items">
                        {
                            question.answers.map((answer, index) => (
                                <div key={index}>
                                    <input type="radio" />&emsp;<label>{answer.answer}</label>
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

export default ContentTestingPage
