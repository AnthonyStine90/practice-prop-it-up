import React from "react"
import { useState } from "react";

const PersonCard = (props) => {
    const [ age, setAge ] = useState(props.age);
    //useState is a function when you call it is an array. The first element will be a piece of "state", the second will upate the piece of state
    // Optional: initial value. not necessary, but good practice
    const { firstName, lastName, hairColor } = props;

    return (
        <div className='card mb-2'>
            <h2 className='card-header'>{firstName}, {lastName}</h2>
            <div className="card-body">
                <p className='card-text'>Age: {age}</p>
                <p className='card-text'>Hair Color : {hairColor}</p>
            </div>
            <button 
            // anfn onclick button shortcut
            onClick={() => setAge(age + 1)}
            className="btn btn-secondary">
                Birthday
            </button>    
        </div>
    )
}

export default PersonCard