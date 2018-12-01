import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetch('/tasks')
      .then(res => res.json())
      .then((users) => {
        this.setState({
          users
        })
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
          {this.state.users.map(elt => {
            return (
              <li>{elt}</li>
            )
          })}
          </ul>
            
        </header>
      </div>
    );
  }
}

export default App;
