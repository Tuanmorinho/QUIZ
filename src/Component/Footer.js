import React from 'react'
import '../Css/Footer.css'

function Footer({disableForTesting}) {
    return (
        <div className={`Footer_wrapper ${disableForTesting}`}>
            <p>Copyright © Team 09 Đồ án LTUDM</p>
        </div>
    )
}

export default Footer
