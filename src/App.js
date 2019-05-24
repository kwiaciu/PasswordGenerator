import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { PasswordGenerator } from './PasswordGenerator.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className="App-header">
          <h1 className="App-title">PASSWORD GENERATOR</h1>
        </header>
        <div>
          <PasswordGenerator />
        </div>
      </div>

    );
  }
}

export default App;

