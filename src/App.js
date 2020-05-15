import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person_list: [
        { name: 'Mark', age: 46 },
        { name: 'Cristina', age: 32 },
        { name: 'Francesco', age: 1.5 }
      ]
    };
  }

  // https://medium.freecodecamp.org/the-best-way-to-bind-event-handlers-in-react-282db2cf1530
  // you could do switchNameHandler() {...} but the you would need to
  // write in the constructor this.switchNameHandler = this.switchNameHandler.bind(this);
  switchNameHandler = (newName) => {
    this.setState({
      person_list: [
        { name: newName, age: 46 },
        { name: 'Maria Cristina', age: 32 },
        { name: 'Francesco Shaun', age: 1.5 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      person_list: [
        { name: 'Mark Richard', age: 46 },
        { name: event.target.value, age: 32 },
        { name: 'Francesco Shaun', age: 1.5 }
      ]
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am a Ferguson React App </h1>
        <button
        style={buttonStyle}
          onClick={this.switchNameHandler.bind(this, 'Mark Richard')}>Switch Name</button>
        <Person
          name={this.state.person_list[0].name}
          age={this.state.person_list[0].age}
        />
        <Person
          name={this.state.person_list[1].name}
          age={this.state.person_list[1].age}
          click={this.switchNameHandler.bind(this, 'Mark Richard')}
          change={this.nameChangedHandler}>
          My Hobbies: Watching sport
        </Person>
        <Person
          name={this.state.person_list[2].name}
          age={this.state.person_list[2].age}>
          My Hobbies: Drawing
        </Person>
      </div>
    );
  }
}

export default App;
