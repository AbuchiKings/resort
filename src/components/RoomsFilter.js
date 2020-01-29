import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';


//get unique room types
function getUnique(items, value) {
    return [...new Set(items.map(item => item[value]))];
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { type, capacity, price, minPrixe, maxPrice,
        minSize, maxSize, breakfast, pets, handleChange } = context;
    //get unique room types
    let types = getUnique(rooms, 'type');
    //add all to types options
    types.unshift('all');
    //map to JSX
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let numOfPeople = getUnique(rooms, 'capacity');
    numOfPeople = numOfPeople.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form action="" className="filter-form">

                {/* select by type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>

                {/* select by capacity */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" className="form-control"
                        onChange={handleChange}>
                        {numOfPeople}
                    </select>
                </div>

                {/* filter by price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price" id="price" min={minPrixe}
                        max={maxPrice} value={price} onChange={handleChange}
                        className="form-control"
                    />
                </div>

                {/* filter by size */}
                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                    <div className="size-inputs">

                        <input type="number" name="minSize" id="size"
                         className="size-input" value={minSize} onChange={handleChange}/>

                        <input type="number" name="maxSize" id="size"
                         className="size-input" value={maxSize} onChange={handleChange}/>
                    </div>
                </div>

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"
                            className="" onChange={handleChange} checked={breakfast}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"
                            className="" onChange={handleChange} checked={breakfast}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>


            </form>
        </section>
    );
}



export default RoomsFilter;


