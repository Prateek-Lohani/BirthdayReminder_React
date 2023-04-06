import React from 'react'

const Person = ({name,age,image}) => {
  return (
    <div>
        <img src={image} alt={name}/>
        <h4>{name}</h4>
        <h5>Age:{age}</h5>
    </div>
  )
}

export default Person