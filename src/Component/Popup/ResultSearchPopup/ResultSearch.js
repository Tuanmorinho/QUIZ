import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Css/ResultSearchPage.css'

function ResultSearch(props) {
    return (props.trigger) ? (
        <div className='popupSearch'>
            <div className='popupSearch-inner'>
                <div className='result-of'>
                    <span className="material-icons icon-resultSearch"> search </span>
                    <label>Kết quả cho: '<span>{props.valueInput}</span>'</label>
                </div>
                <div className='result_wrapper'>
                    <div className='result_wrapper-header'>
                        <label>BÀI THI</label>
                        <Link
                            style={{
                                'textDecorationLine': 'none',
                                'color': 'gray'
                            }}
                            to={{
                                pathname: '/exam',
                                search: `p=${props.valueInput}`
                            }}
                            onClick={() => props.clearText('')}
                        ><p className='link-searchPage'>Xem thêm</p></Link>
                    </div>
                    <hr width="100%" align="center" />
                    <div className='result'>

                    </div>
                </div>
                <div className='result_wrapper'>
                    <div className='result_wrapper-header'>
                        <label>ĐIỂM THI</label>
                        <Link
                            style={{
                                'textDecorationLine': 'none',
                                'color': 'gray'
                            }}
                            to={{
                                pathname: '/grade',
                                search: `p=${props.valueInput}`
                            }}
                            onClick={() => props.clearText('')}
                        ><p className='link-searchPage'>Xem thêm</p></Link>
                    </div>
                    <hr width="100%" align="center" />
                    <div className='result'>

                    </div>
                </div>
                <div className='result_wrapper'>
                    <div className='result_wrapper-header'>
                        <label>LỚP GHI DANH</label>
                        <Link
                            style={{
                                'textDecorationLine': 'none',
                                'color': 'gray'
                            }}
                            to={{
                                pathname: '/join',
                                search: `p=${props.valueInput}`
                            }}
                            onClick={() => props.clearText('')}
                        ><p className='link-searchPage'>Xem thêm</p></Link>
                    </div>
                    <hr width="100%" align="center" />
                    <div className='result'>

                    </div>
                </div>
            </div>
        </div>
    ) : '';
}

export default ResultSearch;