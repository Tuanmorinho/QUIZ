import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Account({getLocation}) {

    let location = useLocation();
    useEffect(() => {
        getLocation(location.pathname);
    },[getLocation, location.pathname]);

    return (
        <div>
            
        </div>
    )
}

export default Account
