import React from 'react'
import '../../../Css/TestingPage.css'

function ContentTestingPage() {
    return (
        <div class="QuestionContent_wrapper">
            <div class="Question_wrapper">
                <div class="Question">
                    <h3>Câu 4:&ensp;<span>(Có thể chọn một hoặc nhiều phương án)</span></h3>
                    <br />
                    <label>Các thành phần của JPA.</label>
                </div>
                <div class="Answer">
                    <div class="answer_items">
                        <div>
                            <input type="radio" />&emsp;<label>Entity</label>
                        </div>
                        <div>
                            <input type="radio" />&emsp;<label>Peristence</label>
                        </div>
                        <div>
                            <input type="radio" />&emsp;<label>Repository</label>
                        </div>
                        <div>
                            <input type="radio" />&emsp;<label>Query</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Image_wrapper">
                <div class="image_place">
                    <span class="material-icons-outlined"> image </span>
                </div>
            </div>
        </div>
    )
}

export default ContentTestingPage
