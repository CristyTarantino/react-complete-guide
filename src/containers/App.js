import React, { PureComponent } from 'react';
import styles from './App.module.scss';

import newWithClass from '../hoc/NewWithClass';

import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

import AuthContext from '../AuthContext'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      personList: [
        { name: 'Mark', age: 46, id: '0' },
        { name: 'Cristina', age: 32, id: '1'},
        { name: 'Francesco', age: 1.5, id: '2'}
      ],
      toggleClicked: 0,
      isAuth: false
    };
  
    console.log('[App.js] Inside Constructor', props);
  }
  
  // https://reactjs.org/docs/state-and-lifecycle.html
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }
  
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }
  
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps, nextContext);
  }
  
  // for component that needs to get props and state in sync
  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevProps);
    
    return nextProps;
  }
  
  // get snapshot of your dom right before is about to change
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate', prevProps, prevState);
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
    
    // setState runs asynchronously so you might not get the right toggleClicked
    // if at the same time in some other place setState is being called
    // therefore is safer to call set state with a callback
    this.setState((previousState, props) => {
      return {
        showPersonList: !doesShow,
        toggleClicked: previousState.toggleClicked + 1
      }
    });
  };
  
  toggleAuth = () => {
    this.setState(prevState => {
      return {
        isAuth: !prevState.isAuth
      }
    })
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
          <AuthContext.Provider value={{isAuth: this.state.isAuth, toggleAuth: this.toggleAuth}}>
            <Cockpit
              appTitle={this.props.title}
              personList = {this.state.personList}
              showPersonList = {this.state.showPersonList}
              clicked={this.togglePersonListHandler}
            />
            {persons}
          </AuthContext.Provider>
          </>
        // </WithClass>
    );
  }
}

// https://reactjs.org/docs/higher-order-components.html newWithClass
export default newWithClass(App, styles.App);