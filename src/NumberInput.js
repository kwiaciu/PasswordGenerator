import React from 'react';
import './NumberInput.css';

export class NumberInput extends React.Component {
  
  handleUserInput = (e) => {
    this.props.onUserInputChange(e.target.value, e.target.name);
  }

  render() {
    return (
        <input name={this.props.name} onChange={this.handleUserInput} min='2' max='50' type="range" defaultValue='12' />
    );
  }
}
