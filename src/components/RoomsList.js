import React from 'react';
import Room from './Room';

function RoomsList({ sortedRooms }) {
    //  parameter used here is the sortedRooms
    if (sortedRooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately, no rooms matched your search parameter</h3>
            </div>
        )

    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    sortedRooms.map((item) => {
                        return <Room key={item.id} room={item} />;
                    })
                }
            </div>
        </section>
    );
}

export default RoomsList;
