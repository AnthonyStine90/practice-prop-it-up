import React from "react"

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;

    return (
        <div className='card mb-2'>
            <h2 className='card-header'>{firstName}, {lastName}</h2>
            <div className="card-body">
                <p className='card-text'>Age: {age}</p>
                <p className='card-text'>Hair Color : {hairColor}</p>
            </div>    
        </div>
    )
}

export default PersonCard