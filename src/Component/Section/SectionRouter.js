import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import TestingPage from './TestingPage/TestingPage'
import MainPagesRouterSidebar from './MainPagesRouterSidebar'

function SectionRouter() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/testID" component={TestingPage} />
                    <Route path="/" component={MainPagesRouterSidebar} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default SectionRouter
