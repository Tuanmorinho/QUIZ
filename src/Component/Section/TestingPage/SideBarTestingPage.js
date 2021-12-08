import React from 'react'
import '../../../Css/TestingPage.css'

function SideBarTestingPage() {
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
                            <h4>Thời
                                gian:&nbsp;<span>02</span>&nbsp;giờ&nbsp;<span>40</span>&nbsp;phút&nbsp;<span>12</span>&nbsp;giây
                            </h4>
                        </div>
                        <div className="actions_wrapper">
                            <button className="status_unfinish">Nộp bài</button>
                        </div>
                    </div>
                </div>

                <div className="Testing_questionList">
                    <div className="QuestionList_wrapper">
                        <h4>Danh sách câu hỏi</h4>
                        <div className="ordinalNumQuestion_wrapper">
                            <div className="ordinalNumQuestion_square status_choosed">
                                <label>1</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_choosed">
                                <label>2</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>3</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_select">
                                <label>4</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>5</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>6</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>7</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>8</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>9</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>10</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>11</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>12</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>13</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>14</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>15</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>16</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>17</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>18</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>19</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>20</label>
                            </div>
                            <div className="ordinalNumQuestion_square status_unchoose">
                                <label>21</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Testing_countQuestion">
                    <div className="countQuestion_wrapper">
                        <h4>Tổng số câu:&ensp;<span className="sumQuestion">20</span></h4>
                        <h4>Số câu đã chọn:&ensp;<span className="choosedQuestion">2</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarTestingPage
