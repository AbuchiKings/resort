import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { withRoomConsumer } from "../context";

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return (
            <Loading></Loading>
        )
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )

}

export default withRoomConsumer(RoomsContainer)


// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../context'
// import Loading from './Loading';
// import withRoomConsumer from './RoomsContainer';
//function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     console.log(value)
//                     const { loading, sortedRooms, rooms } = value;
//                     if(loading){
//                         return(
//                             <Loading></Loading>
//                         )
//                     }
//                     return (
//                         <div>
//                             Hello from room container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>

//     )
// }



// export default RoomsContainer;
