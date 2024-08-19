import React from 'react'
import Profile from "./Profile"

const PersonList = ({persons,updateVideo,dispatch}) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={Math.random()}>
            <Profile
              key={Math.random()}
              id={person.id}
              name={person.name}
              age={person.age}
              job={person.job}
              dispatch={dispatch}
              updateVideo={updateVideo}
            ></Profile>
          </div>
        );
      })}
    </div>
  )
}

export default PersonList
