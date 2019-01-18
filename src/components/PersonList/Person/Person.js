import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Person.module.scss';

import WithClass from '../../../hoc/WithClass';
import { AuthContext} from "../../../containers/App";

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElement = React.createRef();
  }
  
  componentDidMount() {
    if (this.props.position === 0) {
      // this.inputElement.focus();
      this.focusInput();
    }
  }
  
  focusInput () {
    // this.inputElement.focus();
    this.inputElement.current.focus();
  }
  
  render() {
    return (
      <WithClass classes={styles.Person}>
        <AuthContext.Consumer >
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} year old!</p>
        <p>{this.props.children}</p>
        <input
          // ref={(input) => { this.inputElement = input }}
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </WithClass>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;