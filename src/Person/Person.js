import React from 'react';
import './Person.scss';
import Radium from 'radium';

const person = (props) => {
  const personStyle = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  
  return (
    <div className="Person" style={personStyle}>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} year old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default Radium(person);