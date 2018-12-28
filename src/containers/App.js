import React, { Component } from 'react';
import styles from './App.module.scss';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: [
        { name: 'Mark', age: 46, id: '0' },
        { name: 'Cristina', age: 32, id: '1'},
        { name: 'Francesco', age: 1.5, id: '2'}
      ]
    };
  }
  
  deletePersonHandler = (personIndex) => {
    const personList = [...this.state.personList];  // or this.state.personList.splice()
    personList.splice(personIndex, 1);
    this.setState({personList: personList});
  };
  
  nameChangedHandler = (event, id) => {
    const personList = [...this.state.personList];
    const personIndex = this.state.personList.findIndex(p => p.id === id);
    const person = {...this.state.personList[personIndex]};
    
    person.name = event.target.value;
    personList[personIndex] = person;
    
    this.setState({
      personList: personList
    });
  };
  
  // https://medium.freecodecamp.org/the-best-way-to-bind-event-handlers-in-react-282db2cf1530
  // you could do togglePersonListHandler() {...} but the you would need to
  // write in the constructor this.togglePersonListHandler = this.switchNameHandler.bind(this);
  togglePersonListHandler = () => {
    const doesShow = this.state.showPersonList;
    this.setState({showPersonList: !doesShow});
  };
  
  render() {
    let persons = null;
    
    if ( this.state.showPersonList ) {
      persons =
          <PersonList
            personList={this.state.personList}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;
    }
    
    return (
        <div className={styles.App}>
          <Cockpit
            appTitle={this.props.title}
            personList = {this.state.personList}
            showPersonList = {this.state.showPersonList}
            clicked={this.togglePersonListHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;
