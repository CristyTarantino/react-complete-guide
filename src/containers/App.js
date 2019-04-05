import React, { PureComponent } from 'react';
import styles from './App.module.scss';

import withClassAndProps from '../hoc/WithClassAndProps';

import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

import AuthContext from '../context/AuthContext'

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[CREATE App.js] Inside Constructor', props);
  }

  state = {
    personList: [
      { name: 'Mark', age: 46, id: '0' },
      { name: 'Cristina', age: 32, id: '1'},
      { name: 'Francesco', age: 1.5, id: '2'}
    ],
    toggleClicked: 0,
    showPersonList: false,
    showCockpit: true,
    changeCounter: 0,
    isAuth: false
  };

  // https://reactjs.org/docs/state-and-lifecycle.html

  // Legacy lifecycle hook
  // componentWillMount() {
  //   console.log('[App.js] Inside componentWillMount');
  // }

  /*
   * Creation Life hooks
   */

  // for component that needs to get props and state in sync
  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log('[CREATE App.js] Inside getDerivedStateFromProps', nextProps, prevProps);

    return nextProps;
  }

  // then render executed

  // then render child components

  componentDidMount() {
    console.log('[CREATE App.js] Inside componentDidMount');
  }

  /*
   * Update Life hooks
   */

  // Legacy lifecycle hook
  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps, nextContext);
  // }

  // static getDerivedStateFromProps(nextProps, prevProps) {
  //   console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevProps);
  //   return nextProps;
  // }

  // Decide whether to continue or not therefore may cancel updating process
  // the one below is if you inherit from Component
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState, nextContext);
  //   return nextState.personList !== this.state.personList ||
  //     nextState.showPersonList !== this.state.showPersonList;
  // }

  // then render executed

  // then render child components

  // get snapshot of your dom right before is about to change
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate', prevProps, prevState);
    return { message: 'Snapshot!' };
  }

  // Legacy
  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState, nextContext);
  // }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personList = [...this.state.personList];
    const personIndex = this.state.personList.findIndex(p => p.id === id);
    const person = {...this.state.personList[personIndex]};

    person.name = event.target.value;
    personList[personIndex] = person;

    // this is the correct way to update the status
    // setState is asynchronously so if this is run somewhere else in the app
    // by doing so you ensure that your counter is updated correctly based on the prevState
    this.setState((prevState, props) => {
      return {
        personList: personList,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    const personList = [...this.state.personList];  // or this.state.personList.splice()
    personList.splice(personIndex, 1);
    this.setState({personList: personList});
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

  loginHandler = () => {
    this.setState(prevState => {
      return {
        isAuth: !prevState.isAuth
      }
    })
  };

  render() {
    console.log('[App.js] Inside render');
    let person_list = null;

    if ( this.state.showPersonList ) {
      person_list =
          <PersonList
            personList={this.state.personList}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;
    }

    return (
        /*<WithClass classes={styles.App}>*/
        <>
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
            }}
          >
            Remove Cockpit
          </button>
          <AuthContext.Provider value={{isAuth: this.state.isAuth, login: this.loginHandler}}>
            {this.state.showCockpit ? (
            <Cockpit
              appTitle={this.props.title}
              personList = {this.state.personList}
              showPersonList = {this.state.showPersonList}
              clicked={this.togglePersonListHandler}
            />
            ) : null}
            {person_list}
          </AuthContext.Provider>
          </>
        // </WithClass>
    );
  }
}

// https://reactjs.org/docs/higher-order-components.html withClassAndProps
export default withClassAndProps(App, styles.App);