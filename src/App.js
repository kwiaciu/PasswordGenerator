import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { PasswordGenerator } from './PasswordGenerator.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">RANDOM PASSWORD GENERATOR</h1>
        </header>
        <div>
          <PasswordGenerator />
        </div>
      </div>

    );
  }
}

export default App;

