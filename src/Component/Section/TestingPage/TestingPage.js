import React from 'react'
import '../../../Css/TestingPage.css'
import ContentTestingPage from './ContentTestingPage';
import SideBarTestingPage from './SideBarTestingPage'

function TestingPage() {
    return (
        <div class="App_withSidebar">
            <div className="App_sidebarWrap">
                <SideBarTestingPage />
                <div class="App_withSidebarContent">
                    <section class="Section_content">
                        <ContentTestingPage />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default TestingPage;
