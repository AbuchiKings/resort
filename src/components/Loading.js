import React from 'react';
import loader from "../images/gif/loading-arrow.gif";


function Loading() {
    return (
        <div className="loading">
            <img src={loader} alt=""/>
        </div>
    )
}

export default Loading;
