// eslint-disable-next-line
import React, { useEffect, useRef, useContext } from 'react';
import styles from "./Cockpit.module.scss";
import AuthContext from '../../context/AuthContext';

const Cockpit = props => {
  // const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // Http request...
    let timeout = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);

    // toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
      clearTimeout(timeout);
    }
  }, []);
  // if the last argument is [] then it gets executed only at the beginning

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const classes = [];
  let btnClass = styles.button;

  if (props.showPersonList) {
    btnClass = [styles.button, styles.red].join(' ');
  }

  if (props.personList.length <= 2) {
    classes.push(styles.red);
  }

  if (props.personList.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    // React.fragment or <> component does what Aux do
    <>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>This is a great family</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>

      <button onClick={authContext.login}>
        { authContext.isAuth ? 'Logout' : 'Login' }
      </button>
    </>
  );
};

// React memo in functional component = PureComponent in class based component
export default React.memo(Cockpit);