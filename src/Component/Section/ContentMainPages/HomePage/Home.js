import React from 'react'
import '../../../../Css/Home.css'
import HomeContent from './HomeContent/HomeContent'
import HomeHeader from './HomeHeader'

function Home() {
    return (
        <React.Fragment>
            <HomeHeader />
            <HomeContent />
        </React.Fragment>
    )
}

export default Home
