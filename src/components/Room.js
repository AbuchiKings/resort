import React from 'react';
import { Link } from 'react-router-dom';


function Room({room}) {
    return (
        <article className="room">
            <div className="img-container">
                <img src={room.images[0]} alt="single room" />
                <span className="price-top">{room.price}</span>
            </div>
        </article>
    )
}

export default Room;
