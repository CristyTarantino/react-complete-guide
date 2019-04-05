import React, { PureComponent } from 'react';
import Person from './Person/Person';

class PersonList extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[PersonList.js] Inside Constructor', props);
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // Legacy
  // componentWillMount() {
  //   console.log('[PersonList.js] Inside componentWillMount');
  // }

  componentDidMount() {
    console.log('[CREATE PersonList.js] Inside componentDidMount');
  }

  // Legacy
  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('[UPDATE PersonList.js] Inside componentWillReceiveProps', nextProps, nextContext);
  // }

  // the one below is if you inherit from Component
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[UPDATE PersonList.js] Inside shouldComponentUpdate', nextProps, nextState, nextContext);
  //   return nextProps.personList !== this.props.personList;
  // }

  // Legacy
  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('[UPDATE PersonList.js] Inside componentWillUpdate', nextProps, nextState, nextContext);
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[UPDATE Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[UPDATE PersonList.js] Inside componentDidUpdate');
    console.log("snapshot", snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[PersonList.js] Inside render');
    return this.props.personList.map((person, index) => {
      return <Person
        key={person.id}
        position={index}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
      />
    });
  }
}

export default PersonList;