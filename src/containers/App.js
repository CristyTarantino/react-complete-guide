import React, { PureComponent } from 'react';
import styles from './App.module.scss';

// import WithClass from '../hoc/WithClass';
import newWithClass from '../hoc/NewWithClass';

import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      personList: [
        { name: 'Mark', age: 46, id: '0' },
        { name: 'Cristina', age: 32, id: '1'},
        { name: 'Francesco', age: 1.5, id: '2'}
      ]
    };
  
    console.log('[App.js] Inside Constructor', props);
  }
  
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }
  
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }
  
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps, nextContext);
  }
  
  // the one below is if you inherit from Component
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState, nextContext);
  //   return nextState.personList !== this.state.personList ||
  //     nextState.showPersonList !== this.state.showPersonList;
  // }
  
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState, nextContext);
  }
  
  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
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
    console.log('[App.js] Inside render');
    
    if ( this.state.showPersonList ) {
      persons =
          <PersonList
            personList={this.state.personList}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;
    }
    
    return (
        /*<WithClass classes={styles.App}>*/
        <>
          <Cockpit
            appTitle={this.props.title}
            personList = {this.state.personList}
            showPersonList = {this.state.showPersonList}
            clicked={this.togglePersonListHandler}
          />
          {persons}
          </>
        // </WithClass>
    );
  }
}

export default newWithClass(App, styles.App);
