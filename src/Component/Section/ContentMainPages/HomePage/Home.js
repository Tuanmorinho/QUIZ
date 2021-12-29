import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../../../Css/Home.css'
import HomeContent from './HomeContent/HomeContent'
import HomeHeader from './HomeHeader'

function Home({route, getLocation}) {
    
    let location = useLocation();
    useEffect(() => {
        getLocation(location.pathname);
    },[getLocation, location.pathname]);

    return (
        <React.Fragment>
            <HomeHeader />
            <HomeContent route={route}/>
        </React.Fragment>
    )
}

export default Home
