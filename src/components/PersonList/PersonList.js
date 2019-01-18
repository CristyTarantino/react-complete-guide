import React, { PureComponent } from 'react';
import Person from './Person/Person';

class PersonList extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[PersonList.js] Inside Constructor', props);
  }
  
  componentWillMount() {
    console.log('[PersonList.js] Inside componentWillMount');
  }
  
  componentDidMount() {
    console.log('[PersonList.js] Inside componentDidMount');
  }
  
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('[UPDATE PersonList.js] Inside componentWillReceiveProps', nextProps, nextContext);
  }
  
  // the one below is if you inherit from Component
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[UPDATE PersonList.js] Inside shouldComponentUpdate', nextProps, nextState, nextContext);
  //   return nextProps.personList !== this.props.personList;
  // }
  
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('[UPDATE PersonList.js] Inside componentWillUpdate', nextProps, nextState, nextContext);
  }
  
  componentDidUpdate() {
    console.log('[UPDATE PersonList.js] Inside componentDidUpdate');
  }
  
  render() {
    console.log('[PersonList.js] Inside render');
    return this.props.personList.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
      />
    });
  }
}

export default PersonList;