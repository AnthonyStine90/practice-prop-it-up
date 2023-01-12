import React from 'react'
import PersonCard from './components/PersonCard';
import people from './person_data/persons.js';

const App = () => {
  return (
    <div className="container mt-2">
      <div className='card bg-secondary'>
        <div className="card-body">
          <h1 className="card-title text-white">Customer Information</h1>
          {
            //need to use curly braces to tell react you are using javascript
            people.map((person, idx) => (<PersonCard
            //use .map to "map" over array/info data
            //every element in a map needs a unique key (idx)
            firstName={person.firstName}
            lastName={person.lastName}
            age={person.age}
            hairColor={person.hairColor}
          />
          ))}


        </div>
      </div>
    </div>
  )
}

export default App;