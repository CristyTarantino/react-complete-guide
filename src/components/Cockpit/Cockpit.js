import React from 'react';
import styles from "./Cockpit.module.scss";

const cockpit = (props) => {
  const classes = [];
  let btnClass = styles.button;
  
  if ( props.showPersonList ) {
    btnClass = [styles.button, styles.red].join(' ');
  }
  
  if (props.personList.length <= 2) {
    classes.push(styles.red);
  }
  
  if (props.personList.length <= 1) {
    classes.push(styles.bold);
  }
  
  return (
    //fragment component does what Aux do
    <>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>This is a great family</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </>
  );
};

export default cockpit;