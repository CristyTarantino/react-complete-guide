import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p>My name is {props.name} and I am {props.age} year old!</p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )
};

export default person;