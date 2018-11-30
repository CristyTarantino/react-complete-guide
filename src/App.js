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
  switchNameHandler = () => {
    this.setState({
      person_list: [
        { name: 'Mark Richard', age: 46 },
        { name: 'Maria Cristina', age: 32 },
        { name: 'Francesco Shaun', age: 1.5 }
      ]
    });
  };
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a Ferguson React App </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person_list[0].name} age={this.state.person_list[0].age}/>
        <Person name={this.state.person_list[1].name} age={this.state.person_list[1].age}>My Hobbies: Watching sport</Person>
        <Person name={this.state.person_list[2].name} age={this.state.person_list[2].age}>My Hobbies: Drawing</Person>
      </div>
    );
  }
}

export default App;
