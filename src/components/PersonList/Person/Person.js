import React from 'react';
import PropTypes from 'prop-types';

import styles from './Person.module.scss';

import WithClass from '../../../hoc/WithClass';

const person = (props) => {
  return (
    <WithClass classes={styles.Person}>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} year old!</p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name} />
    </WithClass>
  )
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default person;