import React, { Component } from 'react';
import styles from "./Cockpit.module.scss";
import AuthContext from '../../AuthContext';

class Cockpit extends Component {
  static contextType = AuthContext;
  
  render() {
    const classes = [];
    let btnClass = styles.button;
    
    if (this.props.showPersonList ) {
      btnClass = [styles.button, styles.red].join(' ');
    }
  
    if (this.props.personList.length <= 2) {
      classes.push(styles.red);
    }
  
    if (this.props.personList.length <= 1) {
      classes.push(styles.bold);
    }
    
    return (
      //fragment component does what Aux do
      <>
        <h1>{this.props.appTitle}</h1>
        <p className={classes.join(' ')}>This is a great family</p>
        <button
          className={btnClass}
          onClick={this.props.clicked}>
          Toggle Persons
        </button>
        
        <button onClick={this.context.toggleAuth}>
          { this.context.isAuth ? 'Logout' : 'Login' }
        </button>
      </>
    )
  };
};

export default Cockpit;