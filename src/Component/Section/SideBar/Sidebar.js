import React from 'react'
import '../../../Css/Sidebar.css'

function Sidebar() {
    return (
        <div class="Sidebar_wrapper">
            <div class="Sidebar_list">
                <li class="active">
                    <a href="/Home">
                        <span class="material-icons icon_home"> account_balance </span>
                        <span class="Sidebar_menu home">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/Exam">
                        <span class="material-icons icon_exam"> school </span>
                        <span class="Sidebar_menu exam">Exam</span>
                    </a>
                </li>
                <li>
                    <a href="/Grade">
                        <span class="material-icons icon_grade"> card_membership </span>
                        <span class="Sidebar_menu grade">Grade</span>
                    </a>
                </li>
                <li>
                    <a href="/Account">
                        <span class="material-icons icon_me"> account_circle </span>
                        <span class="Sidebar_menu me">Me</span>
                    </a>
                </li>
            </div>
        </div>
    )
}

export default Sidebar
