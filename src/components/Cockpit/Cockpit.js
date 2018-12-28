import React from 'react';
import styles from "./Cockpit.module.scss";

const cockpit = (props) => {
  const classes = [];
  let btnClass = null;
  
  if ( props.showPersonList ) {
    btnClass = styles.red;
  }
  
  if (props.personList.length <= 2) {
    classes.push(styles.red);
  }
  
  if (props.personList.length <= 1) {
    classes.push(styles.bold);
  }
  
  return (
    <div className={styles.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>This is a great family</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;