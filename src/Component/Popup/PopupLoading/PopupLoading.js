import React from 'react';
import '../../../Css/NotiPopup.css'

function PopupLoading(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner square'>
                <div className="loader"></div>
            </div>
        </div>
    ) : "";
}

export default PopupLoading;
