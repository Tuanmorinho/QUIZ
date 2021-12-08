import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import TestingPage from './TestingPage/TestingPage'
import MainPages from './MainPagesRouterSidebar'

function SectionRouter() {
    return (
        <React.Fragment>
            <Router>
                <Route path="/" exact component={MainPages} />
                <Route path="/testingpage" exact component={TestingPage} />
            </Router>
        </React.Fragment>
        
    )
}

export default SectionRouter
