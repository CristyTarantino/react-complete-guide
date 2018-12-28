import React, { Component } from 'react';
import styles from './App.module.scss';
import Person from './Person/Person';

class FamilyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person_list: [
        { name: 'Mark', age: 46, id: '0' },
        { name: 'Cristina', age: 32, id: '1'},
        { name: 'Francesco', age: 1.5, id: '2'}
      ]
    };
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person_list];  // or this.state.person_list.splice()
    persons.splice(personIndex, 1);
    this.setState({person_list: persons});
  };
  
  nameChangedHandler = (event, id) => {
    const persons = [...this.state.person_list];
    const personIndex = this.state.person_list.findIndex(p => p.id === id);
    const person = {...this.state.person_list[personIndex]};
    
    person.name = event.target.value;
    persons[personIndex] = person;
    
    this.setState({
      person_list: persons
    });
  };
  
  // https://medium.freecodecamp.org/the-best-way-to-bind-event-handlers-in-react-282db2cf1530
  // you could do togglePersonsHandler() {...} but the you would need to
  // write in the constructor this.togglePersonsHandler = this.switchNameHandler.bind(this);
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  
  render() {
    const classes = [];
    let persons = null;
    let btnClass = null;
    
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.person_list.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)} // or click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
  
      btnClass = styles.red;
    }
    
    if (this.state.person_list.length <= 2) {
      classes.push(styles.red);
    }
    
    if (this.state.person_list.length <= 1) {
      classes.push(styles.bold);
    }
    
    return (
        <div className={styles.App}>
          <h1>Hi, I am a Ferguson React App </h1>
          <p className={classes.join(' ')}>This is a great family</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default FamilyApp;
