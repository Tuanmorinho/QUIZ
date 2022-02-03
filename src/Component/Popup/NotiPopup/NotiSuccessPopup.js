import React from 'react';
import '../../../Css/NotiPopup.css'

function NotiSuccessPopup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default NotiSuccessPopup;
