import React from 'react';
import '../../../Css/ResultSearchPage.css'

function ResultSearch(props) {
    return (props.trigger) ? (
        <div className='popupSearch'>
            <div className='popupSearch-inner'>
                <div className='result_wrapper'>
                    <label>Bài thi</label>
                </div>
                <hr width="100%" align="center" />
                <div className='result_wrapper'>
                    <label>Điểm thi</label>
                </div>
                <hr width="100%" align="center" />
                <div className='result_wrapper'>
                    <label>Lớp</label>
                </div>
            </div>
        </div>
    ) : "";
}

export default ResultSearch;